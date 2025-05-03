// Data Collection From inputs
const fatoraValueInput = document.querySelector("input");
const resultsP = document.querySelector("p");
let orginalPrice = 0;
let priceAfterDiscount = 0;
let priceAfterVat = 0;

const calc10Discount = () => {
  orginalPrice = +fatoraValueInput.value;
  if (priceAfterVat != 0) {
    orginalPrice = priceAfterVat;
  }
  let discount = (10 / 100) * orginalPrice;
  priceAfterDiscount = orginalPrice - discount;
  resultsP.innerText = `
    Price Before Discount : ${orginalPrice}
    Price After 10% Discount : ${priceAfterDiscount}
  `;
};

const addVat = () => {
  orginalPrice = +fatoraValueInput.value;

  if (priceAfterDiscount != 0) {
    orginalPrice = priceAfterDiscount;
  }

  let vat = (14 / 100) * orginalPrice;
  priceAfterVat = orginalPrice + vat;

  resultsP.innerText = `
    Price Before VAT : ${orginalPrice}
    Price After 14% VAT: ${priceAfterVat}
`;
};
