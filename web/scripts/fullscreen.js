function initFullScreen() {
    var gameCanvas = $("#gameCanvas")[0];
    if (gameCanvas.requestFullscreen) {
        gameCanvas.requestFullscreen();
    } else if (gameCanvas.mozRequestFullScreen) {
        gameCanvas.mozRequestFullScreen();
    } else if (gameCanvas.webkitRequestFullscreen) {
        gameCanvas.webkitRequestFullscreen();
    }

    $("#fullscreen").click(toggleFullScreen);

    function toggleFullScreen(e) {
        e.preventDefault();

        if ((document.fullscreenElement && document.fullscreenElement !== null) || // alternative standard method
            (!document.mozFullScreenElement && !document.webkitFullscreenElement)) { // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    window.addEventListener('resize', resizeGame, false);
    window.addEventListener('orientationchange', resizeGame, false);
    setInterval(resizeGame, 250); // todo! useful when vid mode changed
    resizeGame();

    function resizeGame() {
        var $gameArea = $('#gameArea');
        var widthToHeight = gameCanvas.width / gameCanvas.height;
        var newWidth = window.innerWidth;
        var newHeight = window.innerHeight;
        var newWidthToHeight = newWidth / newHeight;

        if (newWidthToHeight > widthToHeight) {
            newWidth = newHeight * widthToHeight;
            $gameArea.css({
                height: newHeight + 'px',
                width: newWidth + 'px'
            });
        } else {
            newHeight = newWidth / widthToHeight;
            $gameArea.css({
                height: newHeight + 'px',
                width: newWidth + 'px'
            });
        }
    }
    






    //////////////////////////////////////////





    function pointerLockError() {
        console.log("Error while locking pointer.");
    }

    document.addEventListener('pointerlockerror', pointerLockError, false);
    document.addEventListener('mozpointerlockerror', pointerLockError, false);
    document.addEventListener('webkitpointerlockerror', pointerLockError, false);

    document.addEventListener("mousemove", function (e) {
        var movementX = e.movementX ||
            e.mozMovementX ||
            e.webkitMovementX ||
            0,
            movementY = e.movementY ||
                e.mozMovementY ||
                e.webkitMovementY ||
                0;

        // Print the mouse movement delta values
        //console.log("movementX=" + movementX, "movementY=" + movementY);
        document.pointerLockElement = document.pointerLockElement ||
            document.mozPointerLockElement ||
            document.webkitPointerLockElement;

        // 1) Used as a boolean check--are we pointer locked?
        if (!!document.pointerLockElement) {
            console.log(movementX, movementY)
            global.updateMouse(movementX, movementY);

        } else {
            // pointer is not locked
            console.log("pointer is not locked")
        }
    }, false);
    


    function fullscreenChange() {
        console.log("fullscreenChange")
        if (document.webkitFullscreenElement /*=== gameCanvas */||
            document.mozFullscreenElement/* === gameCanvas*/ ||
            document.mozFullScreenElement/* === gameCanvas*/) { // Older API upper case 'S'.
            // Element is fullscreen, now we can request pointer lock
            gameCanvas.requestPointerLock = gameCanvas.requestPointerLock ||
                                      gameCanvas.mozRequestPointerLock ||
                                      gameCanvas.webkitRequestPointerLock;
            console.log("fullscreenChange>requestPointerLock")
            gameCanvas.requestPointerLock();
        }
        
    }

    document.addEventListener('fullscreenchange', fullscreenChange, false);
    document.addEventListener('mozfullscreenchange', fullscreenChange, false);
    document.addEventListener('webkitfullscreenchange', fullscreenChange, false);




    function pointerLockChange() {
        if (document.mozPointerLockElement === gameCanvas ||
            document.webkitPointerLockElement === gameCanvas) {
            console.log("Pointer Lock was successful.");
        } else {
            console.log("Pointer Lock was lost.");
        }
    }

    document.addEventListener('pointerlockchange', pointerLockChange, false);
    document.addEventListener('mozpointerlockchange', pointerLockChange, false);
    document.addEventListener('webkitpointerlockchange', pointerLockChange, false);

}