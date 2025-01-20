let productsTable = document.querySelector("#productsTable tbody");
const products = JSON.parse(localStorage.getItem("products"));
// Add New Product
let productNameInput = document.querySelector("#productName");
let productPriceInput = document.querySelector("#productPrice");
let productQtyInput = document.querySelector("#productQty");
// Edit Inputs
let productNameEditInput = document.querySelector("#productNameEdit");
let productPriceEditInput = document.querySelector("#productPriceEdit");
let productQtyEditInput = document.querySelector("#productQtyEdit");

let indexToEdit = -1;

// Read
let showProducts = () => {
  productsTable.innerHTML = "";
  products.forEach((el, index) => {
    productsTable.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.price} $</td>
            <td>${el.stock}</td>
            <td>
              <i class="fa-solid fa-trash" onclick="removeProduct(${index})"></i>
              <i onclick="openProductEdit(${index})" data-bs-toggle="modal" data-bs-target="#editProdcutModal" class="fa-solid fa-pen-to-square"></i>
            </td>
        </tr>
    `;
  });
};

showProducts();

let clearInputs = () => {
  productNameInput.value = productPriceInput.value = productQtyInput.value = "";
};

// Create New Product
let addNewProduct = () => {
  let newProductObj = {
    name: productNameInput.value,
    price: +productPriceInput.value,
    stock: +productQtyInput.value,
  };
  products.push(newProductObj);
  localStorage.setItem("products", JSON.stringify(products)); // Save To Database (LocalStorage)
  showProducts();
  Swal.fire({
    title: "New Product Added!",
    icon: "success",
  }).then(() => {
    document.querySelector("#closeModal").click();
  });
};

// Delete Product
let removeProduct = (index) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      products.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(products));
      showProducts();
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });

  //   alert("I will Remove " + index);
};

let openProductEdit = (index) => {
  indexToEdit = index;
  let product = products[index];
  productNameEditInput.value = product.name;
  productPriceEditInput.value = product.price;
  productQtyEditInput.value = product.stock;
};

let saveChanges = () => {
  let newObj = {
    name: productNameEditInput.value,
    price: +productPriceEditInput.value,
    stock: +productQtyEditInput.value,
  };
  products[indexToEdit] = newObj;
  localStorage.setItem("products", JSON.stringify(products)); // Save To Database (LocalStorage)
  showProducts();
  Swal.fire({
    title: "Product Succssfully Edit!",
    icon: "success",
  }).then(() => {
    document.querySelector("#closeModal2").click();
  });
};
