const productsModalBody = document.querySelector("#productsModal .modal-body");
const tbody = document.querySelector("tbody");
const phoneName = document.querySelector("#phoneName");
const phonePrice = document.querySelector("#phonePrice");
const totalP = document.querySelector("#total");

let phoneToEdit = {};

const myPhones = [
  { name: "iPhone x", price: 450 },
  { name: "iPhone 11", price: 550 },
  { name: "iPhone 12", price: 600 },
];

const fatora = [];

const showProducts = () => {
  productsModalBody.innerHTML = "";
  myPhones.forEach((el, index) => {
    productsModalBody.innerHTML += `
            <div class="btn btn-dark col-12 d-flex justify-content-between align-items-center"  onclick="addToFatora(${index})" >
                ${el.name} - [ $${el.price} ]
                <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    class="btn btn-warning" 
                    onclick="openEditModal(event,${index})"
                >
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                </button> 
            </div>
        `;
  });
};

showProducts();

const getTotal = () => {
  let total = 0;
  fatora.forEach((el, index) => {
    total = total + el.price * el.qty;
  });
  totalP.innerText = total;
};

const showFatora = () => {
  tbody.innerHTML = "";
  fatora.forEach((el, index) => {
    tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${el.name}</td>
                <td>${el.price}</td>
                <td>$ ${el.qty}</td>
                <td>$ ${el.price * el.qty}</td>
            </tr>
        `;
  });
  getTotal();
};

showFatora();

const addToFatora = (indexToAdd) => {
  let phone = myPhones[indexToAdd];
  phone.qty = 1;
  fatora.push(phone);
  showFatora();
};

const openEditModal = (event, indexToEdit) => {
  event.stopPropagation();
  let phone = myPhones[indexToEdit];
  phoneToEdit = indexToEdit;
  phoneName.value = phone.name;
  phonePrice.value = phone.price;
};

const saveChanges = () => {
  myPhones[phoneToEdit].name = phoneName.value;
  myPhones[phoneToEdit].price = phonePrice.value;
  showProducts();
  showFatora();
};
