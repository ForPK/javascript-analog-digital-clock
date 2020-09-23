"use strict";

(function () {
  const needleHour = document.querySelector(".needle.hour");
  const needleMin = document.querySelector(".needle.minute");
  const needleSec = document.querySelector(".needle.second");

  const amPM = document.querySelector("#digital .state");
  const numHour = document.querySelector(".num.hour");
  const numMin = document.querySelector(".num.minute");
  const numSec = document.querySelector(".num.second");

  function clock() {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    function analog() {
      needleHour.style.transform = `rotate(${(360 / 12) * hour}deg)`;
      needleMin.style.transform = `rotate(${(360 / 60) * min}deg)`;
      needleSec.style.transform = `rotate(${(360 / 60) * sec}deg)`;
    }

    function digital() {
      // AM, PM
      if (hour >= 12) {
        amPM.textContent = "PM";
      } else if (hour < 12 || hour === 0 || hour === 24) {
        amPM.textContent = "AM";
      }

      // hour
      if (hour < 10) {
        numHour.textContent = `0${hour}`;
      } else if (hour >= 13 || hour < 22) {
        numHour.textContent = `0${hour - 12}`;
      } else if (hour >= 22) {
        numHour.textContent = hour - 12;
      } else {
        numHour.textContent = hour;
      }

      // minute
      if (min < 10) {
        numMin.textContent = `0${min}`;
      } else {
        numMin.textContent = min;
      }

      // second
      if (sec < 10) {
        numSec.textContent = `0${sec}`;
      } else {
        numSec.textContent = sec;
      }
    }

    analog();
    digital();
  }

  window.setInterval(clock, 1000);
})();
