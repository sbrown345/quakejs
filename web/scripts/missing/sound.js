// http://updates.html5rocks.com/2012/01/Web-Audio-FAQ
// http://www.html5rocks.com/en/tutorials/webaudio/intro/
// https://developers.google.com/chrome/whitepapers/pagevisibility    stop sound on putting page on background (or set volume to 0)
// http://www.html5rocks.com/en/tutorials/webaudio/positional_audio/

if (typeof AudioContext == "function") {
    playSound.context = new AudioContext();
} else if (typeof webkitAudioContext == "function") {
    playSound.context = new webkitAudioContext();     ///thorws error
}

function playSound(arrayBuffer, mediaEl) {
    if (!playSound.context) {
        // dodgy workaround so non-webkit doesn't complain
        mediaEl.setNaturalDuration(999);
        return;
    }

    if (!mediaEl.source) {
        mediaEl.source = playSound.context.createBufferSource();
    }
    
    var gainNode = playSound.context.createGainNode();

    var buffer = playSound.context.createBuffer(arrayBuffer, false);
    mediaEl.source.buffer = buffer;
    
    mediaEl.source.connect(gainNode);
    gainNode.connect(playSound.context.destination);
    //gainNode.gain.value = .05 //WORKING HERE.........................   todo: comiebine this somehoew
    mediaEl.source.noteOn(0);

    mediaEl.bufferSource = buffer;
    mediaEl.audioGain = gainNode.gain;        // THIS MEANS IT IS HOOKED UP TO souind.setVolume (called by s_startsound) and overrides the sound as 1
    mediaEl.setNaturalDuration(buffer.duration);
    
}

function stopSound(mediaElement) {
    if (!mediaElement.source) return;
    
    mediaElement.source.noteOff(0);
}