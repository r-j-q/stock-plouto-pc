$(document).ready(function () {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      direction: "horizontal",
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: false,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        480: {
          direction: "vertical",
          slidesPerView: 3,
        }
      }
    });
    var galleryTop = new Swiper(".gallery-top", {
      direction: "horizontal",
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  });
  