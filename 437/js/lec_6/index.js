// Render
let phoneNameInput = document.querySelector("#phoneName");
let phonePriceInput = document.querySelector("#phonePrice");

let products = [];
// Render Products
let showProducts = () => {
  let div = document.querySelector("#productsContainer tbody");
  div.innerHTML = "";
  products.forEach((el, index) => {
    div.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${el.name}</td>
        <td>${el.price} EGP </td>
        <td>
        <span onclick="removeProduct(${index})" class="btn btn-danger">X</span>
        <span onclick="editProduct(${index})" class="btn btn-warning">
            <img src="./edit (1).png" height ="20">
        </span>
        
        </td>
    </tr>
  `;
  });
};
showProducts();

let addNewProduct = () => {
  let newObj = {
    name: phoneNameInput.value,
    price: phonePriceInput.value,
  };
  products.push(newObj);
  phoneNameInput.value = "";
  phonePriceInput.value = "";
  alert("New Product Added Succsully");
  showProducts();
};

let removeProduct = (index) => {
  let res = confirm("Are you sure you want to delete this product ?");
  if (res == true) {
    products.splice(index, 1);
    showProducts();
    alert(" Product Removed Succsully");
  }
};

let phoneIndex = -1;

let editProduct = (index) => {
  let phone = products[index];
  phoneNameInput.value = phone.name;
  phonePriceInput.value = phone.price;
  phoneIndex = index;
};

let saveNewValues = () => {
  let newObj = {
    name: phoneNameInput.value,
    price: phonePriceInput.value,
  };
  products.splice(phoneIndex, 1, newObj);
  alert(" Product Updated Succsully");
  showProducts();
};
