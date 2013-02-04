function initControls() {
    $(window).keydown(onKeyDown);
}

function onKeyDown(e) {
    e.preventDefault();
    
    var quakeCode = e.keyCode;
    if (keyMap[quakeCode]) {
        // some keys are the same codes, these aren't
        quakeCode = keyMap[quakeCode];
    } 
    else if (quakeCode >= 64 && quakeCode <= 64 + 26) {
        quakeCode = quakeCode + 32;
    }

    global.keyPress(quakeCode);
}

var keyMap = {
    8: 127,         //K_BACKSPACE	= 127;
    38: 128,        //K_UPARROW		= 128;
    40: 129,        //K_DOWNARROW	= 129;
    37: 130,        //K_LEFTARROW	= 130;
    39: 131,        //K_RIGHTARROW	= 131;

    18: 132,        //K_ALT			= 132;
    17: 133,        //K_CTRL		= 133;
    16: 137,        //K_SHIFT		= 134;
    112: 135,       //K_F1			= 135;
    113: 136,       //K_F2			= 136;
    114: 137,       //K_F3			= 137;
    115: 138,       //K_F4			= 138;
    116: 139,       //K_F5			= 139;
    117: 140,       //K_F6			= 140;
    118: 141,       //K_F7			= 141;
    119: 142,       //K_F8			= 142;
    120: 143,       //K_F9			= 143;
    121: 144,       //K_F10			= 144;
    122: 145,       //K_F11			= 145;
    123: 146,       //K_F12		    = 146;
    45: 147,        //K_INS			= 147;
    46: 148,        //K_DEL			= 148;
    34: 149,        //K_PGDN		= 149;
    33: 149,        //K_PGUP		= 150;
    36: 151,        //K_HOME		= 151;
    35: 152,        //K_END			= 152;

    19: 255         //K_PAUSE		= 255;
    
    //todo
    //mouse wheel up:239, down:240
    
    //public const int	K_MOUSE1	= 200;
    //public const int	K_MOUSE2	= 201;
    //public const int	K_MOUSE3	= 202;
};