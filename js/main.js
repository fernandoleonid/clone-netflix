'use strict';

const startCarousel = () => {
    const container = document.querySelectorAll('.glider');
    container.forEach((carousel, index) => {
        new Glider(carousel, {
            slidesToShow: 5,
            slidesToScroll: 2,
            draggable: true,
            arrows: {
                prev: `#prev${index}`,
                next: `#next${index}`,
            },
        });
    });
};

const activeSearch = () => {
    document.querySelector('.search-container').classList.add('active');
};

const checkSearch = ({target}) => {
    const searchedText = target.value.trim();
    if (searchedText === '') {
        document.querySelector('.search-container').classList.remove('active');
    }
};

startCarousel();

document.querySelector('.preview-video').addEventListener('click', ({target}) => (target.muted = !target.muted));
document.querySelector('.search-icon').addEventListener('click', activeSearch);
document.querySelector('.search-input').addEventListener('focusout', checkSearch);
