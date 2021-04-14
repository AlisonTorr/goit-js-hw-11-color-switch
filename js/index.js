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

startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorAdding = () => {
  const colorIdx = randomIntegerFromInterval(0, colors.length);
  console.log(colorIdx);
  bodyRef.style.backgroundColor = colors[colorIdx];
};

const intervalid = setInterval(colorAdding, 1000);
let isOnStart = false;

const onStart = () => {
  colorAdding();
  isOnStart = isOnStart ? false : true;
};

const onStop = () => {
  bodyRef.style.backgroundColor = null;
  clearInterval(intervalid);
};
