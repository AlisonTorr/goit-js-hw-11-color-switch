const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const bodyRef = document.querySelector("body");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorAdding = () => {
  const colorIdx = randomIntegerFromInterval(0, colors.length);
  bodyRef.style.backgroundColor = colors[colorIdx];
};

let intervalid;

const onStart = () => {
  startBtn.disabled = true;
  intervalid = setInterval(colorAdding, 1000);

  return intervalid;
};

const onStop = () => {
  startBtn.disabled = false;
  clearInterval(intervalid);
  bodyRef.style.backgroundColor = colors[0];
};

startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop);
