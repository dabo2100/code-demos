let convertValue = () => {
  let input = document.querySelector("input");
  let p = document.querySelector("p");
  let valInCm = input.value;
  let final = valInCm / 100;
  p.innerText = final;
};
