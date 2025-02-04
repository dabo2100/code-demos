let isDark = false;
let menuIndex = false;
let accIndex = false;
let userLang = "ar";

let h1 = document.querySelector("h1");
let sideMenu = document.querySelector(".overLay");
let acc = document.querySelector(".acc");

let changeStyles = () => {
  let x = h1.classList;
  console.log(x);
  if (isDark == false) {
    h1.classList.replace("bg-white", "bg-dark");
    h1.classList.replace("text-dark", "text-white");

    // h1.style.color = "white";
    // h1.style.backgroundColor = "black";
    // h1.style.fontSize = "2rem";
    isDark = true;
  } else {
    h1.classList.replace("bg-dark", "bg-white");
    h1.classList.replace("text-white", "text-dark");

    // h1.style.color = "black";
    // h1.style.backgroundColor = "white";
    // h1.style.fontSize = "2rem";
    isDark = false;
  }
};

let toggleMenu = () => {
  if (menuIndex == false) {
    menuIndex = true;
    sideMenu.style.display = "flex";
  } else {
    menuIndex = false;
    sideMenu.style.display = "none";
  }
};

let toggleAcc = () => {
  if (accIndex == false) {
    accIndex = true;
    acc.style.height = "200px";
  } else {
    accIndex = false;
    acc.style.height = "0";
  }
};
let loaderIndex = true;
let myLoader = document.querySelector(".myLoader");

setTimeout(() => {
  myLoader.style.display = "none";
}, 400);

let input = document.querySelector("input");
let showCheckValue = () => {
  let c = input.checked;
  console.log(c);
};
// let openEdit = () => {
//   input.disabled = false;
// };

// console.log(input.getAttribute("myattr"))
// console.log(input.setAttribute("myattr","Hadamd From js"))
// console.log(input.myattr);
