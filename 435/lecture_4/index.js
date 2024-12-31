let indexToEdit = 0;
let table = document.querySelector("table tbody");
let nameInput = document.querySelector("#newPhone");
let priceInput = document.querySelector("#newPrice");
let phones = [
  { name: "iPhone x", price: 400 },
  { name: "iPhone 11", price: 500 },
  { name: "iPhone 12", price: 500 },
];

let addPhone = () => {
  let val1 = nameInput.value;
  let val2 = priceInput.value;
  let obj = { name: val1, price: val2 };
  phones.push(obj);
  showPhones();
};
function showPhones() {
  table.innerHTML = "";
  phones.forEach((el, index) => {
    table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td><button onclick="deletePhone(${index})" class="btn btn-danger">Del</button></td>
            <td><button onclick="editPhone(${index})" class="btn btn-warning">Edit</button></td>
        </tr>
    `;
  });
}

let deletePhone = (index) => {
  phones.splice(index, 1);
  showPhones();
};
let editPhone = (index) => {
  let obj = phones[index];
  nameInput.value = obj.name;
  priceInput.value = obj.price;
  indexToEdit = index;
};

let savePhone = () => {
  let val1 = nameInput.value;
  let val2 = priceInput.value;
  let obj = { name: val1, price: val2 };
  phones.splice(indexToEdit,1,obj);
  showPhones();
};
