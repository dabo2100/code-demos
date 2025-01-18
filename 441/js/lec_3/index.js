// console.log(Math.floor(10.99999998));
// console.log(Math.round(10.25));
// console.log(Math.round(10.75));
// console.log(Math.trunc(10.75));
// console.log(Math.PI);
// console.log(Math.max(12,50,70,30));
// console.log(Math.min(12,50,70,30));

let userName = "a@icloud.com";
let res = userName.includes("gmail") || userName.includes("icloud");
let userChat = "you are donkey donkey";
let final = userChat.substring(0,10);
console.log(final+"....");

// let final = userChat.replaceAll("donkey","*****");

// console.log(final);

// let fanStatus = false;
// let fanSpeed = 0;

// function pullRope() {
//   if (fanStatus == false) {
//     fanStatus = true;
//     fanSpeed = 1;
//     console.log("Fan  is : open");
//     console.log("Fan  speed is 1");
//   } else if (fanSpeed > 0 && fanSpeed < 3) {
//     fanSpeed++;
//     console.log("Fan speed is :" + fanSpeed);
//   } else {
//     fanSpeed = 0;
//     fanStatus = false;
//     console.log("Fan  is : closed");
//   }
// }

// function makeDiscount() {
//   let price = +prompt("Enter price");
//   let percentage = +prompt("Enter discount Percentage ") / 100;
//   let discountValue = percentage * price;
//   let final = price - discountValue;
//   console.log("Orginal Price : " + price);
//   console.log("Price After Discount : " + final);
// }

// let no1 = 20;
// let no2 = 50;
// let no3 = 70;

// function getAvrage(n1, n2) {
//   return (n1 + n2) / 2;
// }

// console.log(getAvrage(100, 50));
// console.log(getAvrage(200, 300));
// console.log(getAvrage(no1, no2));
// console.log(getAvrage(no2, no3));

// function getAvrage1() {
//   let theAvrage = (no1 + no2) / 2;
//   return theAvrage;
// }

// function getAvrage2() {
//   let theAvrage = (no2 + no3) / 2;
//   return theAvrage;
// }

function sumNos(x, y) {
  return x + y;
}

function addingNos() {
  let no1 = +prompt("Enter first No");
  let no2 = +prompt("Enter second No");
  let final = sumNos(no1, no2);
  console.log(final);
}

// function minusNos() {
//   let no1 = +prompt("Enter first No");
//   let no2 = +prompt("Enter second No");
//   console.log(no1 - no2);
// }
