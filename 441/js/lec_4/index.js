// let phoneNames = ["iPhone x", "iPhone 11", "iPhone 12"];
// let phonePrices = [500, 600, 700];
// let phoneQty = [1, 5, 1];

// function addNewPhone() {
//   let newItemName = prompt("Enter New Phone Name");
//   let newItemPrice = prompt("Enter New Phone Price");
//   let newItemQty = prompt("Enter New Phone Qty");
//   phoneNames.push(newItemName);
//   phonePrices.push(newItemPrice);
//   phoneQty.push(newItemQty);
//   showList();
// }

// function showList() {
//   console.clear();
//   phoneNames.forEach(function (el, index) {
//     console.log(
//       index +
//         1 +
//         " - " +
//         el +
//         " price : " +
//         phonePrices[index] +
//         " QTY : " +
//         phoneQty[index]
//     );
//   });
// }

// function deleteItem() {
//   let productIndexToDelete = +prompt("Enter PHone No You want to delete") - 1;
//   phoneNames.splice(productIndexToDelete, 1);
//   phonePrices.splice(productIndexToDelete, 1);
//   phoneQty.splice(productIndexToDelete, 1);
//   showList();
// }
// Hoisting 
// Scope
// Global Scope
let x = 20;
function sayHello() {
  let x = 100; // function Scope
  if (1 == 1) {
    console.log(x);
    let x = 50; // block Scope
  }
  let y = 50;

  function sayHi() {
    let x = 40; // laxial scope
    console.log();
  }
  //   sayHi();
}
sayHello();
sayHi();
// console.log(x);
