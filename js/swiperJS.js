function calc_space() {
  var media = window.matchMedia('(min-width: 1024px)').matches

  if (media) {
    return 45
  } else {
    return 15
  };
}

const swiper = new Swiper('.swiper', {
  spaceBetween: calc_space(),
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});