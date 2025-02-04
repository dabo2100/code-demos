let balanceSpan = document.querySelector("span");
let amountInput = document.querySelector("input");
let table = document.querySelector("table tbody");
let balance = +localStorage.getItem("balance");
let transactions = JSON.parse(localStorage.getItem("transactions") || '[]');

let showBalance = () => {
  balanceSpan.innerText = balance;
  showTrasactions();
};

let deposit = () => {
  let amount = +amountInput.value;
  let obj = {
    beforeBalance: balance,
    amount: amount,
    trasactionType: "deposit",
    afterBalance: balance + amount,
  };
  transactions.push(obj);
  balance += amount;
  localStorage.setItem("balance", balance);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  showBalance();
};

let widthdraw = () => {
  let amount = +amountInput.value;

  let obj = {
    beforeBalance: balance,
    amount: amount,
    trasactionType: "withdraw",
    afterBalance: balance - amount,
  };
  transactions.push(obj);
  balance -= amount;
  localStorage.setItem("balance", balance);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  showBalance();
};

let showTrasactions = () => {
  table.innerHTML = "";
  transactions.forEach((el, index) => {
    table.innerHTML += `
            <tr>
            <th>${index + 1}</th>
            <th>${el.beforeBalance}</th>
            <th>${el.amount}</th>
            <th><span>${el.trasactionType}</span></th>
            <th>${el.afterBalance}</th>
            </tr>
        `;
  });
};

showBalance();
showTrasactions();
