/* Elements */
const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399','River-655','Waterfall-941','Wave-2737'];
const video = document.getElementById('vidPlayer');
const plyBtn = document.getElementById('play');
const stpBtn = document.getElementById('stop');
const aside = document.querySelector('aside');
const sound = document.getElementById('volume');
const stop = document.getElementById('stop');


/* Functions */
function createImages() {
    files.forEach(file => {
        const img = document.createElement('img');
        img.src = `./images/${file}.jpg`;
        img.alt = file;
        aside.appendChild(img);
        img.addEventListener('click', imageUpdate);
    });
}

function imageUpdate() {
    const imgSrc = this.src;
    const vidSrcI = imgSrc.replace('jpg', 'mp4');
    const dir = "./videos/" + vidSrcI.split('/').pop();
    video.src = dir;
    video.load();
    
}

function stopVideo() {
    video.pause();
    plyBtn.textContent = video.paused ? symbolPlay : symbolPause;
}

function togglePlay() {
    const PlayPause = video.paused ? 'play' : 'pause';
    video[PlayPause]();
        // alternative
/*   if(video.paused) {
    video.play();
  } else {
    video.pause();
  } */
    plyBtn.textContent = video.paused ? symbolPlay : symbolPause;
        // alternative
/*   if(video.paused) {
    plyBtn.textContent = symbolPlay;
    } else {
    plyBtn.textContent = symbolPause;
    } */
}

function skipForward() {
    video.currentTime += 5;
}
function skipBackward() {
    video.currentTime -= 5;
}

function rangeUpdate() {
    console.log(this.value);
}

function soundRangeUpdate() {
    video.volume = this.value;
}

/* Event Listeners */
video.addEventListener('click', togglePlay);
plyBtn.addEventListener('click', togglePlay);
s5.addEventListener('click', skipForward);
sm5.addEventListener('click', skipBackward);
sound.addEventListener('change', soundRangeUpdate);
sound.addEventListener('mousemove', soundRangeUpdate);
stpBtn.addEventListener('click', stopVideo);


/* Calling Functions */
createImages();


