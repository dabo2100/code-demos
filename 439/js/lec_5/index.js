let table = document.querySelector("table tbody");
let phoneNameInput = document.querySelector("#phoneNameInput");
let phonePriceInput = document.querySelector("#phonePriceInput");
let phoneQtyInput = document.querySelector("#phoneQtyInput");

const phones = [
  { name: "iPhone x", price: 400, qty: 3 },
  { name: "iPhone 11", price: 500, qty: 5 },
  { name: "iPhone 12", price: 600, qty: 6 },
  { name: "iPhone 13", price: 700, qty: 7 },
  { name: "iPhone 14", price: 700, qty: 7 },
];

let showPhones = () => {
  table.innerHTML = "";
  phones.forEach((el, index) => {
    table.innerHTML += `
            <tr>
                <th>${index + 1}</th>
                <th>${el.name}</th>
                <th>${el.price} $</th>
                <th>${el.qty}</th>
                <th>
                <button class="btn btn-danger" onclick="removePhone(${index})">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
                <button class="btn btn-warning" onclick="removePhone(${index})">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                </th>
            </tr>
        `;
  });
};

showPhones();

let addNewPhone = () => {
  let newPhoneObj = {
    name: phoneNameInput.value,
    price: +phonePriceInput.value,
    qty: +phoneQtyInput.value,
  };
  phones.push(newPhoneObj);
  showPhones();
  Swal.fire({
    icon: "success",
    title: "PHone Addedd Succssfully!",
    timer: 1500,
  });
};

let removePhone = (phoneIndex) => {
  Swal.fire({
    icon: "question",
    title: "Are you sure ?",
    text: "Data can't be retrived",
    showDenyButton: true,
    denyButtonText: "لا ياعم متمسحش",
    confirmButtonText: "يلا بينا يا باشا",
    confirmButtonColor: "red",
    denyButtonColor: "green",
  }).then((res) => {
    if (res.isConfirmed == true) {
      phones.splice(phoneIndex, 1);
      showPhones();
      Swal.fire({
        icon: "success",
        title: "Phone Deleted Succssfully !",
      });
    }
  });
};
