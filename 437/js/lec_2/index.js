let goldGram = 3500;
let goldValue = 85 * goldGram;
let Savings = +prompt("ادخل قيمة مدخراتك ؟");
if (Savings >= goldValue) {
  let q2 = prompt("هل مر عام كامل علي الأدخار ؟");
  if (q2 == "yes") {
    let final = (Savings * 2.5) / 100;
    alert("قيمة الذكاة = " + final);
  } else {
    alert("لم يبلغ الأدخار الحول");
  }
} else {
  alert("غالباً انت فقير ومحتاج زكاة ربنا يوفقك");
}
