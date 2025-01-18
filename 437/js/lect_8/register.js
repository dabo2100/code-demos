let userNameInput = document.querySelector("#username");
let userEmailInput = document.querySelector("#email");
let userPassInput = document.querySelector("#password");
let userPassConfirmInput = document.querySelector("#confirm");

let handleSubmit = () => {
  let username = userNameInput.value;
  let email = userEmailInput.value;
  let password = userPassInput.value;
  let passwordConfrim = userPassConfirmInput.value;

  let phonePattern = /^\+201[0125]\d{8}$/;
  let phoneCheck = phonePattern.test(username);

  let emainPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailCheck = emainPattern.test(email);

  let passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;
  let passwordCheck = passwordPattern.test(password);
  if (passwordCheck) {
    alert("PAssword is True");
  } else {
    alert("PAssword is Wrong");
  }

//   if (emailCheck == true) {
//     alert("Email is Correct");
//   } else {
//     alert("Invaild Email");
//   }

//   if (phoneCheck == true) {
//     alert("PHone is correct");
//   } else {
//     alert("PHone is Wrong Not Egyptian");
//   }

  //   if (!username || username.trim() != "") {
  //     alert("Please Enter user name");
  //   }

  //   if (!email || email.trim() != "") {
  //     alert("Please Enter user email");
  //   }

  //   if (!password || password.trim() != "") {
  //     alert("Please Enter user password");
  //   }

  //   if (!passwordConfrim || passwordConfrim.trim() != "") {
  //     alert("Please Enter user password");
  //   }
};
// (+2)- 01 - [0-1-2-5] - 013232254
// 2 / 3 [555555]2157744
