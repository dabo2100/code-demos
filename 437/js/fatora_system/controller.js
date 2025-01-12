let addNewProduct = (productIndex) => {
  let product = products[productIndex];
  let index = fatoraContent.findIndex((el, index) => {
    return el.name == product.name;
  });
  if (index == -1) {
    product.qty = 1;
    fatoraContent.push(product);
  } else {
    fatoraContent[index].qty++;
  }
  showFatora();
};

let incrmentQty = (index) => {
  fatoraContent[index].qty++;
  showFatora();
};

let decrmentQty = (index) => {
  if (fatoraContent[index].qty > 1) {
    fatoraContent[index].qty--;
  } else {
    fatoraContent.splice(index, 1);
  }
  showFatora();
};

let getTotal = () => {
  let total = 0;
  fatoraContent.forEach((el, index) => {
    // total = total + el.price * el.qty;
    total += el.price * el.qty;
  });
  span.innerText = total;
};

let showProducts = () => {
  products.forEach((el, index) => {
    productsDiv.innerHTML += `
              <button onclick="addNewProduct(${index})" class="btn btn-primary">
                  ${el.name} [ ${el.price} $ ]
              </button>
          `;
  });
};

let showFatora = () => {
  table.innerHTML = "";
  fatoraContent.forEach((el, index) => {
    table.innerHTML += `
              <tr>
                  <td>${index + 1}</td>
                  <td>${el.name}</td>
                  <td>${el.price} $</td>
                  <td>
                      <div class="d-flex justify-content-center gap-2 align-items-center">
                          <button onclick="decrmentQty(${index})" class="btn btn-danger">-</button>
                          <span>${el.qty}</span>
                          <button onclick="incrmentQty(${index})"  class="btn btn-success">+</button>
                      </div>
                  </td>
                  <td>${el.qty * el.price} $</td>
              </tr>
          `;
  });
  getTotal();
};
