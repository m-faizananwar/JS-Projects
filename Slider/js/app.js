const slides = Array.from(document.getElementsByClassName('slide'));

var counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    );
}

const goNext = () => {
    counter++;
    if (counter === slides.length) {
        counter = 0;
    }
    slideImage();
}

setInterval(goNext, 1000);