// $(function () {
$(document).ready(function () {
  $(".slider-thumb").on("click", function () {
    $(".nav").toggleClass("showing");
    $(".nav ui").toggleClass("showing");
  });

  $(".slider-thumb").slick({
    autoplay: false,
    vertical: true,
    dots: false,
    infinite: true,
    verticalSwiping: true,
    slidesPerRow: 3,
    slidesToShow: 3,
    asNavFor: ".slider-preview",
    focusOnSelect: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa fa-angle-up"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa fa-angle-down"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
        },
      },
      {
        breakpoint: 479,
        settings: {
          vertical: false,
          slidesPerRow: 3,
          slidesToShow: 3,
        },
      },
    ],
  });
  $(".slider-preview").slick({
    autoplay: false,
    vertical: true,
    infinite: false,
    slidesPerRow: 1,
    slidesToShow: 1,
    asNavFor: ".slider-thumb",
    arrows: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          fade: true,
        },
      },
    ],
  });
});
