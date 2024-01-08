const sectionOneBtn = document.querySelector('.sectionOneBtn');
const textOne = document.querySelector('.textOne');

sectionOneBtn.addEventListener('click', (e) => {
    textOne.classList.toggle('showMoreOne');
    if (sectionOneBtn.innerText === 'Read More') {
        sectionOneBtn.innerText = 'Read Less';
    } else {
        sectionOneBtn.innerText = 'Read More';
    }
})

//THIS IS THE END OF SECTION ONE
//THIS IS THE END OF SECTION ONE
//THIS IS THE END OF SECTION ONE
const sectionTwoNextBtn = document.querySelector(".nextbtn");
const sectionTwoPrevBtn = document.querySelector(".prevbtn");
const sectionTwoSlides = document.querySelectorAll(".slidetwo");
const sectionTwoNumberOfSlides = sectionTwoSlides.length;
let sectionTwoSlideNumber = 0;

sectionTwoNextBtn.addEventListener("click", () => {
    sectionTwoSlides[sectionTwoSlideNumber].classList.remove("active");
    sectionTwoSlideNumber++;
    console.log(sectionTwoSlideNumber);
    //THIS IF UNDER IS THE REGULATOR ELSE IT WILL KEEP RUNNING
    if (sectionTwoSlideNumber > (sectionTwoNumberOfSlides - 1)) {
        //LET THE NUMBER/SLIDE WHERE IT IS REMAIN AT THE LAST SLIDE OR LET THE SLIDE NUMBER BE 3, ITS LIKE WE ARE ASSIGNING THIS 3 AS A VALUE TO REPLACE THE FORMER ZERO
        sectionTwoSlideNumber = sectionTwoNumberOfSlides - 1;
    };
    sectionTwoSlides[sectionTwoSlideNumber].classList.add("active");
});

sectionTwoPrevBtn.addEventListener("click", () => {
    sectionTwoSlides[sectionTwoSlideNumber].classList.remove("active");
    sectionTwoSlideNumber--;
    //THIS IF UNDER IS THE REGULATOR ELSE IT WILL KEEP RUNNING
    if (sectionTwoSlideNumber < 0) {
        //LET THE NUMBER/SLIDE WHERE IT IS REMAIN AT THE LAST SLIDE OR LET THE SLIDE NUMBER BE 3, ITS LIKE WE ARE ASSIGNING THIS 3 AS A VALUE TO REPLACE THE FORMER ZERO
        sectionTwoSlideNumber = 0;
    };
    sectionTwoSlides[sectionTwoSlideNumber].classList.add("active");
});

//THIS IS FOR THE POP-UP
document.getElementById('spanone').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'flex';
})
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
})
//SPAN ONE END
document.getElementById('spantwo').addEventListener('click', function () {
    document.querySelector('.bgg-modal').style.display = 'flex';
})
document.querySelector('.close-two').addEventListener('click', function () {
    document.querySelector('.bgg-modal').style.display = 'none';
})