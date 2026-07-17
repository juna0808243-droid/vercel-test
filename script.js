let count = 0;

const countEl = document.getElementById("count");
const clockEl = document.getElementById("clock");

function updateCount(newValue) {
  count = newValue;
  countEl.textContent = count;
  countEl.style.transform = "scale(1.2)";
  setTimeout(() => {
    countEl.style.transform = "scale(1)";
  }, 150);
}

document.getElementById("increment").addEventListener("click", () => {
  updateCount(count + 1);
});

document.getElementById("decrement").addEventListener("click", () => {
  updateCount(count - 1);
});

document.getElementById("reset").addEventListener("click", () => {
  updateCount(0);
});

function updateClock() {
  const now = new Date();
  clockEl.textContent = "現在時刻: " + now.toLocaleTimeString("ja-JP");
}

updateClock();
setInterval(updateClock, 1000);