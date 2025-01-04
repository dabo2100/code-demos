// let userYear = +prompt("Enter Brith Year");
// let age = 2025 - userYear;

// if (age > 12) {
//   let isEgypt = prompt("Are you Egyptian ?");
//   if (isEgypt == "yes") {
//     let isMale = prompt("Are you male ?");
//     if (isMale == "yes") {
//       console.log("مرحباً بك في القوات المسلحة");
//     } else {
//       console.log("للأسف لن تخدمين في الجيش المصري");
//     }
//   } else {
//     console.log("يا بختك انت لسة مصرياً ");
//   }
// } else {
//   console.log("Go Out");
// }

// let degree = +prompt("Enter your degree"); //
// if (degree >= 50) {
//   if (degree > 100) {
//     document.write("هذا الرقم غير صحيح");
//   } else {
//     document.write("مبروووك انت ناجح");
//   }
// } else {
//   if (degree > 0) {
//     document.write("يا ساقط يا فاشل");
//   } else {
//     document.write("غير صحيح");
//   }
// }

// let savings = +prompt("ما هو مبلغ المدخرات ؟");
// let goldValue = 85 * 3500;
// if (savings >= goldValue) {
//   let yearIndex = prompt("هل مر عام كامل علي المدخرات ؟");
//   if (yearIndex == "yes") {
//     let zakaValue = savings * 2.5/100;
//     document.write("مبلغ الزكاة المطلوب هو " + zakaValue);
//   } else {
//     document.write("لم يبلغ المبلغ حد السنة لذلك ليس عليك زكاة");
//   }
// } else {
//   document.write(" المبلغ غير كافي لأداء الزكاة --- انت فقير ومحتاج زكاة");
// }

let q1 = prompt("هل انت بتهتم ؟");
if (q1 == "yes") {
  let q2 = prompt("هل انت عندك دم ؟");
  if (q2 == "yes") {
    let q3 = prompt("هل انت بتحس ياعم ؟");
    if (q3 == "yes") {
      document.write("مصلحااااااااااك");
    } else {
      document.write("مخصماااااااااااك");
    }
  } else {
    document.write("مخصماااااااااااك");
  }
} else {
  document.write("مخصماااااااااااك");
}
