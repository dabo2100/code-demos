let val = +prompt("ادخل قيمة الميراث");
let q2 = prompt("is there a wife ?");
let menNo = +prompt("عدد الأولاد");
let femaleNo = +prompt("عدد البنات");

let wifeValue = 0;

if (q2 == "yes") {
  wifeValue = (val * 1) / 8;
  val = val - wifeValue;
}

let sahamNo = menNo * 2 + femaleNo;
let sahamValue = val / sahamNo;

let msg = "";
if (q2 == "yes") {
  msg = msg + " نصيب الزوجة هو : " + wifeValue;
}
if (menNo > 0) {
  msg = msg + " نصيب الذكر " + 2 * sahamValue;
}
if (femaleNo > 0) {
  msg = msg + "نصيب الأنثي " + sahamValue;
}
alert(msg);
