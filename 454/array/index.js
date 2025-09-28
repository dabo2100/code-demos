let phones = [
  { name: 'iPhone x', price: 500, qty: 10 },
  { name: 'iPhone 11', price: 600, qty: 3 },
  { name: 'iPhone 12', price: 700, qty: 3 },
];

function showPhones() {
  console.clear();
  console.table(phones);
}

function addNewPhone() {
  let newPhone = {
    name: prompt('Please Enter New Phone Name'),
    price: +prompt('Please Enter New Phone Price'),
    qty: +prompt('Please Enter New Phone QTY'),
  };
  phones.push(newPhone);
  showPhones();
}

function deletePhone() {
  let index = +prompt('Please Enter Phone No You want delete');
  phones.splice(index, 1);
  showPhones();
  // splice (index , 1)
}

function editPhone() {
  let index = +prompt('Please Enter Phone No You want Edit');
  let newPhone = {
    name: prompt('Please Enter New Phone Name'),
    price: +prompt('Please Enter New Phone Price'),
    qty: +prompt('Please Enter New Phone QTY'),
  };

  phones[index] = newPhone;
  showPhones();
}

function editPhonePrice() {
  let index = +prompt('Please Enter Phone No You want Edit');
  let newPrice = +prompt('Please Enter NEw Price');
  phones[index].price = newPrice;
  showPhones();
}
