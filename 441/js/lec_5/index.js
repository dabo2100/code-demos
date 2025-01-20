let phones = [
  {
    name: "iPhone x",
    price: 500,
    qty: 5,
  },
  {
    name: "iPhone 11",
    price: 600,
    qty: 4,
    colors: {
      red: 2,
      blue: 1,
      gold: 1,
    },
  },
  {
    name: "iPhone 12",
    price: 700,
    qty: 3,
  },
];

let showPhones = () => {
  console.clear();
  phones.forEach((el, index) => {
    console.log(
      `${index + 1} - ${el.name} => price : ${el.price} => Qty : ${el.qty}`
    );
  });
};

let addNewPhone = () => {
  let newPhone = {
    name: prompt("Enter new PHone name"),
    price: +prompt("Enter New Phone Price"),
    qty: +prompt("Enter Phone Qty"),
  };
  phones.push(newPhone);
  showPhones();
};

let deletePhone = () => {
  let phoneIndex = +prompt("Enter Phone No You want to delete") - 1;
  phones.splice(phoneIndex, 1);
  showPhones();
};

let updatePhoneQty = () => {
  let phoneIndex = +prompt("Enter Phone No You want to delete") - 1;
  phones[phoneIndex].qty = +prompt("Enter New Qty");
  showPhones();
};

let updatePhonePrice = () => {
  let phoneIndex = +prompt("Enter Phone No You want to delete") - 1;
  phones[phoneIndex].price = +prompt("Enter New Qty");
  showPhones();
};

let updatePhoneName = () => {
  let phoneIndex = +prompt("Enter Phone No You want to delete") - 1;
  phones[phoneIndex].name = +prompt("Enter New Qty");
  showPhones();
};

// // Selectors
// // let h1 = document.getElementById("head1");
// // let heads = document.getElementsByClassName("head");
// // let allHeads = document.getElementsByTagName("h1");

// let h1 = document.querySelector("#head1");
// let h2 = document.querySelector(".head");
// let h3 = document.querySelectorAll("ul li p");
// console.log(h3);
// // console.log(heads[1].innerText = "Ana Gamed Gedan");

// // h1.innerText = "Welcome From js";
// // console.log( );
let showResult = () => {
  let h1 = document.querySelector("h1");
  h1.innerText = "القاهرة";
};

let makeDiscount10 = () => {
  let input = document.querySelector("input");
  let p = document.querySelector("p");
  let price = +input.value;
  let discount = (10 / 100) * price;
  let final = price - discount;
  p.innerText = `
    Original Price is : ${price}
    and Final Price is : ${final}
  `;
};
