const currDay = document.querySelector(".day");
const currTime = document.querySelector(".time");

const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
const day = today.getDay();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

const dayString = dayArray[day];
const time = hours + ":" + minutes + ":" + seconds;

currDay.innerText = dayString;
currTime.innerText = time;