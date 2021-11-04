const carouselSlide = document.querySelector('.comic_slide');
const carouselImages = document.querySelectorAll('.comic_slide img');
const comicChapter = document.querySelector('.comic_chapternav')

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const chapBtn = document.querySelector('#chapterNav');
const chapCls = document.querySelector('#chapterClose');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;
const chapnavHeight = comicChapter.clientHeight;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

chapterNav.addEventListener('click', () => {
    comicChapter.style.transition = "transform 0.4s ease-in-out";
    comicChapter.style.transform = 'translateY(' + -600 + 'px)';
});

chapCls.addEventListener('click', () => {
    comicChapter.style.transition = "transform 0.4s ease-in-out";
    comicChapter.style.transform = 'translateY(' + chapnavHeight + 'px)';
});