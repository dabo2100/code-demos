let phones = [
  { name: "iPhone x", price: 450, qty: 4 }, // 0
  { name: "iPhone 11", price: 500, qty: 3 },
  { name: "iPhone 12", price: 550, qty: 2 },
  { name: "iPhone 13", price: 600, qty: 1 },
];

let table = document.querySelector("table tbody");

let showPhones = () => {
  table.innerHTML = ""; // Clear Table
  phones.forEach((el, index) => {
    table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${el.name}</td>
                <td>${el.price}</td>
                <td>${el.qty}</td>
                <td>
                    <button onclick="deletePhone(${index})" class="btn btn-danger">Del</button>
                    <button onclick="updatePrice(${index})" class="btn btn-warning">Update Price</button>
                    <button class="btn btn-warning">Update Qty</button>
                    <button class="btn btn-warning">Update Name</button>
                </td>
            </tr>
        `;
  });
};

let deletePhone = (index) => {
  let confirmDelete = confirm("Are you sure ?");
  if (confirmDelete) {
    phones.splice(index, 1);
    showPhones();
  } else {
    alert("No Thing Will Be Deleted");
  }
};
