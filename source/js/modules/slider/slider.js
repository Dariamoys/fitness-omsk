const swiperCoach = document.querySelector('.coaches__wrapper');

const initSwiperCoach = () => {
  if (swiperCoach) {
    (() =>
      new Swiper('.coaches__wrapper', { // eslint-disable-line
        direction: 'horizontal',
        loop: true,

        navigation: {
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique',
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            initialSlide: 2,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            initialSlide: 2,
          },

          1199: {
            slidesPerView: 2,
            spaceBetween: 30,
            initialSlide: 2,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
            initialSlide: 0,
          },
        },
      })
    )();
  }
};

const swiperReview = document.querySelector('.reviews__wrapper');

const initSwiperReview = () => {
  if (swiperReview) {
    (() =>
      new Swiper('.reviews__wrapper', { // eslint-disable-line
        direction: 'horizontal',
        loop: false,

        navigation: {
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique',
        },
      })
    )();
  }
};

export {initSwiperCoach, initSwiperReview};
