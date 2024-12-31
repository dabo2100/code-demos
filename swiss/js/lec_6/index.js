// Calcuation / Mainpaltion / Validation
// What to Maniplate into Dom
// Render => put content into html from js
// object Methods - Array
// Nodes
// Element Node
// Text Node
// .class{}
// Selectors
// let link = document.getElementById("link1");
// let lis = document.getElementsByTagName("a"); // array
// let oddList = document.getElementsByClassName("odd"); // array
// let link = document.querySelector("#link1"); // Object first one
// let odd = document.querySelector(".odd");
// let ul = document.querySelector("ul");
// let lis = document.querySelector("ul li");
// let odds = document.querySelectorAll(".odd");   // Array
// lis[1].remove();
// inner text (Text Node)
// let lis = document.querySelectorAll("ul li");
// let item = lis[1];
// item.innerText = "Hello From js";
// innerHTML
// let x = 1;
// x++;
// x += 3;
// style
// let fanStatus = false;
// let trunOn = () => {
//   let btn = document.querySelector("button");
//   btn.style.transition = "ease all 400ms";
//   if (fanStatus == false) {
//     btn.style.color = "white";
//     btn.style.backgroundColor = "green";
//     btn.style.fontSize = "2rem";
//     btn.style.borderRadius = "1rem";
//     fanStatus = true;
//   } else {
//     btn.style.color = "grey";
//     btn.style.backgroundColor = "red";
//     btn.style.fontSize = "1";
//     btn.style.borderRadius = "0";
//     fanStatus = false;
//   }
// };
// let p = document.querySelector("p");
// // p.innerHTML = "<span>Hello</span>";
// p.innerHTML = `
// <div>
//     <ul>
//         <li>Task 1</li>
//         <li>Task 2</li>
//         <li>Task 3</li>
//     </ul>
// </div>
// <span>Hello</span>
// `;

// let addTask = () => {
//   let ul = document.querySelector("ul");
//   let lis = document.querySelectorAll("li");
//   let noOflis = lis.length;
//   ul.innerHTML += `<li>Task ${noOflis + 1}</li>`;
// };
// let showAnswer = () => {
//   let h1 = document.querySelector("h1");
//   h1.innerText = "The Answer is : .....";
// };
// let p = document.querySelector("p");
// let input = document.querySelector("input");
// let addVat = () => {
//   p.innerText = `Total is : ${(+input.value * 114) / 100}`;
// };
// let addDiscount = () => {
//   p.innerText = `Total is : ${(+input.value * 90) / 100}`;
// };

let phones = [
  { name: "iPhone x", price: 400 },
  { name: "iPhone 11", price: 450 },
  { name: "iPhone 12", price: 500 },
  { name: "iPhone 13", price: 550 },
];

let div = document.querySelector("#phonesContainer");
let nameInput = document.querySelector("#nameInput");
let priceInput = document.querySelector("#priceInput");

let renderPhones = () => {
  div.innerHTML = "";
  phones.forEach((el, index) => {
    div.innerHTML += `<button class="btn btn-primary">${el.name} [ ${el.price}$ ]</button>`;
  });
};

renderPhones();

let addPhone = () => {
  let phoneObj = { name: nameInput.value, price: priceInput.value };
  phones.push(phoneObj);
  renderPhones();
  priceInput.value = "";
  nameInput.value = "";
};
