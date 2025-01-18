// MVC Design Pattern
// Model ( Data ) - View(HTML Code) -Controller ( JS Code - Fetch / Check Validate)
// Form HTML => HTML Validation
// Validate - Sumbit
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let rememberInput = document.querySelector("#rem");

let handleSubmit = () => {
  let isChecked = rememberInput.checked;
  let userIndex = listOfUsers.findIndex((el, index) => {
    return (
      el.email.toLowerCase().trim() == emailInput.value.toLowerCase() &&
      el.password == passwordInput.value
    );
  });
  if (userIndex == -1) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Wrong User Email or Password",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Login Success",
    }).then(() => {
      window.location.href = "./profile.html";
    });
  }
};

let moveToRegister = () => {
  window.location.href = "./register.html";
};
