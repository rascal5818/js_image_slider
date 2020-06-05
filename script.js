const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let count = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {
    container.animate([{ opacity: '0.1' }, { opacity: '1.0' }], {
        duration: 1000,
        fill: 'forwards'
    });

    if (count === 5) {
        count = -1;
    }

    count++;
    container.style.backgroundImage = `url(img/img-${count}.jpg`;
    console.log(count);
}

function prevSlide() {
    container.animate([{ opacity: '0.1' }, { opacity: '1.0' }], {
        duration: 1000,
        fill: 'forwards'
    });

    if (count === 0) {
        count = 6;
    }

    count--;
    container.style.backgroundImage = `url(img/img-${count}.jpg`;
    console.log(count);
}
