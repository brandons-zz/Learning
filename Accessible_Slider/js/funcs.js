$(document).ready(function() {
  $('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    arrowsPlacement: 'beforeSlides',
    prevArrow: '<button type="button" class="custom-prev-button">'
               + '  <span class="las la-angle-left" aria-hidden="true"></span>'
               + '  <span class="sr-only">Previous slide</span>'
               + '</button>',
    nextArrow: '<button type="button" class="custom-next-button">'
               + '  <span class="las la-angle-right" aria-hidden="true"></span>'
               + '  <span class="sr-only">Next slide</span>'
               + '</button>',
    pauseIcon: '<span class="la la-pause" aria-hidden="true"></span>',
    playIcon: '<span class="la la-play" aria-hidden="true"></span>'
  });
});
