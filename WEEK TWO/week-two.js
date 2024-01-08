const prevBtn = document.querySelector(".prevbtn");
const nextBtn = document.querySelector(".nextbtn");
const slides = document.querySelectorAll(".slide");//Here slides is the array name
const numberOfSlides = slides.length;
let slideNumber = 0;

nextBtn.addEventListener("click", () => {
  slides[slideNumber].classList.remove("active");
  slideNumber++;
  if (slideNumber > (numberOfSlides - 1)) {
    slideNumber = numberOfSlides - 1;
  };
  slides[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  slides[slideNumber].classList.remove("active");
  slideNumber--;
  if (slideNumber < 0) {
    slideNumber = 0;
  }
  slides[slideNumber].classList.add("active");
})
