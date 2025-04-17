// // inputs / outputs / keyFactors
// // Inputs
// let merathValue = +prompt("من فضلك ادخل قيمة الميراث"); // 1000
// let hasWife = confirm("هل توجد زوجة حية ؟");
// let maleNo = +prompt("ما هو عدد الأولاد الذكور ؟");
// let femaleNo = +prompt("ما هو عدد الأولاد الأناث ؟");
// // Outputs
// let wifeValue = 0;
// let maleValue = 0;
// let femaleValue = 0;

// if (hasWife == true) {
//   wifeValue = (1 / 8) * merathValue; //125
//   merathValue = merathValue - wifeValue; // 1000 - 125
// }

// let sahmNo = 2 * maleNo + femaleNo;

// let sahmValue = merathValue / sahmNo;

// maleValue = sahmValue * 2;
// femaleValue = sahmValue * 1;

// console.log("نصيب الزوجة هو " + wifeValue);
// console.log("نصيب الولد هو : " + maleValue);
// console.log("نصيب الأنثي هو : " + femaleValue);

// input
// degree +prompt()
// output  ( +100 , -0)
// 50 => 64.999999999 مقبول
// 65 => 74.999999999 جيد
// 75 => 84.999999999 جيد جداً
// 85 => 100 امتياز
// and or , else if , switch

// let degree = +prompt("Enter Your Degree ");
// if (degree >= 50) {
//   if (degree > 100) {
//     alert(" رقم غير صحيح ");
//   } else {
//     if (degree < 65) {
//       alert("مقبول");
//     } else {
//       if (degree < 75) {
//         alert("جيد");
//       } else {
//         if (degree < 85) {
//           alert("جيد جداً");
//         } else {
//           alert("امتياز");
//         }
//       }
//     }
//   }
// } else {
//   if (degree < 0) {
//     alert(" رقم غير صحيح ");
//   } else {
//     alert(" يا ساقط يا فاشل");
//   }
// }

// inputs // Fatora Value  // 1000
// is there discount => discount value %?
// is there Vat ?
// is this a company ? VAT => 13 % , 14 %

// output
// سعر الفاتورة
// قيمة الخصم
// السعر بعد الخصم
// قيمة الضريبة
// السعر بعد الضريبة
// الأصلي - الخصم + الضريبة

let fatoraOrginal = +prompt("ادخل قيمة الفاتورة ");
let hasDiscount = confirm("هل يوجد خصم علي الفاتورة ؟");
let discountPercentage = 0;

if (hasDiscount == true) {
  discountPercentage = +prompt("ادخل قيمة الخصم بالنسبة المئوية ؟") / 100;
}

let hasVat = confirm("هل هذه الفاتورة لها ضريبة قيمة مضافة ؟");
let vatPercentage = 0;

let discountValue = discountPercentage * fatoraOrginal;
let fatoraAfterDiscount = fatoraOrginal - discountValue;

if (hasVat == true) {
  let isCompany = confirm("هل الفاتورة لشركة ؟");
  if (isCompany == true) {
    vatPercentage = 13 / 100;
  } else {
    vatPercentage = 14 / 100;
  }
}

let vatValue = fatoraAfterDiscount * vatPercentage;
let finalPrice = fatoraAfterDiscount + vatValue;

console.log("سعر الفاتورة الأصلي هو : " + fatoraOrginal);
console.log("قيمة الخصم هو : " + discountValue);
console.log("السعر بعد الخصم : " + fatoraAfterDiscount);
console.log("قيمة الضريبة : " + vatValue);
console.log("السعر النهائي : " + finalPrice);
