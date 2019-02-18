export default class Banner {
  constructor(bannerClass) {
    this.bannerClass = bannerClass;
    this.init();
  }

  init() {
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
}
