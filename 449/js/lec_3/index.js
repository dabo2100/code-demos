function calcDiscount(price, discount) {
  // Deal With Nos
  let discountValue = (discount / 100) * price;
  let final = price - discountValue;
  console.log(final);
}

function startDiscount() {
  // Deal With User
  let fatora = +prompt("Enter Faora Price"); // 1000
  let disPercentage = +prompt("Enter Percentage"); // 10
  calcDiscount(fatora, disPercentage);
}
