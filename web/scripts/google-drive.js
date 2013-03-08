var CLIENT_ID = '346280468867.apps.googleusercontent.com';
var SCOPES = 'https://www.googleapis.com/auth/drive';

/**
 * Called when the client library is loaded to start the auth flow.
 */
function handleClientLoad() {
    window.setTimeout(checkAuth, 1);
}

/**
 * Check if the current user has authorized the application.
 */
function checkAuth() {
    gapi.auth.authorize(
        { 'client_id': CLIENT_ID, 'scope': SCOPES, 'immediate': true },
        handleAuthResult);
}

/**
 * Called when authorization server replies.
 *
 * @param {Object} authResult Authorization result.
 */
function handleAuthResult(authResult) {
    var authButton = document.getElementById('authorizeButton');
    var filePicker = document.getElementById('filePicker');
    authButton.style.display = 'none';
    filePicker.style.display = 'none';
    if (authResult && !authResult.error) {
        // Access token has been successfully retrieved, requests can be sent to the API.
        filePicker.style.display = 'block';
        filePicker.onchange = uploadFile;

        gapi.client.load('drive', 'v2', function () {
            initStuff();
        });
    } else {
        // No access token could be retrieved, show the button to start the authorization flow.
        authButton.style.display = 'block';
        authButton.onclick = function () {
            gapi.auth.authorize(
                { 'client_id': CLIENT_ID, 'scope': SCOPES, 'immediate': false },
                handleAuthResult);
        };
    }
}

/**
 * Start the file upload.
 *
 * @param {Object} evt Arguments from the file selector.
 */
function uploadFile(evt) {
    gapi.client.load('drive', 'v2', function () {
        var file = evt.target.files[0];
        insertFile(file);
    });
}

/**
 * Insert new file.
 *
 * @param {File} fileData File object to read data from.
 * @param {Function} callback Function to call when the request is complete.
 */
function insertFile(fileData, parentId, callback) {
    var boundary = '-------314159265358979323846';
    var delimiter = "\r\n--" + boundary + "\r\n";
    var close_delim = "\r\n--" + boundary + "--";

    var reader = new FileReader();
    reader.readAsBinaryString(fileData);
    reader.onload = function (e) {
        var contentType = fileData.type || 'application/octet-stream';
        var metadata = {
            'title': fileData.name,
            'parents': [{ "id": parentId }],
            'mimeType': contentType
        };

        var base64Data = btoa(reader.result);
        var multipartRequestBody =
            delimiter +
            'Content-Type: application/json\r\n\r\n' +
            JSON.stringify(metadata) +
            delimiter +
            'Content-Type: ' + contentType + '\r\n' +
            'Content-Transfer-Encoding: base64\r\n' +
            '\r\n' +
            base64Data +
            close_delim;

        var request = gapi.client.request({
            'path': '/upload/drive/v2/files',
            'method': 'POST',
            'params': { 'uploadType': 'multipart' },
            'headers': {
                'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
            },
            'body': multipartRequestBody
        });
        if (!callback) {
            callback = function (file) {
                console.log(file);
            };
        }
        request.execute(callback);
    };
}
/**
 * Insert new file from base64.
 *
 * @param {File} fileData File object to read data from.
 * @param {Function} callback Function to call when the request is complete.
 */
function insertFileFromBase64(filename, parentId, base64Data, callback) {
    var boundary = '-------314159265358979323846';
    var delimiter = "\r\n--" + boundary + "\r\n";
    var closeDelim = "\r\n--" + boundary + "--";

    var contentType = 'application/octet-stream';
    var metadata = {
        'title': filename,
        'parents': [{ "id": parentId }],
        'mimeType': contentType
    };

    var multipartRequestBody =
        delimiter +
        'Content-Type: application/json\r\n\r\n' +
        JSON.stringify(metadata) +
        delimiter +
        'Content-Type: ' + contentType + '\r\n' +
        'Content-Transfer-Encoding: base64\r\n' +
        '\r\n' +
        base64Data +
        closeDelim;

    var request = gapi.client.request({
        'path': '/upload/drive/v2/files',
        'method': 'POST',
        'params': { 'uploadType': 'multipart' },
        'headers': {
            'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
        },
        'body': multipartRequestBody
    });
    if (!callback) {
        callback = function (file) {
            console.log(file);
        };
    }
    request.execute(callback);
}

function base64ArrayBuffer(arrayBuffer) {
    var base64 = '';
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var bytes = new Uint8Array(arrayBuffer);
    var byteLength = bytes.byteLength;
    var byteRemainder = byteLength % 3;
    var mainLength = byteLength - byteRemainder;
    var a, b, c, d;
    var chunk; // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
        // Combine the three bytes into a single integer
        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]; // Use bitmasks to extract 6-bit segments from the triplet
        a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
        c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
        d = chunk & 63; // 63       = 2^6 - 1

        // Convert the raw binary segments to the appropriate ASCII encoding
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
        chunk = bytes[mainLength];
        a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

        // Set the 4 least significant bits to zero
        b = (chunk & 3) << 4; // 3   = 2^2 - 1

        base64 += encodings[a] + encodings[b] + '==';
    } else if (byteRemainder == 2) {
        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
        a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
        b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

        // Set the 2 least significant bits to zero
        c = (chunk & 15) << 2; // 15    = 2^4 - 1

        base64 += encodings[a] + encodings[b] + encodings[c] + '=';
    }

    return base64;
}

/**
 * Print a file's metadata.
 *
 * @param {String} fileId ID of the file to print metadata for.
 */
function printFile(fileId) {
    var request = gapi.client.drive.files.get({
        'fileId': fileId
    });
    request.execute(function (resp) {
        console.log('Title: ' + resp.title);
        console.log('Description: ' + resp.description);
        console.log('MIME type: ' + resp.mimeType);
    });
}

/**
 * Download a file's content.
 *
 * @param {File} file Drive File instance.
 * @param {Function} callback Function to call when the request is complete.
 */
function downloadFile(file, callback) {
    if (file.downloadUrl) {
        var accessToken = gapi.auth.getToken().access_token;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', file.downloadUrl);
        xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        xhr.onload = function () {
            callback(xhr.responseText);
        };
        xhr.onerror = function () {
            callback(null);
        };
        xhr.send();
    } else {
        callback(null);
    }
}

/**
 * Retrieve a list of File resources.
 *
 * @param {Function} callback Function to call when the request is complete.
 */
function retrieveAllFiles(query, callback) {
    var retrievePageOfFiles = function (request, result) {
        request.execute(function (resp) {
            result = result.concat(resp.items);
            var nextPageToken = resp.nextPageToken;
            if (nextPageToken) {
                request = gapi.client.drive.files.list({
                    'pageToken': nextPageToken
                });
                retrievePageOfFiles(request, result);
            } else {
                callback(result);
            }
        });
    };
    var initialRequest = gapi.client.drive.files.list({
        'q': query
    });
    retrievePageOfFiles(initialRequest, []);
}

/**
 * Insert a file into a folder.
 *
 * @param {String} folderId ID of the folder to insert the file into.
 * @param {String} fileId ID of the file to insert.
 */
function insertFileIntoFolder(folderId, fileId) {
    var body = { 'id': folderId };
    var request = gapi.client.drive.parents.insert({
        'fileId': fileId,
        'resource': body
    });
    request.execute(function (resp) { });
}

/**
 * Create a folder.
 *
 * @param {String} folderId ID of the folder to insert the file into.
 * @param {String} fileId ID of the file to insert.
 */
function createFolder() {

    var accessToken = gapi.auth.getToken().access_token;

    var request = gapi.client.request({
        'path': '/drive/v2/files/',
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
        },
        'body': {
            "title": "quake_js",
            "mimeType": "application/vnd.google-apps.folder",
        }
    });

    request.execute(function (resp) {
        console.log(resp);
        console.log("Created folder: " + resp.title);
    });
}


var quakeFolderId;

function initStuff() {
    retrieveAllFiles("mimeType='application/vnd.google-apps.folder' and title='quake_js' and trashed = false", function (files) {
        console.log("retrieveAllFiles", arguments);

        for (var i = 0; i < files.length; i++) {
            var quakeFolder = files[i];
            if (quakeFolder && quakeFolder.title == "quake_js") {
                //var fileToUpload = new Uint8Array(10);
                //fileToUpload[0] = 72;
                //fileToUpload[1] = 73;
                //insertFileFromBase64("test.txt", quakeFolder.id, base64ArrayBuffer(fileToUpload.buffer), function () {
                //    console.log("created file");
                //});

                quakeFolderId = quakeFolder.id;


                retrieveAllFiles("'" + quakeFolderId + "' in parents and trashed = false", function (quakeFiles) {
                    console.log("retrieveAllFiles quake folder", arguments);
                    for (var j = 0; j < quakeFiles.length; j++) {
                        var quakeFile = quakeFiles[j];
                        if (quakeFile) {
                            var $link = $("<div><img src=\"" + quakeFile.iconLink + "\">" +
                                "<a href=\"" + "#" + "\">" + quakeFile.title + "</a></div>");
                            $link.find("a").click(function (e) {
                                e.preventDefault();
                                downloadFile(quakeFile, function () {
                                    console.log("downloadFile", arguments);
                                });
                            });
                            $("body").append($link);
                        }
                    }
                });

                return;
            }
        }

        createFolder();
    });
}

function dataUriToArrayBuffer(dataUri) {
    var binary = atob(dataUri.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Uint8Array(array).buffer;
}

function GoogleDrive() {
    
}

GoogleDrive.insertFileIntoFolderFromText = function (filename, text, callback) {
    insertFileFromBase64(filename, quakeFolderId, btoa(text), function () {
        console.log("done insertFileIntoFolderFromText ", arguments);
        if (typeof callback === "function") {
            callback();
        }
    });
};

GoogleDrive.insertFileIntoFolder = function(filename, arrayBuffer, callback) {
    insertFileFromBase64(filename, quakeFolderId, base64ArrayBuffer(arrayBuffer), function () {
        console.log("done insertFileFromBase64 ", arguments);
        if (typeof callback === "function") {
            callback();
        }
    });
};

GoogleDrive.insertFileIntoFolderFromDataUri = function(filename, dataUri, callback) {
    return GoogleDrive.insertFileIntoFolder(filename, dataUriToArrayBuffer(dataUri), callback);
};