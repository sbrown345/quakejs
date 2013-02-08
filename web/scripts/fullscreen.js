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
}