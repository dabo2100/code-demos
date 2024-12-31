
// Client Side [UI] ( Designer - Delveloper )
// Menu [Requests ==> Kitchen]
// Waiter [ API Application Progrraming Interface] Model MVC  Control => View 
// Backend 

// Weather [200 Country] => 1 $ => 200 $ ====>> DATAAAAAAA
// DATA => UI => User Interface

let mail = "a_fattah_m@icloud.com";
let pass = "Admin@123";

let emailInput = document.querySelector("#emailInput");
let passInput = document.querySelector("#passInput");
let emailError = document.querySelector("#emailErrorSpan");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,24}$/;

let login = (event) => {
  event.preventDefault();
  let email = emailInput.value;
  let password = passInput.value;
  let passwordTest = passwordRegex.test(password);
  let emailTest = emailRegex.test(email);
  if (emailTest == false) {
    emailError.classList.replace("d-none", "d-flex");
  }
  if (emailTest && passwordTest) {
    if (email == mail && password == pass) {
      Swal.fire({
        icon: "success",
        text: "Login success",
        timer: 1500,
        showConfirmButton: true,
      });
      window.location.href = "./home.html";
    } else {
      Swal.fire({
        icon: "error",
        text: "Wrong email or password",
        timer: 1500,
        showConfirmButton: true,
      });
    }
  }
  //   if (passwordTest == false) {
  //     Swal.fire({
  //       icon: "error",
  //       text: "Password is Invalid ",
  //       timer: 1500,
  //     });
  //   }
};

// Navigation []
