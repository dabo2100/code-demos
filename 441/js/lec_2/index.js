// // 20 % => price
// let productPrice = +prompt("Enter Product Price");
// let percentage = Number(prompt("Enter discount Percentage"));
// let discount = (percentage / 100) * productPrice;
// let finalPrice = productPrice + discount;
// document.write(
//   "السعر الأصلي هو : " + productPrice + " السعر بعد الخصم هو : " + finalPrice
// );
// Comparsion Operators
// > < >=  <= == != === !==
//

// let goldValue = 85 * 3000;
// let userBrithYear = +prompt("Enter Brith Year");
// let userAge = 2025 - userBrithYear;
// if (userAge >= 18) {
//   let isEgypt = prompt("Are you Egyptian ?");
//   if (isEgypt == "yes") {
//     document.write("مبروك انت في الخدمة ");
//   } else {
//     document.write(
//       "للأسف لن تحصل علي شرف الخدمة العسكرية ولكن يا بختك انت مش مصري"
//     );
//   }
// } else {
//   document.write("لأنك لم تبلغ 18 عام");
// }

// let savings = +prompt("ادخل قيمة المدخرات ");
// let goldValue = 85 * 3000;
// if (savings >= goldValue) {
//   let q2 = prompt("هل مر عام كامل علي الأدخار ؟");
//   if (q2 == "yes") {
//     let zakaValue = (2.5 / 100) * savings;
//     document.write("قيمة الزكاة هي : " + zakaValue);
//   } else {
//     document.write("ليس عليك زكاة لان الادخار لم يبلغ عام");
//   }
// } else {
//   document.write("ليس عليك زكاة لأنك فقير انت اللي محتاج زكاة");
// }

// let q1 = confirm("هل الأمر امرك ؟");
// if (q1 == true) {
//   let q2 = confirm("هل في شئ في يدك ؟");
//   if (q2 == true) {
//     document.write("اشتري جزيرة ويخت فضي");
//   } else {
//     document.write("يلا ياد يا فقير من هنا");
//   }
// } else {
//   document.write("يلا ياللي امر مش امرك");
// }
// let userDegree = +prompt("Enter your degree");
// if (userDegree >= 50) {
//   if (userDegree <= 100) {
//     document.write("مبروووك");
//   } else {
//     document.write("رقم غير صحيح");
//   }
// } else {
//   if (userDegree > 0) {
//     document.write("يا ساقط يا فاشل");
//   } else {
//     document.write("رقم غير صحيح");
//   }
// }

// cairo ====> 0%
// alex  ====> 10%
// Aswan ====> 20%
// any city ===> 15%

// let userCity = prompt("Enter your city name");
// if (userCity == "cairo") {
//   document.write("ليس لك خصم");
// } else if (userCity == "alex") {
//   document.write("لقد حصلت علي خصم 10 %");
// } else if (userCity == "aswan") {
//   document.write("لقد حصلت علي خصم 20 %");
// } else {
//   document.write("لقد حصلت علي خصم 15 %");
// }

// if (userCity == "cairo") {
//   document.write("لقد حصلت علي خصم 10 %");
// }

// if (userCity == "alex") {
//   document.write("لقد حصلت علي خصم 15 %");
// }

// Logical Operators And OR
// &&   ||

// let userNameDB = "ali";
// let passwordDB = "123456";

// let userName = prompt("Enter user name");
// let pass = prompt("Enter you password");
// if (userName != userNameDB || pass != passwordDB) {
//   document.write("Wrong User name or password");
// } else {
//   document.write("Login Success");
// }

let userDegree = +prompt("Enter your degree");

if (userDegree < 50 && userDegree > 0) {
  document.write("يا ساقط يا فاشل");
} else if (userDegree >= 50 && userDegree < 65) {
  document.write("مقبول");
} else if (userDegree >= 65 && userDegree < 75) {
  document.write("جيد");
} else if (userDegree >= 75 && userDegree < 85) {
  document.write("جيد جداً");
} else if (userDegree >= 85 && userDegree <= 100) {
  document.write("امتياز");
} else {
  document.write("رقم غير صحيح");
}


// 1000
// 125
// 875 ( 2*2 + 2)
// 875 /3 
// 2 * sahm
// sahm