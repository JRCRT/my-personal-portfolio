// Get the modal
var modal = document.getElementById("myModal");

var modalImg = document.getElementById("modal-img");

document.addEventListener("click", (e) => {
  const elem = e.target;
  if (elem.id === "myImg") {
    modal.style.display = "block";
    modalImg.src = elem.dataset.biggerSrc || elem.src;
  }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15,
  },
};

var carousel = document.querySelector("[data-carousel]");
var carousel2 = document.querySelector("[data-carousel2]");
var slides = document.getElementsByClassName("carousel-cell");
var flkty = new Flickity(carousel, options);
var flkty2 = new Flickity(carousel2, options);

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    image.style.backgroundPosition = x + "px";
  });
});

flkty2.on("scroll", function () {
  flkty2.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    image.style.backgroundPosition = x + "px";
  });
});
