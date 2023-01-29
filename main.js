const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const sec = now.getSeconds();
  const secDegree = (sec / 60) * 360 + 180;

  const mins = now.getMinutes();
  const minDegree = (mins / 60) * 360 + 180;

  const hours = now.getHours();
  const hourDegree = (hours / 12) * 360 + 180;

  secHand.style.transform = `rotate(${secDegree}deg)`;
  minHand.style.transform = `rotate(${minDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
