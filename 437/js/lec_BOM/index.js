window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  if (window.scrollY >= 500) {
    header.style.display = "flex";
    header.style.backgroundColor = "green";
  } else {
    header.style.backgroundColor = "red";
  }
});

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let x = document.querySelector("body").offsetHeight;
  window.scrollTo(0, x);
});

let input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
  let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

  let key = event.key;

  if (arr.indexOf(key) == -1) {
    event.preventDefault();
  }
  console.log("Key Pressed");
});


// localStorage.setItem("fromJs","554656");
// localStorage.setItem("mood","dark")
let val = localStorage.getItem("mood");
document.querySelector("h1").innerHTML = val;
// localStorage.clear();

// Events 
// storage
// Token 

// 231
// bca
// 147 258 369
// a 1 2 3
// b 4 5 6 
// c 7 8 9