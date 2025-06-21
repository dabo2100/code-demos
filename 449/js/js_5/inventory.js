// Names is Array
// Prices in Array
// Qties in Array
let phones = [
  { name: "iPhone x", price: 400, qty: 3 },
  { name: "iPhone 11", price: 500, qty: 4 },
  { name: "iPhone 12", price: 600, qty: 2 },
  { name: "iPhone 13", price: 700, qty: 5 },
  { name: "iPhone 14", price: 800, qty: 7 },
];

// CRUD

let showPhones = () => {
  console.clear();
  console.table(phones);
};

let addNewPhone = () => {
  let newPhoneObj = {
    name: prompt("Enter Phone Name"),
    price: +prompt("Enter New PHone Price"),
    qty: +prompt("Enter new Phone QTY"),
  };
  phones.push(newPhoneObj);
  showPhones();
};

let deletePhone = () => {
  let phoneIndex = +prompt("Enter phone index you want to delete");
  phones.splice(phoneIndex, 1);
  showPhones();
};

let updatePhoneInfo = () => {
  // what the key you want to change
  // What is the new vaLue
  let phoneIndex = +prompt("Enter phone Index you want to update");
  let key = prompt(
    "What is the info you want to Update ('price','qty','name') ?"
  );
  let newValue = prompt("Enter New Value of " + key);
  //   if (key != "name") {
  //     phones[phoneIndex][key] = +newValue;
  //   } else {
  //     phones[phoneIndex][key] = newValue;
  //   }
  phones[phoneIndex][key] = key != "name" ? +newValue : newValue;
  showPhones();
};
