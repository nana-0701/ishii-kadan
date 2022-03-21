let mySwiper = new Swiper(".swiper-container", {
  loop: true,
  effect: "fade",
  autoplay: {
      delay: 4000,
      disableOnInteraction: false
  },
  speed: 2000,
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  }
});
