document.addEventListener("DOMContentLoaded", function(){
    const burger = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu-list");
    const header = document.querySelector(".header");

    burger.addEventListener("click", () => {
        menu.classList.toggle("active");
        burger.classList.toggle("active");
        header.classList.toggle("active");
    });

    window.addEventListener("scroll", function () {
        console.log("Прокрутка:", window.scrollY);
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});


// Ініціалізація Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  