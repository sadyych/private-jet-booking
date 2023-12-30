// ---------------Burger------------------------------
var burger = document.querySelector(".header__burger");
var menu = document.querySelector(".header__menu");
var body = document.querySelector("body");
var logo = document.querySelector(".header__logo");
var logo_white = document.querySelector(".header__logo-white");
var reg_button = document.querySelector(".header__reg");
var sign_button = document.querySelector(".header__sign");
var header_buttons = document.querySelector(".header__btns");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
  logo.classList.toggle("active");
  logo_white.classList.toggle("active");
  reg_button.classList.toggle("active");
  sign_button.classList.toggle("active");
  header_buttons.classList.toggle("active");
});
var link = document.querySelectorAll(".header__link");

link.forEach(function (link) {
  link.addEventListener("click", function (event) {
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("lock");
    logo.classList.remove("active");
    logo_white.classList.remove("active");
    reg_button.classList.remove("active");
    sign_button.classList.remove("active");
    header_buttons.classList.remove("active");
  });
});
//-------------------Planes-Swiper--------------------------
const planesSwiper = new Swiper(".planes-slider", {
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,

  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    589: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
const membershipSwiper = new Swiper(".membership-slider", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  initialSlide: 1,
  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 1000,
  //   effect: "coverflow",

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    slideShadows: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
