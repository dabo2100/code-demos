let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let login = (event) => {
  event.preventDefault();
  let email = emailInput.value;
  let pass = passwordInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
  let emailTest = emailRegex.test(email);
  let passwordTest = passwordRegex.test(pass);
  if (passwordTest == true && emailTest == true) {
    let userIndex = users.findIndex(
      (el) => el.email == email && el.password == pass
    );
    if (userIndex == -1) {
      alert("Wrong username or password");
    } else {
      window.location.href = "./index.html";
    }
    // alert("Invalid Password");
  } else {
    alert("Invalid Data ");
  }
};

// Pattern
// 7aga @ 7aga . 7aga
// ahmed @ icloud.com
// ali@email.net
// Regular Expression
// +201(11)
