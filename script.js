// ============================================================================
// MUSIC DATABASE
// ============================================================================
const songsDatabase = {
  // ... (your existing database remains the same)
  coolie: [
    {
      title: "Powerhouse",
      artist: "Anirudh Ravichander",
      album: "Coolie",
      src: "songs/coolie/Powerhouse.mp3",
      cover: "assets/images/coolie.png",
    },
  ],
  leo: [
    {
      title: "Naa Ready",
      artist: "Anirudh Ravichander",
      album: "Leo",
      src: "songs/leo/NaaReady.mp3",
      cover: "assets/images/leo.png",
    },
    {
      title: "Badass",
      artist: "Anirudh Ravichander",
      album: "Leo",
      src: "songs/leo/Badass.mp3",
      cover: "assets/images/leo.png",
    },
  ],
  hummarjayenge: [
    {
      title: "Hum Mar Jayenge",
      artist: "Arijit Singh, Tulsi Kumar",
      album: "Hum Mar Jayenge",
      src: "songs/hum mar jayenge/HumMarJayenge.mp3",
      cover: "assets/images/ashiq.png",
    },
  ],
  jawani: [
    {
      title: "Jawani",
      artist: "Vishal Dadlani, Payal Dev",
      album: "Jawani",
      src: "songs/jawani/Jawani.mp3",
      cover: "assets/images/jawani.png",
    },
  ],
  kushagara: [
    {
      title: "Finding Her",
      artist: "Kushagra",
      album: "Kushagara",
      src: "songs/kushagara/FindingHer.mp3",
      cover: "assets/images/findingher.png",
    },
  ],
  "priya darshini": [
    {
      title: "Kilye Kilye",
      artist: "K. S. Chithra",
      album: "Priya Darshini",
      src: "songs/priya darshini/KilyeKilye.mp3",
      cover: "assets/images/kiliye.png",
    },
  ],
  ponniyin_selvan: [
    {
      title: "Aga Naga",
      artist: "A. R. Rahman",
      album: "Ponniyin Selvan",
      src: "songs/ponniyin_selvan/AgaNaga.mp3",
      cover: "assets/images/ps2.png",
    },
  ],
  ranjhan: [
    {
      title: "Raanjhando",
      artist: "Jasleen Royal, B Praak",
      album: "Ranjhan",
      src: "songs/ranjhan/Raanjhando.mp3",
      cover: "assets/images/ranjhan.png",
    },
  ],
  "sanam teri kasam": [
    {
      title: "Bewajah Sanam Teri Kasam",
      artist: "Himesh Reshammiya",
      album: "Sanam Teri Kasam",
      src: "songs/sanam teri kasam/BewajahSanamTeriKasam.mp3",
      cover: "assets/images/sanamterikasam.png",
    },
  ],
  sundari: [
    {
      title: "Sundari",
      artist: "S. P. Balasubrahmanyam",
      album: "Sundari",
      src: "songs/sundari/Sundari.mp3",
      cover: "assets/images/sundari.png",
    },
  ],
  younggoat: [
    {
      title: "Young GOAT",
      artist: "SS Thaman",
      album: "Young Goat",
      src: "songs/younggoat/YoungGOAT.mp3",
      cover: "assets/images/younggoat.png",
    },
  ],
};

// ============================================================================
// ARTIST DATABASE
// ============================================================================
const artistDatabase = {
  anirudh: {
    name: "Anirudh Ravichander",
    image: "assets/images/anirudh.png",
    instagram: "https://www.instagram.com/anirudhofficial",
  },
  ar_rahman: {
    name: "A. R. Rahman",
    image: "assets/images/arrahaman.png",
    instagram: "https://www.instagram.com/arrahman",
  },
  sp_balasubrahmanyam: {
    name: "S. P. Balasubrahmanyam",
    image: "assets/images/balasubhramanyam .png",
    instagram: "https://www.instagram.com/spbalasubrahmanyam",
  },
  chitra: {
    name: "K. S. Chithra",
    image: "assets/images/chitra.png",
    instagram: "https://www.instagram.com/kschithra",
  },
  dsp: {
    name: "Devi Sri Prasad",
    image: "assets/images/dsp.png",
    instagram: "https://www.instagram.com/thisisdsp",
  },
  keeravani: {
    name: "M. M. Keeravani",
    image: "assets/images/keeravani.png",
    instagram: "https://www.instagram.com/mmkeeravaani",
  },
  ss_thaman: {
    name: "SS Thaman",
    image: "assets/images/ssthaman.png",
    instagram: "https://www.instagram.com/musicthaman",
  },
  billie_eilish: {
    name: "Billie Eilish",
    image: "assets/images/billieeilish.png",
    instagram: "https://www.instagram.com/billieeilish",
  },
  justin_bieber: {
    name: "Justin Bieber",
    image: "assets/images/justinbeiber.png",
    instagram: "https://www.instagram.com/justinbieber",
  },
  arijit_singh: {
    name: "Arijit Singh",
    image: "assets/images/ashiq.png", // Placeholder, ideally a specific image
    instagram: "https://www.instagram.com/arijitsingh",
  },
  himesh_reshammiya: {
    name: "Himesh Reshammiya",
    image: "assets/images/sanamterikasam.png", // Placeholder
    instagram: "https://www.instagram.com/realhimesh",
  },
  kushagra: {
    name: "Kushagra",
    image: "assets/images/findingher.png", // Placeholder
    instagram: "https://www.instagram.com/kushagranawale",
  },
};

// ============================================================================
// AUTHENTICATION CHECKING FUNCTIONS
// ============================================================================

/**
 * CHECK IF USER IS LOGGED IN
 * This function checks if user has valid authentication
 */
function checkAuthentication() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userData = localStorage.getItem("userData");

  // Return true only if both conditions are met
  return isLoggedIn === "true" && userData !== null;
}

/**
 * SHOW LOGIN REQUIRED MODAL
 * This function shows a popup asking user to log in
 */
function showLoginRequiredModal() {
  // Create modal HTML
  const modalHTML = `
    <div id="loginModal" class="auth-modal">
      <div class="auth-modal-content">
        <div class="auth-modal-header">
          <img src="assets/images/logo.svg" alt="Spotify" class="modal-logo" />
          <h2>Start listening with a free Spotify account</h2>
          <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        
        <div class="auth-modal-buttons">
          <button class="modal-btn signup-modal-btn" onclick="goToSignup()">
            Sign up free
          </button>
          <button class="modal-btn login-modal-btn" onclick="goToLogin()">
            Log in
          </button>
        </div>
        
        <button class="modal-close" onclick="closeLoginModal()">&times;</button>
      </div>
    </div>
  `;

  // Add modal to page
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Show modal
  document.getElementById("loginModal").style.display = "flex";
}

/**
 * CLOSE LOGIN MODAL
 */
function closeLoginModal() {
  const modal = document.getElementById("loginModal");
  if (modal) {
    modal.remove();
  }
}

/**
 * REDIRECT TO SIGNUP PAGE
 */
function goToSignup() {
  window.location.href = "signup.html";
}

/**
 * REDIRECT TO LOGIN PAGE
 */
function goToLogin() {
  window.location.href = "login.html";
}

/**
 * DISABLE PLAYER CONTROLS
 * This function disables all music controls for non-authenticated users
 */
function disablePlayerControls() {
  const controls = ["playPauseBtn"];

  controls.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add("disabled");
      element.style.opacity = "0.5";
      element.style.cursor = "not-allowed";
    }
  });

  // Update now playing info
  const titleElement = document.getElementById("current-song-title");
  const artistElement = document.getElementById("current-artist");

  if (titleElement) {
    titleElement.textContent = "Log in to play music";
    titleElement.style.color = "#b3b3b3";
  }

  if (artistElement) {
    artistElement.textContent = "Sign up or log in to start listening";
    artistElement.style.color = "#b3b3b3";
  }

  console.log("🔒 Player controls disabled - authentication required");
}

/**
 * ENABLE PLAYER CONTROLS
 * This function enables all music controls for authenticated users
 */
function enablePlayerControls() {
  const controls = ["playPauseBtn"];

  controls.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.remove("disabled");
      element.style.opacity = "1";
      element.style.cursor = "pointer";
    }
  });

  // Reset now playing info
  const titleElement = document.getElementById("current-song-title");
  const artistElement = document.getElementById("current-artist");

  if (titleElement) {
    titleElement.textContent = "No song playing";
    titleElement.style.color = "#1db954";
  }

  if (artistElement) {
    artistElement.textContent = "Select a song to start playing";
    artistElement.style.color = "#b3b3b3";
  }

  console.log("🔓 Player controls enabled - user authenticated");
}

// ============================================================================
// PLAYER STATE VARIABLES
// ============================================================================
const audio = document.getElementById("player");
let currentAlbum = null;
let currentSongIndex = 0;
let isPlaying = false;

// ============================================================================
// PROTECTED MUSIC FUNCTIONS
// All these functions now check authentication first
// ============================================================================

/**
 * PROTECTED PLAY ALBUM FUNCTION
 * This function checks authentication before playing music
 */
function playAlbum(albumName) {
  console.log("🎵 User clicked album:", albumName);

  // AUTHENTICATION CHECK - This is the key security feature
  if (!checkAuthentication()) {
    console.log("🔒 Music playback blocked - user not authenticated");
    showLoginRequiredModal();
    return; // Stop execution if not authenticated
  }

  // If user is authenticated, proceed with normal playback
  const albumSongs = songsDatabase[albumName];
  const playbar = document.querySelector(".playbar");
  playbar.style.display = "flex";

  if (!albumSongs || albumSongs.length === 0) {
    console.log("❌ Album not found in database:", albumName);
    return;
  }

  currentAlbum = albumName;
  currentSongIndex = 0;
  const song = albumSongs[0];

  audio.src = song.src;
  audio
    .play()
    .then(() => {
      isPlaying = true;
      updatePlayButton();
      updateNowPlayingDisplay(song);
      highlightPlayingAlbum(albumName);
      console.log("✅ Now playing:", song.title);
    })
    .catch((error) => {
      console.error("❌ Error playing song:", error);
    });
}

/**
 * PROTECTED TOGGLE PLAY/PAUSE FUNCTION
 */
function togglePlayPause() {
  console.log("🎯 Play/pause button clicked");

  // AUTHENTICATION CHECK
  if (!checkAuthentication()) {
    console.log("🔒 Play/pause blocked - user not authenticated");
    showLoginRequiredModal();
    return;
  }

  if (!audio.src || audio.src === "") {
    console.log("⚠️ No song loaded yet!");
    return;
  }

  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    console.log("⏸️ Music paused");
  } else {
    audio
      .play()
      .then(() => {
        isPlaying = true;
        console.log("▶️ Music resumed");
      })
      .catch((error) => {
        console.error("❌ Error playing:", error);
      });
  }

  updatePlayButton();
}

// ============================================================================
// HELPER FUNCTIONS (No authentication needed for these)
// ============================================================================

function updatePlayButton() {
  const playButton = document.getElementById("playPauseBtn");

  if (isPlaying) {
    playButton.src = "assets/images/pause.svg";
  } else {
    playButton.src = "assets/images/play.svg";
  }
}

function updateNowPlayingDisplay(song) {
  const songTitleElement = document.getElementById("current-song-title");
  const artistElement = document.getElementById("current-artist");
  const imageElement = document.getElementById("current-song-image");

  if (songTitleElement) {
    songTitleElement.textContent = song.title;
    songTitleElement.style.display = "block";
    songTitleElement.style.color = "#1db954";
  }

  if (artistElement) {
    artistElement.textContent = song.artist;
    artistElement.style.display = "block";
    artistElement.style.color = "#b3b3b3";
  }

  if (imageElement) {
    imageElement.src = song.cover;
    imageElement.alt = song.title;
    imageElement.style.display = "block";
  }

  console.log("🔄 Updated display for:", song.title);
}

function highlightPlayingAlbum(albumName) {
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("playing");
  });

  const currentCard = document.querySelector(`[data-album="${albumName}"]`);
  if (currentCard) {
    currentCard.classList.add("playing");
  }
}

// ============================================================================
// AUDIO EVENT LISTENERS
// ============================================================================

audio.addEventListener("play", function () {
  isPlaying = true;
  updatePlayButton();
});

audio.addEventListener("pause", function () {
  isPlaying = false;
  updatePlayButton();
});

// ============================================================================
// INITIALIZATION WITH AUTHENTICATION CHECK
// ============================================================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Music player initializing...");

  // Check authentication status on page load
  if (checkAuthentication()) {
    console.log("✅ User authenticated - full access granted");
    enablePlayerControls();
  } else {
    console.log("🔒 User not authenticated - restricting access");
    disablePlayerControls();
  }

  console.log("📚 Available albums:", Object.keys(songsDatabase));
});
function setVolume() {
  // If on artist page, run artist page logic
  if (document.body.classList.contains("artist-page-body")) {
    loadArtistData();
  } else {
    // Existing logic for other pages
    console.log("🚀 Music player initializing...");
    if (checkAuthentication()) {
      console.log("✅ User authenticated - full access granted");
      enablePlayerControls();
    } else {
      console.log("🔒 User not authenticated - restricting access");
      disablePlayerControls();
    }
  }
}

/**
 * LOAD ARTIST DATA
 * This function runs on the artist.html page to populate content.
 */
function loadArtistData() {
  const params = new URLSearchParams(window.location.search);
  const artistKey = params.get("name");
  const artist = artistDatabase[artistKey];

  if (!artist) {
    document.getElementById("artistName").textContent = "Artist Not Found";
    document.getElementById("songList").innerHTML =
      '<li class="song-item-loading">Could not find artist details.</li>';
    return;
  }

  // Populate header
  document.getElementById("artistName").textContent = artist.name;
  document.getElementById("artistImage").src = artist.image;
  document.getElementById("instagramLink").href = artist.instagram;
  // Set dynamic background
  document.documentElement.style.setProperty(
    "--artist-bg-image",
    `url(${artist.image})`
  );

  // Find all songs by this artist from the main songsDatabase
  const artistSongs = [];
  for (const album in songsDatabase) {
    songsDatabase[album].forEach((song) => {
      // More robust check against the full artist name
      if (song.artist.toLowerCase().includes(artist.name.toLowerCase())) {
        artistSongs.push(song);
      }
    });
  }

  // Populate song list
  const songList = document.getElementById("songList");
  if (artistSongs.length > 0) {
    songList.innerHTML = artistSongs
      .map(
        (song, index) => `
      <li class="song-item" onclick="playAlbum('${song.album // Note: This will play the whole album
        .toLowerCase()
        .replace(/ /g, "")}')">
        <span class="song-number">${index + 1}</span>
        <img src="assets/images/play-green.svg" class="play-icon" alt="Play"/>
        <img src="${song.cover}" alt="${song.title}" class="song-item-cover">
        <div class="song-item-info">
          <h4>${song.title}</h4>
          <p>${song.artist}</p>
        </div>
        <span class="song-item-album">${song.album}</span>
      </li>`
      )
      .join("");
  } else {
    songList.innerHTML =
      '<li class="song-item-loading">No songs found for this artist.</li>';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Check if we are on the artist page
  if (document.querySelector(".artist-page")) {
    loadArtistData();
  }
  // The existing initialization logic for other pages can remain here
  else {
    console.log("🚀 Music player initializing...");
    if (checkAuthentication()) {
      console.log("✅ User authenticated - full access granted");
      enablePlayerControls();
    } else {
      console.log("🔒 User not authenticated - restricting access");
      disablePlayerControls();
    }
  }
});

function setVolume() {
  if (!checkAuthentication()) {
    showLoginRequiredModal();
    return;
  }
  const volumeSLider = document.getElementById("volumeSlider");
  const volumeValue = volumeSLider.value;
  audio.volume = volumeValue / 100;
}
function seekTo() {
  console.log("⏩ Seeking to position");

  // AUTHENTICATION CHECK
  if (!checkAuthentication()) {
    console.log("🔒 Seek blocked - user not authenticated");
    showLoginRequiredModal();
    return;
  }

  // Make sure a song is loaded and has duration
  if (!audio.src || audio.duration === 0 || isNaN(audio.duration)) {
    console.log("⚠️ No song loaded or duration not available!");
    return;
  }

  // Get the progress bar element
  const progressBar = document.getElementById("progressBar");

  // Calculate the time to seek to (progress bar value is 0-100)
  const seekTime = (progressBar.value / 100) * audio.duration;

  // Set the audio current time
  audio.currentTime = seekTime;

  console.log("⏩ Seeked to:", formatTime(seekTime));
}
function previousSong() {
  console.log("⏮️ Previous button clicked");

  // AUTHENTICATION CHECK
  if (!checkAuthentication()) {
    console.log("🔒 Previous song blocked - user not authenticated");
    showLoginRequiredModal();
    return;
  }

  // Make sure we have an album currently playing
  if (!currentAlbum) {
    console.log("⚠️ No album currently playing!");
    return;
  }

  const albumSongs = songsDatabase[currentAlbum];

  // If song has been playing for more than 3 seconds, restart current song
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    console.log("🔄 Restarting current song");
    return;
  }

  // Otherwise, go to previous song
  if (currentSongIndex > 0) {
    currentSongIndex--; // Go to previous song
  } else {
    // Loop to last song in album
    currentSongIndex = albumSongs.length - 1;
  }

  const song = albumSongs[currentSongIndex];
  audio.src = song.src;

  // Play the song if music was playing, otherwise just load it
  if (isPlaying) {
    audio
      .play()
      .then(() => {
        updateNowPlayingDisplay(song);
        console.log("⏮️ Playing previous:", song.title);
      })
      .catch((error) => {
        console.error("❌ Error playing previous song:", error);
      });
  } else {
    updateNowPlayingDisplay(song);
    console.log("⏮️ Loaded previous:", song.title);
  }
}
function updateProgress() {
  // Make sure we have a valid audio source and duration
  if (!audio.src || audio.duration === 0 || isNaN(audio.duration)) {
    return;
  }

  // Get the elements
  const progressBar = document.getElementById("progressBar");
  const currentTimeElement = document.getElementById("currentTime");
  const durationElement = document.getElementById("duration");

  // Calculate progress percentage
  const progress = (audio.currentTime / audio.duration) * 100;

  // Update progress bar value
  progressBar.value = progress;

  // Update time displays using formatTime helper function
  currentTimeElement.textContent = formatTime(audio.currentTime);
  durationElement.textContent = formatTime(audio.duration);

  // Update CSS custom property for styling
  progressBar.style.setProperty("--progress", progress + "%");
}
function formatTime(seconds) {
  // Handle invalid values
  if (isNaN(seconds) || seconds < 0) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  // Format with leading zero for seconds
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
// Update progress when audio metadata loads
audio.addEventListener("loadedmetadata", function () {
  console.log(
    "📊 Audio metadata loaded - duration:",
    formatTime(audio.duration)
  );
  updateProgress();
});

// Update progress continuously during playback
audio.addEventListener("timeupdate", function () {
  updateProgress();
});

function nextSong() {
  console.log("⏭️ Next button clicked");

  // AUTHENTICATION CHECK
  if (!checkAuthentication()) {
    console.log("🔒 Next song blocked - user not authenticated");
    showLoginRequiredModal();
    return;
  }

  // Make sure we have an album currently playing
  if (!currentAlbum) {
    console.log("⚠️ No album currently playing!");
    return;
  }

  const albumSongs = songsDatabase[currentAlbum];

  // If we're at the last song of current album
  if (currentSongIndex === albumSongs.length - 1) {
    // Get all available albums
    const allAlbums = Object.keys(songsDatabase);
    const currentAlbumIndex = allAlbums.indexOf(currentAlbum);

    // Go to next album (or first album if we're at last)
    let nextAlbumIndex;
    if (currentAlbumIndex === allAlbums.length - 1) {
      nextAlbumIndex = 0; // Loop back to first album
    } else {
      nextAlbumIndex = currentAlbumIndex + 1;
    }

    const nextAlbum = allAlbums[nextAlbumIndex];

    // Switch to the first song of the next album
    currentAlbum = nextAlbum;
    currentSongIndex = 0;

    console.log("🔄 Switched to next album:", nextAlbum);
  } else {
    // Just go to next song in current album
    currentSongIndex++;
  }

  const song = songsDatabase[currentAlbum][currentSongIndex];
  audio.src = song.src;

  // Play the song if music was playing, otherwise just load it
  if (isPlaying) {
    audio
      .play()
      .then(() => {
        updateNowPlayingDisplay(song);
        highlightPlayingAlbum(currentAlbum);
        console.log(
          "⏭️ Playing next:",
          song.title,
          "from album:",
          currentAlbum
        );
      })
      .catch((error) => {
        console.error("❌ Error playing next song:", error);
      });
  } else {
    updateNowPlayingDisplay(song);
    highlightPlayingAlbum(currentAlbum);
    console.log("⏭️ Loaded next:", song.title, "from album:", currentAlbum);
  }
}
// Voice-to-Text Functionality
(() => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const searchInput = document.getElementById("searchbar");
  const voiceBtn = document.getElementById("voiceBtn");

  // Global variable to store the final transcript
  window.keylyrics = "";

  let recognition = null;
  let isListening = false;
  let finalTranscript = "";

  function createRecognition() {
    if (!SpeechRecognition) return null;

    const rec = new SpeechRecognition();
    rec.lang = "en-US";
    rec.interimResults = true;
    rec.continuous = false;
    rec.maxAlternatives = 1;

    return rec;
  }

  function updateButtonState(listening) {
    isListening = listening;
    voiceBtn.classList.toggle("listening", listening);
    voiceBtn.setAttribute("aria-pressed", String(listening));

    if (listening) {
      voiceBtn.title = "Stop listening";
    } else {
      voiceBtn.title = "Search with lyrics";
    }
  }

  function startRecognition() {
    if (!recognition) recognition = createRecognition();
    if (!recognition) return;

    finalTranscript = "";
    searchInput.value = "";

    try {
      recognition.start();
      updateButtonState(true);
    } catch (error) {
      console.warn("Recognition start error:", error);
    }
  }

  function stopRecognition() {
    if (recognition && isListening) {
      try {
        recognition.stop();
      } catch (error) {
        console.warn("Recognition stop error:", error);
      }
    }
  }

  function initVoiceRecognition() {
    // Check if browser supports speech recognition
    if (!SpeechRecognition) {
      voiceBtn.disabled = true;
      voiceBtn.title = "Voice search not supported in this browser";
      return;
    }

    recognition = createRecognition();

    // Handle recognition results
    recognition.addEventListener("result", (event) => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcript = result[0].transcript;

        if (result.isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      // Display interim results in search input
      const displayText = (finalTranscript + interimTranscript).trim();
      if (displayText) {
        searchInput.value = displayText;
      }
    });

    // Handle recognition end
    recognition.addEventListener("end", () => {
      updateButtonState(false);

      // Store final result in global variable
      const finalText = (finalTranscript || searchInput.value || "").trim();
      window.keylyrics = finalText;

      console.log("Voice recognition completed. Text:", finalText);

      // Optionally trigger search automatically
      if (finalText) {
        // You can add search logic here
        console.log("Ready to search for:", finalText);
      }
    });

    // Handle recognition start
    recognition.addEventListener("start", () => {
      console.log("Voice recognition started");
      updateButtonState(true);
    });

    // Handle recognition errors
    recognition.addEventListener("error", (event) => {
      console.error("Voice recognition error:", event.error);
      updateButtonState(false);

      let errorMessage = "Voice recognition error";
      switch (event.error) {
        case "no-speech":
          errorMessage = "No speech detected. Try again.";
          break;
        case "audio-capture":
          errorMessage = "Microphone not accessible";
          break;
        case "not-allowed":
          errorMessage = "Microphone permission denied";
          break;
        case "network":
          errorMessage = "Network error occurred";
          break;
      }

      // Show error briefly in search input
      const originalPlaceholder = searchInput.placeholder;
      searchInput.placeholder = errorMessage;
      setTimeout(() => {
        searchInput.placeholder = originalPlaceholder;
      }, 3000);
    });

    // Voice button click handler
    voiceBtn.addEventListener("click", () => {
      if (isListening) {
        stopRecognition();
      } else {
        startRecognition();
      }
    });

    console.log("Voice recognition initialized successfully");
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVoiceRecognition);
  } else {
    initVoiceRecognition();
  }
})();

function toggleProfile() {
  const profileMenu = document.getElementById("profileMenu");
  if (profileMenu.classList.contains("active")) {
    profileMenu.classList.remove("active");
  } else {
    profileMenu.classList.add("active");
  }
}

// Close menus when clicking outside
document.addEventListener("click", function (event) {
  const popupMenu = document.getElementById("popupMenu");
  const menuToggle = document.getElementById("menuToggle");
  const menubar = document.querySelector(".menubar");
  const profileMenu = document.getElementById("profileMenu");
  const profileSection = document.querySelector(".profile-section");

  // Close mobile menu if clicking outside
  if (!menubar.contains(event.target) && !popupMenu.contains(event.target)) {
    if (popupMenu.classList.contains("active")) {
      popupMenu.classList.remove("active");
      menuToggle.innerHTML = "&#9776;";
    }
  }

  // Close profile menu if clicking outside
  if (profileSection && !profileSection.contains(event.target)) {
    if (profileMenu && profileMenu.classList.contains("active")) {
      profileMenu.classList.remove("active");
    }
  }
});
class lyricsfetcher {
  constructor() {
    this.songsMap = {
      "sanam teri kasam": "sanamterikasam.txt",
      coolie: "coolie.txt",
      kushagara: "findingher.txt",
      "finding her": "findingher.txt",
      jawani: "jawani.txt",
      "priya darshini": "kiliyekiliye.txt",
      "kiliye kiliye": "kiliyekiliye.txt",
      ranjhan: "ranjhan.txt",
      hummarjayenge: "ashiq2.txt",
      "hum mar jayenge": "ashiq2.txt",
      sundari: "sundari.txt",
      younggoat: "younggoat.txt",
      "young goat": "younggoat.txt",
    };
    this.lyricsCache = new map();
    this.isLoading = false;
  }
}
