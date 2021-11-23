import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Autoplay]);
Swiper.use([Navigation, Pagination]);
const slider = () => {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    // spaceBetween: 30,
    // centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  });
};

export default slider;
