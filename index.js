let carouselSlide = document.querySelector(".carousel-slide");
let carouselImages = document.querySelectorAll(".carousel-slide img");
let rightBtn = document.querySelector(".right-btn");
let leftBtn = document.querySelector(".left-btn");

let counter = 1;
let size = 640;
carouselSlide.style.transform = "translateX(-" + size * counter + "px)";

leftBtn.addEventListener("click", function() {
    if (counter >= carouselImages.length - 1) return;
    counter = counter + 1;
    carouselSlide.style.transform = "translateX(-" + size * counter + "px)";
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
});

rightBtn.addEventListener("click", function() {
    if (counter <= 0) return;
    counter = counter - 1;
    carouselSlide.style.transform = "translateX(-" + size * counter + "px)";
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
});

carouselSlide.addEventListener("transitionend", function() {
    if (carouselImages[counter].id === "last-clone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(-" + size * counter + "px)";
    }
    if (carouselImages[counter].id === "first-clone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(-" + size * counter + "px)";
    }
});