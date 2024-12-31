let phones = [
  "iPhone x",
  "iPhone 11",
  "iPhone 12",
  "Samsung s23",
  "Samsung s24",
];
let prices = [400, 500, 600, 700, 800];

function showPhones() {
  console.clear();
  phones.forEach(function (phone, index) {
    console.log(`Name : ${phone} ==> price : ${prices[index]} $`);
  });
}

function addPhone() {
  let newName = prompt("Enter Phone Name");
  let newPrice = +prompt("Enter Phone Price");
  phones.push(newName);
  prices.push(newPrice);
  showPhones();
}

function editPhoneName() {
  let phoneToEdit = prompt("Enter Phone Name To Edit");
  let index = phones.indexOf(phoneToEdit);
  let newPhoneName = prompt("Enter New Phone Name");
  phones[index] = newPhoneName;
  showPhones();
}

function editPhonePrice() {
  let phoneToEdit = prompt("Enter Phone Name To Edit");
  let index = phones.indexOf(phoneToEdit);
  let newPhonePrice = prompt("Enter New Phone Price");
  prices[index] = newPhonePrice;
  showPhones();
}

function removePhone() {
  let phoneToEdit = prompt("Enter Phone Name To Delete");
  let index = phones.indexOf(phoneToEdit);
  phones.splice(index, 1);
  prices.splice(index, 1);
  showPhones();
}

// // view by index
// // console.log(phones[0]);
// // console.log(phones[1]);
// // console.log(phones[2]);
// // console.log(phones[3]);
// // console.log(phones[4]);
// // for , forEach
// // phones.forEach(function (el, index) {
// //   console.log(el);
// // });
// // Add By Index
// phones[5] = "Samsung s25";
// phones[phones.length] = "Tablet 7";
// // Using Push
// phones.push("Tablet 9");
// // Using Splice
// phones.splice(3, 0, "iPhone 13");
// phones.splice(7, 0, "Samsung s26");

// // Update By Using Index
// // get index of something
// let index = phones.indexOf("iPhone x");
// // phones[index] = "iPhone 10";
// // update (Remove and Replace) by splice
// phones.splice(index, 1, "iPhone 10");
// // Delete using delete
// // splice
// delete phones[0];
// phones.splice(0, 1);

// console.log(phones);
