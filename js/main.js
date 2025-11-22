// ========= AUDIO TOGGLE WITH MEMORY =========
const audio = document.getElementById("realmAudio");
const toggleBtn = document.getElementById("audioToggle");
const icon = document.querySelector(".audio-icon");
const label = document.querySelector(".audio-text");

// Get saved setting
let audioState = localStorage.getItem("realmAudioState") || "off";

function applyAudioState() {
  if (audioState === "on") {
    audio.play().catch(err => console.log("Autoplay blocked:", err));
    icon.textContent = "🔊";
    label.textContent = "Realm Audio: On";
  } else {
    audio.pause();
    icon.textContent = "🔈";
    label.textContent = "Realm Audio: Off";
  }
}

applyAudioState();

toggleBtn.addEventListener("click", () => {
  audioState = audioState === "on" ? "off" : "on";
  localStorage.setItem("realmAudioState", audioState);
  applyAudioState();
});
