// Selectors
let lcdTemp = document.querySelector("#Temp");
let lcdSpeed = document.querySelector("#Speed");
let powerBtn = document.querySelector("#powerBtn");
let lcd = document.querySelector("#LCD");
// States
let acStatus = false;
let temp = 16;
let fanSpeed = 1;

let toggleAc = () => {
  acStatus = !acStatus;
  acStatus
    ? (powerBtn.classList.replace("btn-success", "btn-danger"),
      (lcd.style.opacity = 0))
    : ((lcd.style.opacity = 1),
      powerBtn.classList.replace("btn-danger", "btn-success"));

};
let increment = () => {
  if (temp < 30 && acStatus == true) {
    temp++;
    lcdTemp.innerText = temp;
  }
};
let decrement = () => {
  if (temp > 16 && acStatus == true) {
    temp--;
    lcdTemp.innerText = temp;
  }
};
let fanChange = () => {
  if (fanSpeed < 3 && acStatus == true) {
    fanSpeed++;
  } else {
    fanSpeed = 1;
  }
  lcdSpeed.innerText = fanSpeed;
};
