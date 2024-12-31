let getNagtiveeNos = (arr) => {
  let final = [];
  arr.forEach((el, index) => {
    if (el < 0) {
      final.push(el);
    }
  });
  return final;
};

let getPostiveNos = (arr) => {
  let final = [];
  arr.forEach((el, index) => {
    if (el > 0) {
      final.push(el);
    }
  });
  return final;
};

let takeValueFromUser = () => {
  return +prompt("Enter your Bill Value");
};
//
let get10PerectFromValue = (val) => {
  return val - (10 / 100) * val;
};
