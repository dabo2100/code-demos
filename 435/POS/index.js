let cats = Object.keys(products);
let ProductsOfCat = document.querySelector("#ProductsOfCat");
let CategoriesDiv = document.querySelector("#CategoriesDiv");

let renderCats = () => {
  CategoriesDiv.innerHTML = "";
  cats.forEach((el, index) => {
    CategoriesDiv.innerHTML += `<button onclick="renderProduct('${el}')">${el}</button>`;
  });
};
renderCats();

let renderProduct = (catName) => {
  let pro = products[catName];
  ProductsOfCat.innerHTML = "";
  pro.forEach((el, index) => {
    ProductsOfCat.innerHTML += `<button>${el.name}</button>`;
  });
};
