const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 400,
  autoplay: {
    delay: 1000,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  zoom: {
    maxRatio: 5,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

// call back function
let loader = document.querySelector("#myLoader");

let getmyData = () => {
  loader.style.display = "flex";
  // Make Request Back end
  setTimeout(() => {
    loader.style.display = "none";
  }, 800);
};
