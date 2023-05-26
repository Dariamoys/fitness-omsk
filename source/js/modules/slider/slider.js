export function initSlider() {
  const trainersSlider = new Swiper('.coaches__wrapper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 33,
    // centeredSlides: true,
    grabCursor: true, // менять иконку курсора

    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 3,
      },
      // when window width is >= 768px
      1050: {
        slidesPerView: 3,
      },
      // when window width is >= 1199px
      1220: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  const reviewsSlider = new Swiper('.reviews__wrapper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 33,
    centeredSlides: true,
    grabCursor: true, // менять иконку курсора
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },
  });
}
