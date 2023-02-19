const menuOpen = document.querySelector(".menu__open");
const menuClose = document.querySelector(".menu__close");

menuOpen.addEventListener("click", () => {
  const menu = document.querySelector(".header__menu");
  const overlay = document.querySelector(".overlay");
  menu.classList.add("active");
  overlay.classList.add("active");
});

menuClose.addEventListener("click", () => {
  const menu = document.querySelector(".header__menu");
  const overlay = document.querySelector(".overlay");
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

const swiper = new Swiper(".mySwiper", {
  slidesPerview: 1,
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper1 = new Swiper(".reason-swiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  grabCursor: true,
  loop: true,

  breakpoints: {
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1026: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

const swiper2 = new Swiper(".service-swiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  grabCursor: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1026: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

const swiper3 = new Swiper(".top-swiper", {
  grabCursor: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 00,
    },
  },
});
