const comicContainer = document.querySelector('.comic_container')
const comicSlider = document.querySelector('.comic_slider')
const comicPage = document.querySelectorAll('.comic_slide')
const comicChapter = document.querySelector('.comic_chapternav')

const nextBtn = document.querySelector('#nextBtn')
const prevBtn = document.querySelector('#prevBtn')
const chapBtnOpen = document.querySelector('#chapterNav')
const chapBtnClose = document.querySelector('#chapterNavClose')

let counter = 0;
let comicSize = comicContainer.clientWidth
const chapterSize = comicChapter.clientHeight
const chapterLength = comicPage.length - 1

comicSlider.style.transform = 'translateX(' + (-comicSize * counter) + 'px)'

comicPage[0].id = 'lastClone'
comicPage[chapterLength].id = 'firstClone'

comicSlider.addEventListener('keydown', nextPage)
nextBtn.addEventListener('click', nextPage)
prevBtn.addEventListener('click', prevPage)
chapBtnOpen.addEventListener('click', chapOpen)
chapBtnClose.addEventListener('click', chapClose)

window.onresize = function() {
    comicSize = comicContainer.clientWidth
    comicSlider.style.transition = "none";
    comicSlider.style.transform = 'translateX(' + (-comicSize * counter) + 'px)'
}

function nextPage() {
    if (counter < chapterLength) {
        comicSlider.style.transition = "transform 0.4s ease-in-out"
        counter++
        comicSlider.style.transform = 'translateX(' + (-comicSize * counter) + 'px)'
    }
}

function prevPage() {
    if (counter > 0) { 
        comicSlider.style.transition = "transform 0.4s ease-in-out"
        counter--
        comicSlider.style.transform = 'translateX(' + (-comicSize * counter) + 'px)'
    }
}

function chapOpen() {
    comicChapter.style.transition = "transform 0.4s ease-in-out";
    comicChapter.style.transform = 'translateY(' + -300 + 'px)';
}

function chapClose() {
    comicChapter.style.transform = 'translateY(' + chapterSize + 'px)';
}

// comicSlider.addEventListener('transitionend', () => {
//     if (comicPage[counter].id === 'lastClone') {
//         comicSlider.style.transition = "none";
//         counter = comicPage.length - 2;
//         comicSlider.style.transform = 'translateX(' + (-comicSize * counter) + 'px)';
//     }
//     if (comicPage[counter].id === 'firstClone') {
//         comicSlider.style.transition = "none";
//         counter = comicPage.length - counter;
//         comicSlider.style.transform = 'translateX(' + (-comicSize * counter) + 'px)';
//     }
// })