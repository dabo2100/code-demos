let renderProducts = () => {
  containerDiv.innerHTML = "";
  products.forEach((el, index) => {
    containerDiv.innerHTML += `
          <button class="btn btn-primary" onclick="addProductToFatora(${index})">
            ${el.name} [${el.price} $]
          </button>`;
  });
};
let renderFatoraContent = () => {
  tbody.innerHTML = "";
  fatoraContent.forEach((el, index) => {
    tbody.innerHTML += `
              <tr>
                  <td>${index + 1}</td>
                  <td>${el.name}</td>
                  <td>${el.price}</td>
                  <td><button onclick="decrementQty(${index})" class="btn btn-danger">-</button> ${
      el.qty
    } <button onclick="incrementQty(${index})" class="btn btn-success">+</button> </td>
                  <td>${el.qty * el.price}</td>
                  <td>
                      <button onclick="removeProduct(${index})">Remove</button>
                  </td>
              </tr>
          `;
  });
  localStorage.setItem("fatoraContent", JSON.stringify(fatoraContent));
  getTotal();
};
let addProductToFatora = (index) => {
  let product = products[index];
  let x = fatoraContent.findIndex((el, index) => {
    return el.name == product.name;
  });
  console.log(x);
  if (x == -1) {
    product.qty = 1;
    fatoraContent.push(product);
  } else {
    fatoraContent[x].qty++;
  }

  renderProducts();
  renderFatoraContent();
};
let incrementQty = (index) => {
  let product = fatoraContent[index];
  product.qty++;
  renderFatoraContent();
  // console.log(product);
};
let decrementQty = (index) => {
  let product = fatoraContent[index];
  if (product.qty > 1) {
    product.qty--;
  } else {
    removeProduct(index);
  }
  renderFatoraContent();
};
let removeProduct = (index) => {
  fatoraContent.splice(index, 1);
  products[index].isActive = true;
  renderProducts();
  renderFatoraContent();
};
let getTotal = () => {
  let total = 0;
  fatoraContent.forEach((el, index) => {
    total = total + el.qty * el.price;
  });
  span.innerText = total;
  //   return
};
