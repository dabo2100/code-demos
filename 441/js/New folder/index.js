let userBalance = 0;
let amountInput = document.querySelector("input");
let table = document.querySelector("table tbody");
let transactions = [];

let showBalance = () => {
  let span = document.querySelector("#userBalance");
  span.innerText = userBalance;
};

let depositBalance = () => {
  let amount = +amountInput.value;
  let transaction = {
    balanceBefore: userBalance,
    transactionAmount: amount,
    transactionType: "deposit",
    balanceAfter: userBalance + amount,
  };
  transactions.push(transaction);
  userBalance = userBalance + amount;
  showTransactions();
  showBalance();
};

let withdrawBalance = () => {
  let amount = +amountInput.value;
  if (userBalance >= amount) {
    let transaction = {
      balanceBefore: userBalance,
      transactionAmount: amount,
      transactionType: "withdraw",
      balanceAfter: userBalance - amount,
    };
    transactions.push(transaction);
    userBalance = userBalance - amount;
  } else {
    alert("Not Suffient Fund");
  }
  showTransactions();
  showBalance();
};

showBalance();

let showTransactions = () => {
  table.innerHTML = "";
  transactions.forEach((el, index) => {
    table.innerHTML += `
        <tr>
          <th>${index + 1}</th>
          <th>${el.balanceBefore}</th>
          <th>${el.transactionAmount}</th>
          <th><span class="${
            el.transactionType == "deposit" ? "bg-success" : "bg-danger"
          } p-1 rounded">${el.transactionType}</span></th>
          <th>${el.balanceAfter}</th>
        </tr>
    `;
  });
  amountInput.value = "";
};
