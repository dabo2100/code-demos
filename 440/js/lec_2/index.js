// Logical Operator && ||
// let userNameDB = "ali";
// let userPasswordDB = "123456";
// let userName = prompt("Enter username");
// let password = prompt("Enter your password");

// if (userName == userNameDB && password == userPasswordDB) {
//   document.write("Login Success");
// } else {
//   document.write("Username or Password is wrong");
// }
// if (userName != userNameDB || password != userPasswordDB) {
//   document.write("Username or Password is wrong");
// } else {
//   document.write("Login Success");
// }

// let userDegree = +prompt("Enter user degree ");

// if (userDegree > 0 && userDegree < 50) {
//   document.write("يا ساقط يا فاشل");
// } else if (userDegree >= 50 && userDegree < 65) {
//   document.write("مقبول");
// } else if (userDegree >= 65 && userDegree < 75) {
//   document.write("جيد");
// } else if (userDegree >= 75 && userDegree < 85) {
//   document.write("جيد جداً");
// } else if (userDegree >= 85 && userDegree <= 100) {
//   document.write("امتياز");
// } else {
//   document.write("رقم متخلف بتعمل ايه");
// }

// Nested if  ** && ||

// let userDegree = +prompt("Enter you degree");

// if (userDegree > 0) {
//   if (userDegree >= 50) {
//     if (userDegree >= 65) {
//       if (userDegree >= 75) {
//         if (userDegree >= 85) {
//           if (userDegree <= 100) {
//             document.write("امتياز");
//           } else {
//             document.write("ايه الرقم ده يا متخلف");
//           }
//         } else {
//           document.write("جيد جداً");
//         }
//       } else {
//         document.write("جيد");
//       }
//     } else {
//       document.write("مقبول");
//     }
//   } else {
//     document.write("يا ساقط يا فاشل");
//   }
// } else {
//   document.write("ايه الرقم ده يا متخلف");
// }

// if (userDegree > 0) {
//   document.write("ساقط");
// }

// if (userDegree > 50) {
//   document.write("جيد");
// }
// if (userDegree > 65) {
//   document.write("جيد جداً");
// }

// Cairo =>0
// Alex => 10
// Aswan => 20
// Any => 15
// let userCity = prompt("Enter your city");

// if (userCity == "Cairo") {
//   document.write(" قيمة الخصم هي 0");
// } else if (userCity == "Alex") {
//   document.write(" قيمة الخصم هي 10");
// } else if (userCity == "Aswan") {
//   document.write(" قيمة الخصم هي 20");
// } else {
//   document.write(" قيمة الخصم هي 15");
// }

// Function block of code

// function sayWelcome() {
//   let userName = prompt("Enter you name");
//   console.log("Welcome " + userName);
// }

// function calc10() {
//   let price = +prompt("Enter Price");
//   let discount = (10 / 100) * price;
//   let final = price - discount;
//   alert("Final price is : " + final);
// }

// function calc20() {
//   let price = +prompt("Enter Price");
//   let discount = (20 / 100) * price;
//   let final = price - discount;
//   alert("Final price is : " + final);
// }

// function calcDiscount() {
//     let price = +prompt("Enter Price");
//     let discountPercentage = +prompt("Enter percentage");
//     let discount = (discountPercentage / 100) * price;
//     let final = price - discount;
//     alert("Final price is : " + final);
//   }

// function openFan() {
//   fanStatus = true;
//   console.log("Fan is Open");
// }

// function closeFan() {
//   fanStatus = false;
//   console.log("Fan is Close");
// }

// function toggleFan() {
//   if (fanStatus == true) {
//     fanStatus = false;
//     console.log("Fan is Close");
//   } else {
//     fanStatus = true;
//     fanSpeed = 1;
//     console.log("Fan is Open");
//     console.log("Fan Speed is : 1");
//   }
// }

// function speedIncrement() {
//   //   fanSpeed = fanSpeed + 1;
//   //   fanSpeed++;
//   if (fanSpeed < 5 && fanStatus == true) {
//     fanSpeed += 1;
//     console.log("Fan Speed : " + fanSpeed);
//   }
// }

// function speedDecrment() {
//   //   fanSpeed = fanSpeed - 1;
//   //   fanSpeed -= 1;
//   if (fanSpeed > 1 && fanStatus == true) {
//     fanSpeed--;
//     console.log("Fan Speed : " + fanSpeed);
//   }
// }

// let fanStatus = false;
// let fanSpeed = 0;

// function pullRope() {
//   if (fanStatus == false) {
//     fanStatus = true;
//     fanSpeed = 1;
//     console.log("Fan is Open");
//     console.log("Fan Speed : 1");
//   } else if (fanSpeed >= 1 && fanSpeed < 3) {
//     fanSpeed++;
//     console.log("Fan Speed : " + fanSpeed);
//   } else if (fanSpeed == 3) {
//     fanStatus = false;
//     console.log("Fan is Close ");
//   }

//   if (fanStatus == false) {
//     fanStatus = true;
//     fanSpeed = 1;
//     console.log("Fan is Open");
//     console.log("Fan Speed : 1");
//   } else if (fanSpeed == 3) {
//     fanStatus = false;
//     console.log("Fan is Close ");
//   } else {
//     fanSpeed++;
//     console.log("Fan Speed : " + fanSpeed);
//   }
// }

// let x = +prompt("x value");
// let y = +prompt("y value");

// function summation(x, y) {
//     let result = x + y
//     return result
// }

// let sale = summation(x, y)

// console.log(sale)

// function sayHello() {
//   return "1234";
//   console.log("Hello");
//   asdijsadijsa
// }
// console.log(sayHello());

// function getAvarage() {
//   let no1 = +prompt("Enter No 1");
//   let no2 = +prompt("Enter No 2");
//   let final = (no1 + no2) / 2;
//   return final;
// }
// let final20 = getAvarage() + 20;
// let finalmins20 = getAvarage() - 20;
// getAvarage();

// let no1 = 10;
// let no2 = 20;
// let no3 = 30;
// let no4 = 40;

// function getAvrage1() {
//   return (no1 + no2) / 2;
// }

// function getAvrage2() {
//   return (no2 + no3) / 2;
// }
// function getAvrage3() {
//   return (no1 + no4) / 2;
// }

// function getAvrage(x, y) {
//   return (x + y) / 2;
// }

// console.log(getAvrage(4, 50));
// console.log(getAvrage(40, 50));
// console.log(getAvrage(400, 50));
// console.log(getAvrage(400, 500));
// console.log(getAvrage(50, 50));
// console.log(getAvrage(no1, no3));

// + - * /

function sumNos(no1, no2) {
  return no1 + no2;
}

function calcSum() {
  let n1 = +prompt("Enter First No to sum");
  let n2 = +prompt("Enter Second No to sum");
  console.log(sumNos(n1, n2));
}
