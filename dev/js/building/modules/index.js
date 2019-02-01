import { qs, qsAll } from './helpers';

export default class Index {
  constructor({
    bannerClass,
    categoriesClass,
    popularClass,
    galleryClass,
    developersClass,
    projectsClass,
  }) {
    this.bannerClass = bannerClass;
    this.categoriesClass = categoriesClass;
    this.popularClass = popularClass;
    this.galleryClass = galleryClass;
    this.developersClass = developersClass;
    this.projectsClass = projectsClass;

    if (qs(bannerClass)) this.bannerInit();
    if (qs(categoriesClass)) this.catsInit();
    if (qs(popularClass)) this.popularInit();
    if (qs(galleryClass)) this.galleryInit();
    if (qs(developersClass)) this.developersInit();
    if (qs(projectsClass)) this.projectsInit();
  }

  bannerInit() {
    const bannerCarousel = new Swiper(this.bannerClass, {
      speed: 1500,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: `${this.bannerClass} .swiper-pagination`,
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 8000,
      },
    });
  }

  catsInit() {
    const bgEl = qs('.js-cat-bg', qs(this.categoriesClass));
    const itemEls = qsAll('.js-cat-elem', qs(this.categoriesClass));

    itemEls.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        bgEl
          .setAttribute(
            'style',
            `background-image: url('${item.getAttribute('data-bg')}')`,
          );
      });
    });
  }

  popularInit() {
    const popularCarousel = new Swiper(this.popularClass, {
      speed: 700,
      slidesPerView: 3,
      spaceBetween: 44,
      loop: true,
      navigation: {
        nextEl: `${this.popularClass} ~ .swiper-buttons .swiper-button-next`,
        prevEl: `${this.popularClass} ~ .swiper-buttons .swiper-button-prev`,
      },
      breakpoints: {
        650: {
          slidesPerView: 1,
        },
        900: {
          slidesPerView: 2,
        },
      },
    });
  }

  galleryInit() {
    const galleryCarousel = new Swiper(this.galleryClass, {
      speed: 1500,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: 'fade',
      simulateTouch: false,
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 5000,
      },
    });
  }

  developersInit() {
    const developersCarousel = new Swiper(this.developersClass, {
      speed: 700,
      slidesPerView: 4,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: `${this.developersClass} ~ .swiper-buttons .swiper-button-next`,
        prevEl: `${this.developersClass} ~ .swiper-buttons .swiper-button-prev`,
      },
      breakpoints: {
        650: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      },
    });
  }

  projectsInit() {
    const projectsCarousel = new Swiper(this.projectsClass, {
      speed: 700,
      slidesPerView: 3,
      spaceBetween: 0,
      direction: 'vertical',
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: `${this.projectsClass} ~ .swiper-buttons .swiper-button-next`,
        prevEl: `${this.projectsClass} ~ .swiper-buttons .swiper-button-prev`,
      },
      pagination: {
        el: `${this.projectsClass} ~ .swiper-buttons .swiper-pagination`,
        type: 'bullets',
        clickable: true,
      },
    });
  }
}
