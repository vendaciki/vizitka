let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Získání tlačítka
let mybutton = document.getElementById("myBtn");

// Když se uživatel posune dolů o 800 pixelů od horní části dokumentu, zobrazí se tlačítko
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Když uživatel klikne na tlačítko, přejde na začátek dokumentu
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}