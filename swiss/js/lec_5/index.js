let phones = [
  { name: "iPhonex", price: 400 },
  { name: "iPhone11", price: 500 },
  { name: "iPhone12", price: 600 },
];

let showPhone = () => {
  console.clear();
  phones.forEach((el, index) => {
    console.log(el.name + " => " + el.price);
  });
};

let addPhone = () => {
  let phoneName = prompt("Enter Phone Name");
  let phonePrice = +prompt("Enter Phone Price");
  let obj = { name: phoneName, price: phonePrice };
  phones.push(obj);
  showPhone();
};

let editPrice = () => {
  let phoneNo = +prompt("Enter PHone No to Edit") - 1; //2 => 1
  let newPrice = +prompt("Enter New Price");
  let thePhone = phones[phoneNo]; // phones [1];
  thePhone.price = newPrice;
  showPhone();
};

let editName = () => {
  let phoneNo = +prompt("Enter PHone No to Edit") - 1; //2 => 1
  let newName = prompt("Enter New Name");
  let thePhone = phones[phoneNo]; // phones [1];
  thePhone.name = newName;
  showPhone();
};

let deletePhone = () => {
  let phoneNo = +prompt("Enter PHone No to Edit") - 1;
  //   delete phones[phoneNo];
  phones.splice(phoneNo, 1);
  showPhone();
  //   console.log(phones.length);
};
