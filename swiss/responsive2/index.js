let products = [
  { name: "iPhone x", price: 400, img: "./1.jpeg" },
  { name: "iPhone 11", price: 500, img: "./11.png" },
  { name: "iPhone 12", price: 550, img: "./x.png" },
  {
    name: "iPhone 13",
    price: 600,
    img: "./WhatsApp Image 2024-10-30 at 20.38.01_c530073c.jpg",
  },
  { name: "iPhone 14", price: 650, img: "./12.jpeg" },
];

let fatoraArr = [];

let span = document.querySelector("#total");
let table = document.querySelector("table tbody");
let productsContainer = document.querySelector("#productContatiner");

let renderProducts = () => {
  productsContainer.innerHTML = "";
  products.forEach((el, index) => {
    productsContainer.innerHTML += `
            <div class="bg-dark rounded-1 p-3 text-white" onclick="addProduct(${index})">
                <img class="object-fit-cover" src="${el.img}" height="100"width="100"/>
                <p>${el.name}</p>
                <p>price : ${el.price} $</p>
            </div>
        `;
  });
};

let renderFatora = () => {
  table.innerHTML = "";
  fatoraArr.forEach((el, index) => {
    table.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${el.name}</td>
          <td>${el.price} $</td>
          <th>
            <button class="btn btn-danger" onclick="decremntQty(${index})">-</button> 
            ${el.qty}
            <button class="btn btn-success" onclick="incremntQty(${index})">+</button>
          </th>
          <td>${el.price * el.qty} $</td>
        </tr>
        `;
  });
  getTotal();
};

let incremntQty = (index) => {
  fatoraArr[index].qty++;
  renderFatora();
};

let decremntQty = (index) => {
  if (fatoraArr[index].qty > 1) {
    fatoraArr[index].qty--;
  } else {
    fatoraArr.splice(index, 1);
  }
  renderFatora();
};

let addProduct = (index) => {
  let product = products[index];
  product.qty = 1;
  fatoraArr.push(product);
  renderFatora();
};

let getTotal = () => {
  let total = 0;
  fatoraArr.forEach((el) => {
    total = total + el.price * el.qty;
  });
  console.log(total);
  span.innerText = total;
};
renderProducts();
renderFatora();
