// Logical Operators
// Arthmatic
// Comparosion
let x = 10;
console.log(-x);
let mode = confirm("Do You Prefer Dark Mode");

!mode
  ? document.write("I will open Light Mode")
  : document.write("I will open dark mode");

// if (!mode) {
//   document.write("I will open dark mode");
// } else {
//   document.write("I will open Light Mode");
// }

// let userCountry = prompt("Enter you Country");
// switch (userCountry) {
//   case "Cairo":
//     document.write("خصم القاهرة");
//     break;
//   case "Alex":
//     document.write("خصم الأسكندرية");
//     break;
//   case "Aswan":
//     document.write("خصم اسوان");
//     break;
//   default:
//     document.write(" لن تحصل علي خصم");
//     break;
// }

// deg < 50 ==> F
// 50 < deg < 65 => D
// 65 < deg < 75 => C
// 75 < deg < 85 => B
// 85 < deg <= 100 => A
// let deg = +prompt("Enter Degree");
// if (deg >= 85 && deg <= 100) {
//   document.write("A");
// } else if (deg >= 75 && deg < 85) {
//   document.write("B");
// }else{
// }

// let userAge = confirm("هل يبلغ عمر المتقدم 18 عام؟");
// let userStudy = confirm("هل خلصت دراسة ؟");

// if (userAge == true || userStudy == true) {
//   document.write("انت مطلوب للتجنيد");
// } else {
//   document.write("انت غير مطلوب للتجنيد");
// }

// let userName = prompt("Enter Username");
// let userPassword = prompt("Enter user password");

// if (userName == "ali" && userPassword == "123456") {
//   document.write("Correct Login");
// } else {
//   document.write("Wrong username or password");
// }

// let savings = +prompt("ادخل قيمة المدخرات");
// let gramGoldPrice = 3000;
// let goldValue = gramGoldPrice * 85;
// if (savings >= goldValue) {
//   let q2 = confirm("هل مر عام علي المدخرات");
//   if (q2) {
//     let zakaValue = (2.5 / 100) * savings;
//     document.write(`قيمة الزكاة هي : ` + zakaValue);
//   } else {
//     document.write("ليس عليك زكاة لان المدخرات لم يمر عليها عام");
//   }
// } else {
//   document.write("ان المبلغ المسجل اقل من قيمة النصاب 85 جرام ذهب");
// }

// Cairo => 5%
// Alex => 10%
// Aswan => 30%
// let userCountry = prompt("ادخل اسم المحافظة");

// if (userCountry == "Alex") {
//   document.write("حصلت علي خصم 10 %");
// } else if (userCountry == "Aswan") {
//   document.write("حصلت علي خصم 30 %");
// } else if (userCountry == "Cairo") {
//   document.write("حصلت علي خصم 5 %");
// } else {
//   document.write("حصلت علي خصم 0 %");
// }
