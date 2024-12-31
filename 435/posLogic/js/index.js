let cats = Object.keys(products);
let activeDiv = document.querySelector("#activeContent");
let table = document.querySelector("table tbody");
let totalSpan = document.querySelector("#total");
let modal = document.querySelector("#Modal");
let modalIndex = false;

let renderCats = () => {
  activeDiv.innerHTML = "";
  cats.forEach((el, index) => {
    activeDiv.innerHTML += `
        <button class="btn btn-danger p-4" onclick="renderProducts('${el}')">${el}</button>
    `;
  });
};

let renderProducts = (catName) => {
  activeDiv.innerHTML = "";
  products[catName].forEach((el, index) => {
    activeDiv.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${el.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
                <p class="card-text">${el.price} EGP</p>
                <a href="#" class="btn btn-primary" onclick="addProduct('${catName}',${index})">Add To Cart</a>
            </div>
        </div>
    `;
  });
};

renderCats();

let renderFatora = () => {
  table.innerHTML = "";
  fatoraArr.forEach((el, index) => {
    table.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${el.name}</td>
          <td>
            <div class="col-12 d-flex gap-2">
              <button class="btn btn-danger" onclick="decrmentQty(${index})">-</button>
              <span>${el.qty}</span>
              <button class="btn btn-success" onclick="incrmentQty(${index})">+</button>
            </div>
          </td>
          <td>${el.price}</td>
          <td>${el.price * el.qty}</td>
        </tr>
    `;
  });
  getTotal();
};

let getTotal = () => {
  let total = fatoraArr.reduce((acc, el) => {
    let final = el.price * el.qty;
    return acc + final;
  }, 0);
  totalSpan.innerHTML = total;
};
renderFatora();

let addProduct = (catName, index) => {
  let obj = { ...products[catName][index], qty: 1 };
  let i = fatoraArr.findIndex((el) => el.name == obj.name);
  if (i == -1) {
    fatoraArr.push(obj);
  } else {
    fatoraArr[i].qty++;
  }
  renderFatora();
};

let incrmentQty = (index) => {
  fatoraArr[index].qty++;
  renderFatora();
};
let decrmentQty = (index) => {
  if (fatoraArr[index].qty > 1) {
    fatoraArr[index].qty--;
  } else {
    fatoraArr.splice(index, 1);
  }
  renderFatora();
};

let toggelModal = () => {
  if (modalIndex == false) {
    modal.style.display = "flex";
    modalIndex = true;
  } else {
    modal.style.display = "none";
    modalIndex = false;
  }
};
