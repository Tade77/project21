const year = document.querySelector(".year");
const timer = document.querySelector("#timer");
const hexaColor = () => {
  const str = "0123456789abcdef";
  let hexa = "#";
  let index;
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length);
    hexa += str[index];
  }
  return hexa;
};
console.log(hexaColor());
year.style.fontSize = "50px";
setInterval(() => {
  year.style.color = hexaColor();
}, 1000);
//for timer
const showDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const dateMonthYear = date + "." + month + "." + year;
  const time = hours + ":" + minutes + ":" + seconds;
  const fullTime = dateMonthYear + " " + time;
  return fullTime;
};
console.log(showDateTime());
setInterval(() => {
  timer.style.fontSize = "30px";
  timer.textContent = showDateTime();
  timer.style.background = hexaColor();
}, 1000);
