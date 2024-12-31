let allPhones = [
  { name: "iPhone x", price: 400, qty: 5 },
  { name: "iPhone 11", price: 450, qty: 10 },
  { name: "iPhone 12", price: 500, qty: 2 },
];

let showPhones = () => {
  console.clear();
  allPhones.forEach((hady, index) => {
    console.log(`${index + 1} - ${hady.name} => price : ${hady.price}`);
  });
};

let addNewPhone = () => {
  let newPhoneObj = {
    name: prompt("Enter New Phone Name"),
    price: +prompt("Enter Phone Price"),
    qty: +prompt("Enter Phone Qty"),
  };
  allPhones.push(newPhoneObj);
  showPhones();
};

let deletePhone = () => {
  let phoneToRemoveIndex = +prompt("Enter Phone No You want to delete") - 1;
  allPhones.splice(phoneToRemoveIndex, 1);
  showPhones();
};

let updatePrice = () => {
  let phoneToRemoveIndex = +prompt("Enter Phone No You want to Update") - 1;
  allPhones[phoneToRemoveIndex].price = +prompt("Enter New Price");
  showPhones();
};
