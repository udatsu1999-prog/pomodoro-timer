const RING_CIRCUMFERENCE = 2 * Math.PI * 90;

const tabs = document.querySelectorAll(".tab");
const timeDisplay = document.getElementById("timeDisplay");
const ringProgress = document.querySelector(".ring-progress");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const sessionCountEl = document.getElementById("sessionCount");
const dingSound = document.getElementById("dingSound");

let totalSeconds = 25 * 60;
let remainingSeconds = totalSeconds;
let timerId = null;
let sessionCount = 0;
let currentMode = "work";

ringProgress.style.strokeDasharray = RING_CIRCUMFERENCE;

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(remainingSeconds);
  const ratio = remainingSeconds / totalSeconds;
  ringProgress.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - ratio);
  document.title = `${formatTime(remainingSeconds)} - ポモドーロタイマー`;
}

function setMode(minutes, mode) {
  currentMode = mode;
  totalSeconds = minutes * 60;
  remainingSeconds = totalSeconds;
  ringProgress.style.stroke = mode === "work" ? "#e74c3c" : "#3498db";
  updateDisplay();
  stopTimer();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    setMode(Number(tab.dataset.minutes), tab.dataset.mode);
  });
});

function tick() {
  remainingSeconds--;
  updateDisplay();
  if (remainingSeconds <= 0) {
    finishSession();
  }
}

function finishSession() {
  stopTimer();
  dingSound.play().catch(() => {});
  if (currentMode === "work") {
    sessionCount++;
    sessionCountEl.textContent = sessionCount;
  }
  remainingSeconds = 0;
  updateDisplay();
}

function startTimer() {
  if (timerId !== null) return;
  if (remainingSeconds <= 0) remainingSeconds = totalSeconds;
  timerId = setInterval(tick, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function resetTimer() {
  stopTimer();
  remainingSeconds = totalSeconds;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
