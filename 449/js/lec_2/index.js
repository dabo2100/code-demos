// let isYear = confirm("هل مر عام علي المدخرات ؟");

// if (isYear == true) {
//   let goldPrice = +prompt("ما هو سعر جرام الذهب اليوم ؟");
//   let goldValue = 85 * goldPrice;
//   let savings = +prompt("ما هي قيمة مدخراتك");

//   if (savings >= goldValue) {
//     let zaka = (2.5 / 100) * savings;
//     console.log("قيمة الزكاة هي : " + zaka);
//   } else {
//     console.log("ربنا يوفقك انت محتاج زكاة");
//   }
// } else {
//   console.log("لم يمر عام علي الأدخار فليس عليك زكاة");
// }

// let q1 = confirm("هل الامر امرك ؟");

// if(q1 == true){
//     let q2 = confirm("هل في شئ في يديك ؟");
//     if(q2 == true){
//         console.log('هقدر اشتريلك جزيرة ويخت فضي')
//     }else{
//         console.log('انت فقير يلا')
//     }
// }else{
//     console.log("روح اهتم بأمورك انت فقير يلا")
// }

// let q1 = confirm("هل انت بتهتم ؟");

// if (q1 == true) {
//   let q2 = confirm("هل انت عندك دم ؟");
//   if (q2 == true) {
//     let q3 = confirm("هل انت بتحس ياعم ؟");
//     if (q3 == true) {
//       console.log("مصلحااااك");
//     } else {
//       console.log("مخصماااك");
//     }
//   } else {
//     console.log("مخصمااااك");
//   }
// } else {
//   console.log("مخصمااااك");
// }
// let age = 14;
// if (age >= 12) console.log("اتفضل خش السيستم");
// // short if (ternary Operator)
// age >= 12 ? console.log("Welcome") : console.log("Go Out");

// if , else if

// القاهرة = 5 %
// الاسكندرية = 10 %
// الصعيد = 15 %

// let city = prompt("Enter your city ");

// if (city == "cairo") {
//   console.log("Discount 5 %");
// } else if (city == "alex") {
//   console.log("Discount 10 %");
// } else if (city == "aswan") {
//   console.log("Discount 15 %");
// } else {
//   console.log("Discount 3 %");
// }

// Logical Operators and , or
// for ranges

// ahmed , 123456

// let name = prompt("Enter your name");
// let pass = prompt("Enter your password");

// if (name != "ahmed" || pass != "123456") {
//     console.log("Wrong name or password");
// } else {
//     console.log("Welcome Success Login");
// }

// let age = +prompt("Please Enter your age");

// if (age >= 7 && age < 18) {
//   console.log("انت طالب مدرسة وليك خصم");
// } else {
//   console.log("ان السن غير مناسب");
// }

// let fromNaserCity = false;
// let age = 10;

// if(fromNaserCity == true || age > 18){
//     console.log('Accepted')
// }else{
//     console.log('Refused')
// }
// دخل الدرجة 60
// تحت الخمسين هيكون ساقط يا فاشل
// 50 < 65  => مقبول
// 65 < 75  => جيد
// 75 < 85 => جيد جداً
// 85 <= 100 => امتياااز

// ما هي قيمة الميراث
// هل فيه الزوجة حية ؟
// كم عدد الأولاد
// كم عدد البنات

// let merathValue = +prompt("ادخل قيمة الميراث");
// let hasWife = confirm("هل الزوجة عايشة ؟");
// let maleNo = +prompt("ادخل عدد الأولاد");
// let femaleNo = +prompt("ادخل عدد البنات ؟");

// if (hasWife) {
//   let wifeValue = (1 / 8) * merathValue;
//   console.log("قيمة ميراث الزوجة هو : " + wifeValue);
//   merathValue = merathValue - wifeValue;
// }

// let shareNo = maleNo * 2 + femaleNo * 1;
// let shareValue = merathValue / shareNo;

// maleNo != 0 && console.log("قيمة ميراث الولد : " + 2 * shareValue);
// femaleNo != 0 && console.log("قيمة ميراث البنت : " + 1 * shareValue);

// interpolation (ES6)

let userName = "Ahmed";
let year = 2013;
let country = "Egypt";
let isSub = false;


console.log(`
    User Name is : ${userName} 
    User Age is : ${2025 - year}  
    Country is : ${country} 
    is Sub : ${isSub ? "Yes" : "No"}
`);
