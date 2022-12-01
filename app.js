const mainImage = document.querySelector(".main-img");
const lightBox = document.querySelector(".lightbox");
const closeBtn = document.querySelector(".close-btn");

mainImage.addEventListener("click", function () {
  lightBox.classList.add("lightbox-open");
});

closeBtn.addEventListener("click", function () {
  lightBox.classList.remove("lightbox-open");
});

/*********************************** */

let count = 0;

const amount = document.querySelector(".amount");
const increaseBtn = document.querySelector(".plus-icon");
const decreaseBtn = document.querySelector(".minus-icon");

increaseBtn.addEventListener("click", function () {
  count++;
  amount.textContent = count;
});
decreaseBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
  } else if (count <= 0) {
    count = 0;
  }

  amount.textContent = count;
});

const addToChartBtn = document.querySelector(".add-to-chart-btn");
const chartAmount = document.querySelector(".chart-amount");

addToChartBtn.addEventListener("click", function () {
  if (count > 0) {
    chartAmount.classList.add("open-chart-amount");
    chartAmount.textContent = count;
    amount.textContent = 0;
  }
  shopAmount.textContent = `${count}`;
});

let shopAmount = document.getElementById("shop-amount");

/**************************************************** */

const images = [
  {
    id: 1,
    img: "./images/image-product-1.jpg",
  },
  {
    id: 2,
    img: "./images/image-product-2.jpg",
  },
  {
    id: 3,
    img: "./images/image-product-3.jpg",
  },
  {
    id: 4,
    img: "./images/image-product-4.jpg",
  },
];

const mainImageLightbox = document.querySelector(".main-img-lightbox");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".previous-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  showImage();
});

function showImage() {
  const item = images[currentItem];
  mainImageLightbox.src = item.img;
}
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > images.length - 1) {
    currentItem = 0;
  }
  showImage();
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = images.length - 1;
  }
  showImage();
});

/************************************************************* */

function myImageFunction(productSmallImg) {
  let productFullImg = document.querySelector(".main-img");
  productFullImg.src = productSmallImg.src;
}

function myImageFunctionLightbox(productSmallImg) {
  let productFullImg = document.querySelector(".main-img-lightbox");
  productFullImg.src = productSmallImg.src;
}

/************************************************************** */

const iconCart = document.querySelector(".icon-cart");
const basket = document.querySelector(".basket");

iconCart.addEventListener("click", function () {
  basket.classList.toggle("open-basket");
  empty.classList.remove("empty-open");
});

const cartDeleteBtn = document.querySelector(".cart-delete-btn");
const productList = document.querySelector(".product-list");
const empty = document.querySelector(".empty");

cartDeleteBtn.addEventListener("click", function (){
  empty.classList.add("empty-open");
  chartAmount.classList.remove("open-chart-amount")
});

/************************************************************** */
