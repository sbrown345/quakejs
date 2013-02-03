// http://updates.html5rocks.com/2012/01/Web-Audio-FAQ
// http://www.html5rocks.com/en/tutorials/webaudio/intro/

if (typeof AudioContext == "function") {
    playSound.context = new AudioContext();
} else if (typeof webkitAudioContext == "function") {
    playSound.context = new webkitAudioContext();     ///thorws error
}

function playSound(arrayBuffer, mediaElement) {
    var source = playSound.context.createBufferSource(); // todo: want to do this when source is set on media element
    source.connect(playSound.context.destination);
    
    var gainNode = playSound.context.createGainNode();
    source.connect(gainNode);
    var buffer = playSound.context.createBuffer(arrayBuffer, false);
    source.buffer = buffer;
    source.noteOn(0);

    mediaElement.bufferSource = buffer;
    mediaElement.audioGain = gainNode.gain;
    mediaElement.setNaturalDuration(buffer.duration);
}
