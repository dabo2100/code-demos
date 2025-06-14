// State - Variable
// state : is a golbal variable allow functions ( use / update )
let orginalPrice = 0;
let discountPercentage = 0;

// put value of orginal price
let changeOriginalPrice = () => {
  let valueFromUser = +prompt("Enter Fatora Value");
  if (isNaN(valueFromUser) == true) {
    alert("الرقم الذي ادخلته غير صحيح لايمكن كتابة حروف");
    changeOriginalPrice();
  } else {
    if (valueFromUser <= 0) {
      alert("لابد من ادخال رقم اكبر من الصفر");
      changeOriginalPrice();
    } else {
      orginalPrice = valueFromUser;
      let q = confirm("هل تحتاج الي تطبيق خصم ؟");
      if (q) {
        makeDiscount();
      } else {
        console.clear();
        console.log(`Original Price is : ${orginalPrice}`);
      }
    }
  }
};

let makeDiscount = () => {
  if (orginalPrice > 0) {
    let percentage = +prompt("من فضلك ادخل نسبة الخصم");
    if (isNaN(percentage)) {
      alert("الحروف غير مسموحة قيمة الخصم تتراوح من صفر الي 100");
      makeDiscount();
    } else {
      // check 0 < no < 100
      // calc discount value
      if (percentage > 0 && percentage < 100) {
        console.clear();
        console.log(`
Orginal Price : ${orginalPrice}
Discount Percentage : ${percentage} %
Price After Discount : ${calcDiscount(percentage)}
          `);
      } else {
        alert("قيمة نسبة الخصم غير صحيحة لابد ان تتراوح ما بين 0 الي 100");
        makeDiscount();
      }
    }
  } else {
    alert("لم يتم ادخال قيمة الفاتورة");
    changeOriginalPrice();
  }
};

let calcDiscount = (percentage) => {
  let discountValue = (percentage / 100) * orginalPrice;
  let priceAfterDiscount = orginalPrice - discountValue;
  return priceAfterDiscount;
};
