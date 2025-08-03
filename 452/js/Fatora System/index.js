let products = [
  { id: 1, name: 'iPhone x', price: 400 },
  { id: 2, name: 'iPhone 11', price: 450 },
  { id: 3, name: 'iPhone 12', price: 500 },
  { id: 4, name: 'iPhone 13', price: 550 },
  { id: 5, name: 'iPhone 14', price: 600 },
];

let cart = [
  { id: 1, name: 'iPhone x', price: 400, qty: 3 },
  { id: 2, name: 'iPhone 11', price: 450, qty: 5 },
];

let table = document.querySelector('table tbody');
let productsDiv = document.querySelector('#productsDiv');

let showProducts = () => {
  products.forEach((el) => {
    productsDiv.innerHTML += `
        <div class="col-12 p-3 bg-white shadow rounded border">
          <h1>${el.name}</h1>
          <div class="d-flex align-items-center justify-content-between">
            <p class="mb-0">Price : ${el.price} $</p>
            <button class="btn btn-success">Add To Cart</button>
          </div>
        </div>
    `;
  });
};

let showCart = () => {
  cart.forEach((el, index) => {
    table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${el.name}</td>
                <td>${el.price} $</td>
                <td>
                    <div class="d-flex align-items-center justify-content-center gap-2">
                        <button class="btn btn-danger">-</button>
                        <p class="mb-0">${el.qty}</p>
                        <button class="btn btn-success">+</button>
                    </div>
                </td>
                <td>
                    ${el.qty * el.price} $
                </td>
                <td>
                    <button class="btn btn-danger">Del</button>
                </td>
            </tr>
        `;
  });
};

showProducts();
showCart();
