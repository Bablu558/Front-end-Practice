const songs = [
  {title:"Song One", artist:"Artist One", src:"songs/", cover:"images/BOL.mp3"},
  {title:"Song Two", artist:"Artist Two", src:"songs/song2.mp3", cover:"images/song2.jpg"},
  {title:"Song Three", artist:"Artist Three", src:"songs/song3.mp3", cover:"images/song3.jpg"},
];

let index = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

function loadSong(i){
  index = i;
  audio.src = songs[i].src;
  cover.src = songs[i].cover;
  title.textContent = songs[i].title;
  artist.textContent = songs[i].artist;
  audio.play();
  playBtn.textContent = "⏸";
}

function playSong(){
  if(audio.paused){
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
}

function nextSong(){
  index = (index+1) % songs.length;
  loadSong(index);
}
function prevSong(){
  index = (index-1+songs.length) % songs.length;
  loadSong(index);
}

playBtn.addEventListener("click", playSong);
audio.addEventListener("timeupdate", ()=>{
  progress.value = (audio.currentTime / audio.duration) * 100;
});
progress.addEventListener("input", ()=>{
  audio.currentTime = (progress.value * audio.duration) / 100;
});

// Load first song
loadSong(0);
