// phoneNames , phonePrices, phoneQty
let products = ["iPhone x", "iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14"];
let prices = [500, 600, 700, 800, 900];
let qties = [3, 5, 1, 5, 0];

// CRUD ( read - show)

// Read / Show of Products

let showProducts = () => {
  console.clear();
  products.forEach((el, index) => {
    console.log(
      ` ${index} - Name : ${el} , Price : $ ${prices[index]} , Qty : ${qties[index]}`
    );
  });
};

// Create (Add)

let addNewProduct = () => {
  let newPhoneName = prompt("Please Enter New Phone Name");
  let newPhonePrice = +prompt("Please Enter New Phone Price");
  let newPhoneQty = +prompt("Please Enter New Phone Qty");
  products.push(newPhoneName);
  prices.push(newPhonePrice);
  qties.push(newPhoneQty);
  showProducts();
};

// Delete ()
let deleteProduct = () => {
  let indexToDelete = +prompt("Enter Phone No you want to delete");
  products.splice(indexToDelete, 1);
  prices.splice(indexToDelete, 1);
  qties.splice(indexToDelete, 1);
  showProducts();
};

// Update ( Edit)
let editName = () => {
  let indexToUpdate = +prompt("Enter Phone No you want to Edit");
  let newName = prompt("Enter new Phone Name");
  products[indexToUpdate] = newName;
  showProducts();
};

let editPrice = () => {
  let indexToUpdate = +prompt("Enter Phone No you want to Edit");
  let newName = +prompt("Enter new Phone Price");
  prices[indexToUpdate] = newName;
  showProducts();
};

let editQty = () => {
  let indexToUpdate = +prompt("Enter Phone No you want to Edit");
  let newName = +prompt("Enter new Phone Qty");
  qties[indexToUpdate] = newName;
  showProducts();
};
