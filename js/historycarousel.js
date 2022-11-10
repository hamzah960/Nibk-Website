const carouselContainer = document.querySelector(".text-carousel");
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const upButton = document.querySelector(".button-up");
const downButton = document.querySelector(".button-down");
const dotsNav = document.querySelector(".carousel-dots");
const dots = Array.from(dotsNav.children);

const itemHieght = slides[0].getBoundingClientRect().height;  //290

// slides[0].style.top = 0;
// slides[1].style.top = itemHieght + 'px';
// slides[2].style.top = itemHieght * 2 + 'px';
// slides[3].style.top = itemHieght * 3 + 'px';
// slides[4].style.top = itemHieght * 4 + 'px';
// slides[5].style.top = itemHieght * 5 + 'px';
// slides[6].style.top = itemHieght * 6 + 'px';

// slides.forEach(function (el, index) {
//     el.style.top = itemHieght * index +'px';
// });

const setSlidePosition = function (slide, index) {
    slide.style.top = itemHieght * index + 'px';
}

slides.forEach(setSlidePosition);

downButton.addEventListener('click', function (e) {

    if(slides[slides.length - 1].classList.contains("active") ) {
        return false;
    };

    const currentSlide = track.querySelector('.active');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.top;
    const currentDot = dotsNav.querySelector(".active");
    const nextDot = currentDot.nextElementSibling;

    dots.forEach(function (el) {
        el.classList.remove("active");
    });
    nextDot.classList.add("active");
    track.style.transform = "translateY(-" + amountToMove + ")"; 


    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
    currentDotActive();

});

upButton.addEventListener('click', function () {

    if(slides[0].classList.contains("active") ) {
        return false;
    };

    const currentSlide = track.querySelector('.active');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".active");
    const prevDot = currentDot.previousElementSibling;

    dots.forEach(function (el) {
        el.classList.remove("active");
    });
    prevDot.classList.add("active");
    const amountToMove = prevSlide.style.top;

    track.style.transform = "translateY(-" + amountToMove + ")"; 

    currentSlide.classList.remove('active');
    prevSlide.classList.add('active');
    currentDotActive();

});


dots.forEach(function (el) {
    el.addEventListener("click", function(e) {
        
        dots.forEach(function (el) {
            el.classList.remove("active");
        });

        slides.forEach(function (el) {
            el.classList.remove("active");
        });

        e.target.classList.add("active");
        
        const currentSlide = slides[dots.indexOf(e.target)];
        const amountToMove = currentSlide.style.top;
        
        currentSlide.classList.add("active");

        track.style.transform = "translateY(-" + amountToMove + ")"; 

        currentDotActive();
    });
});


function currentDotActive() {
    const rotor = document.querySelector(".rotor");
    const currentDot = dotsNav.querySelector(".active");
    let rotateDeg = currentDot.getAttribute("data-rotate");
    
    rotor.style.transform = rotateDeg;
    console.log(rotateDeg);

};