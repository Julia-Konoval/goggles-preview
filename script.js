$(document).ready(function () {
  $(".menu-toggle").on("click", function () {
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
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".slider-preview").slick({
    autoplay: false,
    vertical: true,
    infinite: false,
    slidesPerRow: 3,
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
const allFrontGlasses = document.querySelectorAll(".glasses-front");
const allSideGlasses1 = document.querySelectorAll(".glasses-side1");
const allSideGlasses2 = document.querySelectorAll(".glasses-side2");
const orangeGlasses = document.querySelectorAll(".orange-glasses");
const purpleGlasses = document.querySelectorAll(".purple-glasses");
const greenGlasses = document.querySelectorAll(".green-glasses");
const addToCard = document.querySelector(".addToCart-btn");
const buildPrescription = document.querySelector(".prescription-btn");

let currentVariant = "purple";
let variantQuantity = 0;

orangeGlasses.forEach((glasses) =>
  glasses.addEventListener("click", () => {
    if (currentVariant !== "orange") {
      variantQuantity = 0;
    }
    currentVariant = "orange";
    allFrontGlasses.forEach(
      (frontGlasses) => (frontGlasses.src = "./images/reks-orange1.png")
    );
    allSideGlasses1.forEach(
      (frontGlasses) => (frontGlasses.src = "./images/reks-orange2.png")
    );
    allSideGlasses2.forEach(
      (frontGlasses) => (frontGlasses.src = "./images/reks-orange3.png")
    );
  })
);

purpleGlasses.forEach((glasses) =>
  glasses.addEventListener("click", () => {
    if (currentVariant !== "purple") {
      variantQuantity = 0;
    }
    currentVariant = "purple";

    allFrontGlasses.forEach(
      (frontGlasses) => (frontGlasses.src = "./images/reks-purple1.png")
    );
    allSideGlasses1.forEach(
      (frontGlasses) => (frontGlasses.src = "./images/reks-purple2.png")
    );
    allSideGlasses2.forEach(
      (frontGlasses) => (frontGlasses.src = "./images/reks-purple3.png")
    );
  })
);
greenGlasses.forEach((glasses) =>
  glasses.addEventListener("click", () => {
    if (currentVariant !== "green") {
      variantQuantity = 0;
    }
    currentVariant = "green";
    allFrontGlasses.forEach(
      (frontGlasses) => (frontGlasses.src = "./images/reks-green1.png")
    );
    allSideGlasses1.forEach(
      (frontGlasses) => (frontGlasses.src = "./images/reks-green2.png")
    );
    allSideGlasses2.forEach(
      (frontGlasses) => (frontGlasses.src = "./images/reks-green3.png")
    );
  })
);
addToCard.addEventListener("click", () => {
  variantQuantity++;
});
buildPrescription.addEventListener("click", () => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      variant: currentVariant,
      quantity: variantQuantity,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
