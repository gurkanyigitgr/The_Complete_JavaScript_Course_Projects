const currentTime = document.querySelector("h1");
const content = document.querySelector(".content");
const selectMenu = document.querySelectorAll("select");
const setAlarmBtn = document.querySelector("button");

let alarmTime,
  isAlarmSet,
  ringtone = new Audio("./assets/alarm_ring.mp3");

for (i = 12; i > 0; i--) {
  i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option> `;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (i = 59; i > 0; i--) {
  i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (i = 2; i > 0; i--) {
  let amPm = i == 1 ? "AM" : "PM";
  let option = `<option value="${amPm}">${amPm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
