// let userLang = "en";
// let ul = document.querySelector("ul");
// let links = [
//   { ar: "الرئيسية", en: "Home" },
//   { ar: "الرئيسية", en: "Home" },
//   { ar: "الرئيسية", en: "Home" },
//   { ar: "الرئيسية", en: "Home" },
//   { ar: "الرئيسية", en: "Home" },
// ];
// links.forEach((el, index) => {
//   ul.innerHTML += `
//   <li class="list-unstyled" style="">
//     ${el[userLang]}
//   </li>
//   `;
// });
// // innerText
// // innerHTML
// // +=
// // style
// let h1 = document.querySelector("h1");
// let sideMenu = document.querySelector(".sideMenu");
// // h1.style.color = "green";
// // h1.style.backgroundColor = "blue";
// // h1.style.padding = "2rem";
// let menuIndex = false;

// let toggleMenu = () => {
//   if (menuIndex == false) {
//     sideMenu.style.display = "block";
//     menuIndex = true;
//   } else {
//     sideMenu.style.display = "none";
//     menuIndex = false;
//   }
// };

// let dropDownIndex = false;
// let toggleMenuUp = () => {
//   let menu = document.querySelector(".dropDown");
//   if (dropDownIndex == false) {
//     dropDownIndex = true;
//     menu.style.height = "500px";
//   } else {
//     dropDownIndex = false;
//     menu.style.height = "0";
//   }
// };

let div = document.querySelector("div");
let toggleColor = () => {
  let x = div.classList;
  // div.classList.remove("bg-danger");
  // div.classList.replace("bg-danger", "bg-dark");
  // div.classList.replace("text-dark", "text-white");
  div.classList.toggle("bg-dark");
  div.classList.toggle("text-white");
  console.log(x);
};

let changeSrc = () => {
  let img = document.querySelector("img");
  let x = img.getAttribute("src");
  img.src = "./2.png";
  console.log(img.src);
  console.log(x);
  // console.log(img.myAttr);
};

let openEdit = () => {
  let input = document.querySelector("input");
  let btn = event.target;
  if (input.disabled == true) {
    input.disabled = false;
    btn.innerText = "Save";
  } else {
    input.disabled = true;
    btn.innerText = "Edit";
  }
};
