// system Analysis
// Balance
// Withdraw
// Deposit
// Trasnaction history [ beforeBalance , type , afterBalance , amount , date(time)]

// State ( حالة - قيمة ابتدائية intial Value)
const password = "1234";
let balance = 0;
let transactionsHistory = [];

let showTransactions = () => {
  console.clear();
  console.table(transactionsHistory);
};

let showBalance = () => {
  let pinFormUser = prompt("Please Enter your PIN");
  if (pinFormUser == password) {
    console.clear();
    console.log(`Your Balance is : ${balance}`);
  } else {
    alert("Wrong PIN Code, Please Try again");
  }
};

let depositAmount = () => {
  let amount = +prompt("Enter Amount you want to deposit ");
  let transaction = {
    beforeBalance: balance,
    type: "deposit",
    amount: amount,
    afterBalance: balance + amount,
  };
  transactionsHistory.push(transaction);
  balance += amount;
  showBalance();
};

let withdrawAmount = () => {
  let amount = +prompt("Enter Amount you want to deposit ");
  if (amount <= balance) {
    let transaction = {
      beforeBalance: balance,
      type: "withdraw",
      amount: amount,
      afterBalance: balance - amount,
    };
    transactionsHistory.push(transaction);
    balance -= amount;
    showBalance();
  } else {
    alert("This Amount is so high from balance انت فقير يلا");
  }
};
