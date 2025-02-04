let header = document.querySelector("header");

let countArr = (arr) => {
  return arr.length;
};

let renderHeader = (...links) => {
  console.log(countArr(links));
  links.forEach((el) => {
    header.innerHTML += `<a>${el}</a>`;
  });
};

export let sayHello = () => {
  console.log("Hello");
};

let sayHi = () => {
  console.log("Hi");
};

export { renderHeader };
