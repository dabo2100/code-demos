let bigArr = [
  [1, 2, 3, 4],
  [45, 73, 12],
  [13, 13, 10],
];
getMax(bigArr)
function getMax(arr) {
  let final = [];
  arr.forEach((newArr) => {
    final.push(Math.max(...newArr));
  });
  console.log(final);
}
