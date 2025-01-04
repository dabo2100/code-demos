// Functions

// function calcDiscount() {
//   let price = +prompt("Enter price");
//   let percentage = +prompt("Enter Percentage");
//   let value = (percentage / 100) * price;
//   let final = value + price;
//   console.log("Final After Discount / Add is : " + final);
// }
// function sayHello() {
//   console.log("Hello");
//   //   document.write("Hello Ali");
// }

// sayHello();
// sayHello();
// sayHello();
// let fanStatus = false;
// let fanSpeed = 0;

// function toggleFan() {
//   if (fanStatus == true) {
//     fanStatus = false;
//     fanSpeed = 0;
//     console.log("Fan is Close");
//   } else {
//     fanStatus = true;
//     fanSpeed = 1;
//     console.log("Fan is open and fan speed is : " + fanSpeed);
//   }
// }

// function incementSpeed() {
//   // fanSpeed = fanSpeed + 1;
//   // fanSpeed++;
//   if (fanSpeed < 5 && fanStatus == true) {
//     fanSpeed += 1;
//     console.log("Fan Speed is : " + fanSpeed);
//   }
// }

// function decrmentSpeed() {
//   if (fanSpeed > 1 && fanStatus == true) {
//     fanSpeed--;
//     console.log("Fan Speed is : " + fanSpeed);
//   }
//   //   fanSpeed = fanSpeed - 1;
//   //   fanSpeed -= 1;
// }
let tempScreen = document.querySelector("#tempScreen");
let fanScreen = document.querySelector("#fanScreen");
let lightScreen = document.querySelector(".light");

let acTemp = 16;
let acStatus = false;

function toggleAc() {
  if (acStatus == false) {
    acStatus = true;
    lightScreen.style.backgroundColor = "blue";
  }else{
    acStatus = false;
    lightScreen.style.backgroundColor = "grey";
  }
}

function incrementTemp() {
  acTemp++;
  tempScreen.innerText = acTemp;
}
function decrementTemp() {
  acTemp--;
  tempScreen.innerText = acTemp;
}
