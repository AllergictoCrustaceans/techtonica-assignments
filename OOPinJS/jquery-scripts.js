//FOR BACKGROUND VIDEO PAUSE
var free = document.getElementById('free');
var videoButton = document.getElementById('videoButton');

function pause() {
    if(video.paused) {
        video.play();
        videoButton.innerHTML = "Pause";
    } else {
        video.pause();
        pause.innerHTML = "Play";
    }
}