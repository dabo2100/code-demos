// let products = [
//   { name: "burger 1", price: 120, cat: "burgers" },
//   { name: "burger 1", price: 120, cat: "burgers" },
//   { name: "Pizza 1", price: 120, cat: "Piazzs" },
//   { name: "Piazzs 2", price: 120, cat: "Piazzs" },
// ];

// let products = {
//   Burgers: [
//     { name: "burger 1", price: 120, img: "pizza1.png" },
//     { name: "burger 2", price: 150, img: "pizza1.png" },
//   ],
//   pizzas: [
//     { name: "Pizza 1", price: 200 },
//     { name: "Piazzs 2", price: 250 },
//   ],
//   Drinks: [
//     { name: "Pizza 1", price: 200 },
//     { name: "Piazzs 2", price: 250 },
//   ],
//   Soups: [
//     { name: "Pizza 1", price: 200 },
//     { name: "Piazzs 2", price: 250 },
//   ],
//   ColdDrinks: [
//     { name: "Pizza 1", price: 200 },
//     { name: "Piazzs 2", price: 250 },
//   ],
// };
// localStorage.setItem("products",JSON.stringify(products));
let products = JSON.parse(localStorage.getItem("products"));