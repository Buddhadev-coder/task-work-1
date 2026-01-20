const hero = document.getElementById("hero");

const swiper = new Swiper(".textSwiper", {
    slidesPerView: 4,
    loop: true,

    breakpoints: {
        // Mobile (default)
        0: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        },

        // Tablet
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 25,
        },

        // Desktop
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

document.querySelectorAll(".swiper-slide").forEach(item => {
    item.addEventListener("mouseenter", () => {
        const bg = item.getAttribute("data-bg");

        if (bg === "bg1") {
            hero.style.backgroundImage = "url('image/hotel-image-1.jpg')";
        } else if (bg === "bg2") {
            hero.style.backgroundImage = "url('image/hotel-image-2.jpg')";
        }
    });
});