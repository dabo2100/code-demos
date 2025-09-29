let productJ = localStorage.getItem('products');
let products = JSON.parse(productJ);
let table = document.querySelector('table tbody');

let productIndextoEdit = null;
// Add Modal
let modal = document.querySelector('#modal');
let productName = document.querySelector('#productName');
let productPrice = document.querySelector('#productPrice');
let productQty = document.querySelector('#productQty');
// Edit Modal
let modal2 = document.querySelector('#modal2');
let productName2 = document.querySelector('#productName2');
let productPrice2 = document.querySelector('#productPrice2');
let productQty2 = document.querySelector('#productQty2');

let showProducts = () => {
  table.innerHTML = '';
  products.forEach((el, index) => {
    let row = `
            <tr>
                <th>${index + 1}</th>
                <th>${el.name}</th>
                <th>${el.price}</th>
                <th>${el.qty}</th>
                <th>
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <button onclick="removePhone(${index})" class="btn btn-danger">Del</button>
                        <button onclick="openModal2(${index})" class="btn btn-warning">Edit</button>
                    </div>      
                </th>
            </tr>
        `;
    table.innerHTML += row;
  });
};

showProducts();

let removePhone = (index) => {
  swal
    .fire({
      icon: 'question',
      title: 'Are you sure ?',
      text: 'The item will be deleted for ever انت مجنون يلا ولا ايه ؟',
      confirmButtonText: `Yes , Delete It`,
      showDenyButton: true,
      denyButtonText: `No , Not Now`,
    })
    .then((res) => {
      if (res.isConfirmed) {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        showProducts();
      }
    });
};

let openModal = () => {
  modal.classList.replace('d-none', 'd-flex');
};

let closeModal = () => {
  modal.classList.replace('d-flex', 'd-none');
};

let addNewPhone = () => {
  let newPhoneObje = {
    name: productName.value,
    price: +productPrice.value,
    qty: +productQty.value,
  };
  productName.value = '';
  productPrice.value = '';
  productQty.value = '';
  products.push(newPhoneObje);
  closeModal();
  localStorage.setItem('products', JSON.stringify(products));
  showProducts();
  swal.fire({
    icon: 'success',
    text: 'New Product Added',
  });
};

let openModal2 = (index) => {
  productIndextoEdit = index;
  let phoneToEdit = products[index];
  productName2.value = phoneToEdit.name;
  productPrice2.value = phoneToEdit.price;
  productQty2.value = phoneToEdit.qty;
  modal2.classList.replace('d-none', 'd-flex');
};

let EditPhoneData = () => {
  let newPhoneObje = {
    name: productName2.value,
    price: +productPrice2.value,
    qty: +productQty2.value,
  };
  products[productIndextoEdit] = newPhoneObje;
  closeModal2();
  localStorage.setItem('products', JSON.stringify(products));
  showProducts();
  swal.fire({
    icon: 'success',
    text: 'Product Edited Success',
  });
};

let closeModal2 = () => {
  modal2.classList.replace('d-flex', 'd-none');
};
