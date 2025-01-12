// let gradeP = document.querySelector("p");
// let degreeInput = document.querySelector("input");
// let calcGrader = () => {
//   let degree = +degreeInput.value;
//   let grade = "";
//   //   if (degree > 0) {
//   //     if (degree >= 50) {
//   //       if (degree >= 65) {
//   //         if (degree >= 75) {
//   //           if (degree >= 85) {
//   //             if (degree <= 100) {
//   //               grade = "امتياز";
//   //             } else {
//   //               grade = "Invalid Number";
//   //             }
//   //           } else {
//   //             grade = "جيد جداً";
//   //           }
//   //         } else {
//   //           grade = "جيد";
//   //         }
//   //       } else {
//   //         grade = "مقبول";
//   //       }
//   //     } else {
//   //       grade = "Failed";
//   //     }
//   //   } else {
//   //     grade = "Invalid Number";
//   //   }
//   if (degree >= 0 && degree < 50) {
//     grade = "يا ساقط يا فاشل";
//   } else if (degree >= 50 && degree < 65) {
//     grade = "مقبول";
//   } else if (degree >= 65 && degree < 75) {
//     grade = "جيد";
//   } else if (degree >= 75 && degree < 85) {
//     grade = "جيد جداً";
//   } else if (degree >= 85 && degree <= 100) {
//     grade = "امتياز";
//   } else {
//     grade = "رقم غير صحيح";
//   }
//   gradeP.innerText = grade;
// };

// let users = ["Ahmed", "Ali", "Hossam"];
// // index
// // users[1];
// // users.pop();
// // users.splice(2, 1);

// // forEach
// // index
// // push / splice
// users.forEach((el, index) => {
//   console.log(el);
// });

// let myKey = "country";

// let userInfo = {
//   name: "Ahmed",
//   age: 20,
//   country: "Egypt",
//   "is-sub": true,
// };

// // key
// // dot , pracit notation
// userInfo.age = 50;
// delete userInfo.country;
// userInfo["is-sub"] = false;
// userInfo[myKey] = "Italy";

console.log(products);

let productsDiv = document.querySelector("#productContainer");

let showProducts = () => {
  products.forEach((el, index) => {
    productsDiv.innerHTML += `
        <div class="card" style="width: 18rem">
        <img src="${el.image}" style="width : 100% ; height : 18rem; object-fit:contain" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${el.title}</h5>
          <p class="card-text">
            price : ${el.price} $
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
  });
};

showProducts();
// Table Fatora System 