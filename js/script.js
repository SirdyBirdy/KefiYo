/* ============================================
   KefiYo — site interactions
   ============================================ */

/* --- Menu filter chips (Froyo / Açaí / Matcha / Smoothies / Toppings) --- */
document.querySelectorAll('.chip').forEach(function (chip) {
  chip.onclick = function () {
    document.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('on'); });
    chip.classList.add('on');
    // NOTE: this currently only handles the visual "selected" state.
    // If/when the menu needs real filtering, give each .row a
    // data-category="froyo" (etc) attribute and show/hide rows here
    // based on the selected chip's category.
  };
});

/* --- Gift card value selector --- */
document.querySelectorAll('.val').forEach(function (val) {
  val.onclick = function () {
    document.querySelectorAll('.val').forEach(function (v) { v.classList.remove('on'); });
    val.classList.add('on');
    var amount = val.textContent.trim();
    document.querySelector('.cardart .amt').textContent = amount === 'Custom' ? '£ ??' : amount;
    document.querySelector('.giftbtn').textContent = 'Checkout — ' + amount;
  };
});

/* ============================================
   Vinyl music player
   ============================================
   Add your own tracks to assets/audio/ and list them below.
   Each entry needs: title, artist, and the file name (src).
   Cover art is optional — if you skip "cover", the pink label
   just shows the track number instead.
*/
var PLAYLIST = [
  { title: 'Track One', artist: 'KefiYo Radio', src: 'assets/audio/track-1.mp3', cover: '' },
  { title: 'Track Two', artist: 'KefiYo Radio', src: 'assets/audio/track-2.mp3', cover: '' },
  { title: 'Track Three', artist: 'KefiYo Radio', src: 'assets/audio/track-3.mp3', cover: '' }
];

(function initVinylPlayer() {
  var player = document.getElementById('vinylPlayer');
  if (!player) return;

  var audio = document.getElementById('vinylAudio');
  var discBtn = document.getElementById('vinylDisc');
  var playBtn = document.getElementById('vinylPlayBtn');
  var nextBtn = document.getElementById('vinylNextBtn');
  var prevBtn = document.getElementById('vinylPrevBtn');
  var titleEl = document.getElementById('vinylTitle');
  var artistEl = document.getElementById('vinylArtist');
  var labelEl = document.getElementById('vinylLabel');

  var index = 0;
  var isPlaying = false;

  function loadTrack(i) {
    index = (i + PLAYLIST.length) % PLAYLIST.length;
    var track = PLAYLIST[index];
    audio.src = track.src;
    titleEl.textContent = track.title;
    artistEl.textContent = track.artist;
    labelEl.innerHTML = track.cover
      ? '<img src="' + track.cover + '" alt="">'
      : '<span class="fallback">' + (index + 1) + '</span>';
  }

  function play() {
    audio.play().then(function () {
      isPlaying = true;
      player.classList.add('playing', 'open');
      updatePlayIcon();
    }).catch(function () {
      // Autoplay was blocked, or the file failed to load.
      // Most browsers require a user click before audio can play — that's fine,
      // this only happens if play() is triggered without one.
    });
  }

  function pause() {
    audio.pause();
    isPlaying = false;
    player.classList.remove('playing');
    updatePlayIcon();
  }

  function updatePlayIcon() {
    playBtn.innerHTML = isPlaying
      ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
  }

  function togglePlay() {
    if (isPlaying) { pause(); } else { play(); }
  }

  discBtn.addEventListener('click', function () {
    if (!player.classList.contains('open')) {
      player.classList.add('open');
    }
    togglePlay();
  });

  playBtn.addEventListener('click', togglePlay);

  nextBtn.addEventListener('click', function () {
    loadTrack(index + 1);
    if (isPlaying) play();
  });

  prevBtn.addEventListener('click', function () {
    loadTrack(index - 1);
    if (isPlaying) play();
  });

  audio.addEventListener('ended', function () {
    loadTrack(index + 1);
    play();
  });

  loadTrack(0);
})();
