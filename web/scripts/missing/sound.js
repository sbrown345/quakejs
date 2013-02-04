// http://updates.html5rocks.com/2012/01/Web-Audio-FAQ
// http://www.html5rocks.com/en/tutorials/webaudio/intro/
// https://developers.google.com/chrome/whitepapers/pagevisibility    stop sound on putting page on background (or set volume to 0)
// http://www.html5rocks.com/en/tutorials/webaudio/positional_audio/

if (typeof AudioContext == "function") {
    playSound.context = new AudioContext();
} else if (typeof webkitAudioContext == "function") {
    playSound.context = new webkitAudioContext();     ///thorws error
}

function playSound(arrayBuffer, mediaElement) {
    if (!playSound.context) {
        // dodgy temp workaround so non webkit doesn't complain
        mediaElement.setNaturalDuration(999);
        return;
    }
    

    var source = playSound.context.createBufferSource(); // todo: want to do this when source is set on media element
    source.connect(playSound.context.destination);
    
    var gainNode = playSound.context.createGainNode();
    source.connect(gainNode);
    var buffer = playSound.context.createBuffer(arrayBuffer, false);
    source.buffer = buffer;
    source.noteOn(0);

    mediaElement.source = source;
    mediaElement.bufferSource = buffer;
    mediaElement.audioGain = gainNode.gain;
    mediaElement.setNaturalDuration(buffer.duration);
}

function stopSound(mediaElement) {
    if (!mediaElement.source) return;
    
    mediaElement.source.noteOff(0);
}