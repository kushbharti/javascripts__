let hours = document.getElementById("hrs");
let minutes = document.getElementById("mins");
let years = document.getElementById("year");
let seconds = document.getElementById("sec");
let date = document.getElementById("date");
let months = document.getElementById("month");
let day = document.getElementById("day");
let am_pm = document.getElementById("am-pm");

let month_list = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let days_list = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
 
setInterval(() => {
  let time = new Date();
  hours.innerHTML = time.getHours();
  minutes.innerHTML = (time.getMinutes() <= 9 ? "0" : "") + time.getMinutes();
  seconds.innerText = (time.getSeconds() <= 9 ? "0" : "") + time.getSeconds();
  years.innerHTML = time.getFullYear();
  months.innerHTML = month_list[time.getMonth()];
  day.innerHTML = days_list[time.getDay()];
  date.innerHTML = (time.getDate() <= 9 ? "0" : "") + time.getDate();
  am_pm.innerHTML = time.getHours() >= 12 ? "PM" : "AM";
}, 1000);
