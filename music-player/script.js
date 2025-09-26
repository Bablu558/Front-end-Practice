const songs = [
  {
    title: "Song One",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://picsum.photos/350/200?random=10"
  },
  {
    title: "Song Two",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://picsum.photos/350/200?random=11"
  },
  {
    title: "Song Three",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://picsum.photos/350/200?random=12"
  }
];

let index = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");

// Load first song
function loadSong(i) {
  index = i;
  audio.src = songs[i].src;
  title.textContent = songs[i].title;
  cover.src = songs[i].cover;
  audio.play();
  playBtn.textContent = "⏸";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  loadSong(index);
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value * audio.duration) / 100;
});

// Auto load first song
loadSong(0);
