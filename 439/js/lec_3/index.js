// let word = "Ahmed Ali Hosam";
// console.log(word.split(" "));

// let arrNos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// function playBUM() {
//   arrNos.forEach(function (el, index) {
//     if (el % 5 == 0) {
//       console.log("BUM");
//     } else {
//       console.log(el);
//     }
//   });
// }
// Problem 1
// let userNo = prompt("Enter The No");
// userNo.split("");
// console.log(userNo[0]);
// console.log(userNo[userNo.length - 1]);

let arryNo = [1, -5, -3, 4, 2, -10, 150];

let negtiveNos = [];
let postiveeNos = [];
let oddNos = [];
let evenNos = [];

arryNo.forEach(function (el, index) {
  if (el < 0) {
    negtiveNos.push(el);
  } else {
    postiveeNos.push(el);
  }

  if (el % 2 == 0) {
    evenNos.push(el);
  } else {
    oddNos.push(el);
  }
});
console.log(negtiveNos, postiveeNos, oddNos, evenNos);
