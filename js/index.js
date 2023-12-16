var burger = document.querySelector(".burger");
var menu = document.querySelector(".header");
var body = document.querySelector("body");
var footer = document.querySelector("footer");
var button = document.querySelector(".contacts__button");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("menu-opened");
});
button.addEventListener("click", () => {
  footer.classList.toggle("change-bg-footer");
});

//-------------------Swiper--------------------------
const swiper = new swiper(".myswiper", {
  slidesPerView: 1,
  spaceBetween: 24,
});
