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
