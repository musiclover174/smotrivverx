import {
  resizeWatcher,
  elemVisCheck,
  qs,
  qsAll,
} from './modules/helpers';
import Index from './modules/index';
import Popup from './modules/popup';
import Forms from './modules/forms';
import Burger from './modules/burger';
import Contacts from './modules/contacts';
import Projects from './modules/projects';
import Sticky from './modules/sticky';
import Banner from './modules/banner';
import Catalog from './modules/catalog';

document.addEventListener('DOMContentLoaded', () => {
  const burger = new Burger();

  if (document.body.classList.contains('index')) {
    const index = new Index(
      {
        categoriesClass: '.js-cat',
        popularClass: '.js-popular-car',
        galleryClass: '.js-gallery-car',
        developersClass: '.js-developers-car',
        projectsClass: '.js-projects-car',
      },
    );
  }

  if (qs('.js-banner')) {
    const banner = new Banner('.js-banner');
  }

  if (qsAll('.h-anim').length) elemVisCheck();

  if (qs('form')) {
    const forms = new Forms();
  }

  if (qs('[data-popup]')) {
    window.popup = new Popup('[data-popup]');
  }

  if (qs('.js-map')) {
    const cont = new Contacts('map');
  }

  if (qs('.js-project-car')) {
    const projects = new Projects('.js-project-car', '.js-project-thumbs');
  }

  if (qs('.glightbox')) {
    const lightBox = GLightbox({
      selector: 'glightbox',
    });
  }

  if (qs('.catalog')) {
    const catalog = new Catalog('.js-range', '.js-cat-sort', '.js-cat-opener', '.js-cat-select');
  }

  if (document.querySelector('.js-sticky')) {
    const top = window.innerWidth < 1170 ? 110 : 20;
    const sticky = new Sticky(top, 20);
  }

  resizeWatcher();
  let eventScroll;
  try {
    eventScroll = new Event('scroll');
  } catch (e) {
    eventScroll = document.createEvent('Event');
    eventScroll.initEvent('scroll', false, false);
  }
  window.dispatchEvent(eventScroll);
});
