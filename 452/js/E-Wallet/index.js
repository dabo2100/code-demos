// Show Balance
let balance = 2000;
const passwordDB = '1234';
let balanceIndex = false;
let balanceSpan = document.querySelector('#balanceSpan');
let icon = document.querySelector('#showIcon');
let amountInput = document.querySelector('#amountInput');
let table = document.querySelector('table tbody');
let modal = document.querySelector('.myModal');
let balancePassword = document.querySelector('#balancePassword');

let transactions = [];

let openModal = () => {
  modal.style.display = 'flex';
};

let closeModal = () => {
  modal.style.display = 'none';
};

let showBalance = () => {
  let password = balancePassword.value;
  if (password == passwordDB) {
    balanceSpan.innerText = balance;
    balanceIndex = true;
    icon.classList.replace('fa-eye', 'fa-eye-slash');
    closeModal();
  } else {
    alert('Wrong Password');
  }
};

let depositAmount = () => {
  let amount = +amountInput.value;
  let obj = { beforeBalance: balance, amount: amount, type: 'Deposit', afterBalance: balance + amount };
  transactions.push(obj);
  showTransactions();
  balance = balance + amount;
  balanceSpan.innerText = balance;
  amountInput.value = '';
};

let withdrawAmount = () => {
  let amount = +amountInput.value;
  if (amount <= balance) {
    let obj = { beforeBalance: balance, amount: amount, type: 'Withdraw', afterBalance: balance - amount };
    transactions.push(obj);
    showTransactions();
    balance = balance - amount;
    balanceSpan.innerText = balance;
    amountInput.value = '';
  } else {
    alert('Insuffient Fund');
  }
};

let showTransactions = () => {
  // cleeeeeaaaar
  table.innerHTML = '';
  transactions.forEach((el, index) => {
    table.innerHTML += `
        <tr>
            <th>${index + 1}</th>
            <th>${el.beforeBalance} EGP</th>
            <th>${el.amount} EGP</th>
            <th>${el.type}</th>
            <th>${el.afterBalance} EGP</th>
        </tr>
        `;
  });
};
