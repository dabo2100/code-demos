// console.log("Hello From JS");
// document.write("Hello From JS");
// window.alert("Hello From JS");
// Data Types
// Number Float - Int , douple
// String - text
// Boolean ( true false)
// array
// Object {}
// null , undefind
// console.log(10 + 20);
// console.log(1 / 7);
// console.log(0.25456558 * 15000000);
// console.log(-20 - 20);
// console.log("Hello i'm ali" + " " + "Hello i'm sammar from italy");
// console.log(`Hello i'm Ali from "Egypt" `);
// console.log(`Hello i'm ali from "Egypt " \\\`2020\` `);
// console.log(typeof null);
// console.log("Hello " + 2020 + " New Year");
// console.log(true + "true");
// console.log(true + true);
// Variables
// var userName = "Ali2100";
// let userName = "Ali";
// let userAge = 20;
// let isSub = true;
// let userName = prompt("Enter you name");
// document.write("Welcome " + userName);
let oPrice = +prompt("Enter Original Price");
let discount = +prompt("Enter discount value");
let discountVale = (oPrice * discount) / 100;
let final = oPrice - discountVale;
document.write("Final Price After  ===> " + final);
