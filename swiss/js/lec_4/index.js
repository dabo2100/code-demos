let nos = [1, 2, 3, 4, 10, 5, 6, 7, 8, 9, 10];
nos.splice(5, 0, "Hello");
console.log(nos);
// splice()  CUT , CUT and Replace , push;
// Push / pop
// nos.shift();
// nos.pop();
// console.log(nos);

// // Hamada Phones
// let phones = ["iPhone x", "iPhone 11", "iPhone 12"];
// let prices = [500, 550, 600];
// let qty = [10, 3, 7];

// function addPhone() {
//   phones.push(prompt("Add New Phone"));
//   prices.push(prompt("Add New Price"));
//   qty.push(prompt("Add New Qty"));
//   showPhones();
// }

// function showPhones() {
//   console.clear();
//   phones.forEach((el, index) => {
//     console.log(el + " ==> " + prices[index] + " ==> " + qty[index]);
//   });
// }
