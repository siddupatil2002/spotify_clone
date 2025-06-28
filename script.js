// Song data (expand with more songs if you like!)
const songs = [
  {
    title: "Sample Song",
    artist: "Artist Name",
    cover: "https://i.scdn.co/image/ab67616d0000b2734c4e1b2a7b6b1f9abb2b8889",
    file: "song.mp3"
  },
  {
    title: "Another Song",
    artist: "Another Artist",
    cover: "https://i.scdn.co/image/ab67616d0000b273b4a5f8b1ac4c1f7b8c1c8b76",
    file: "sample2.mp3"
  }
];

let currentSongIndex = 0;
const audio = document.getElementById('audio');
const playerCover = document.getElementById('player-cover');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtns = document.querySelectorAll('.play-btn');

function loadSong(index) {
  const song = songs[index];
  audio.src = song.file;
  playerCover.src = song.cover;
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
}

function playSong() {
  audio.play();
  playBtn.textContent = "Pause";
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "Play";
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

prevBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

nextBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

playBtns.forEach((btn, i) => {
  btn.addEventListener('click', e => {
    currentSongIndex = i;
    loadSong(currentSongIndex);
    playSong();
  });
});

// Initialize player
loadSong(currentSongIndex);