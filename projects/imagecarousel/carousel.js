const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

const img = document.querySelector('.carousel-image');
const button = document.querySelector('.button');
const prevbutton = document.querySelector('.prevbutton');

const dotsNav = document.querySelector('.dot');

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);


// Moves the slide

const moveToSlide = (track, currentSlide, targetSlide) => {
    if (targetSlide == null)
        if (currentSlide == document.querySelector('.last-slide'))
            targetSlide = document.querySelector('.first-slide')
        else if (currentSlide == document.querySelector('.first-slide'))
        targetSlide = document.querySelector('.last-slide')

    track.style.transform = 'translatex(-' + targetSlide.style.left + ')';

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


// Button Events

button.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
});

prevbutton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, previousSlide);
});



// Timer
setTimer()
function setTimer(){
    var timer = setTimeout(nextSlide, 3000)
}

function nextSlide(){
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);

    setTimer()
}

// dotsNav.addEventListener('click', e => {
//     const targetDot = e.target.closest('button');
//     if (!targetDot) return;

//     const currentSlide = track.querySelector('.current-slide');
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const targetIndex = dots
// })




