// let pastaPromise = new Promise()
// Local Time
let daysInArabic = [
  "الأحد",
  "الأثتنين",
  "التلات",
  "ألاربع",
  "ألخميس",
  "الجمعة",
  "ألسبت",
];
let todayDate = new Date();

let getTodayDate = () => {
  return `${todayDate.getFullYear()} - ${
    todayDate.getMonth() + 1
  } - ${todayDate.getDate()} `;
};

document.querySelector("#myDate").innerHTML = getTodayDate();

export { getTodayDate };
