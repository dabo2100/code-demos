let productsDiv = document.querySelector("#productsContainer");
let table = document.querySelector("table tbody");
let span = document.querySelector("#total");
let fatoraContent = [];
showProducts();
// let userInfo = {
//   name: "Ahmed",
//   age: 20,
// };

// console.log(JSON.stringify(userInfo));

// let userInfoJSON = `{"name":"Ahmed","age":20}`;
// console.log(JSON.parse(userInfoJSON));
// let userInfoJSON = "{'name' : 'Ahmed','age':'25'}";

// console.log(JSON.parse(userInfoJSON));
// let userInfo = { name: "Ahmed", age: 25 };
// console.log(userInfo);

// console.log();

// API Application Programmeing Interface
// UI   User Interface

// API
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(JSON.parse(this.responseText));
  }
};

xhttp.open("GET", "https://fakestoreapi.com/products", true);
xhttp.send();
