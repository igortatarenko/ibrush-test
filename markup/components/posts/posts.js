import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

document.querySelectorAll('.swiper').forEach((element) => {
    let swiper = new Swiper(element, {
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});
