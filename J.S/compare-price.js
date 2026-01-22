const successSwiper = new Swiper('.successSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 800,

    navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

/*================
PRICE-SWIPER
===================
*/
const swiper = new Swiper(".priceSwiper", {
    loop: true,
    autoplay: {
        delay: 600,
        disableOnInteraction: false,
    },
    effect: "fade",
    speed: 900,
});