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

document.addEventListener('DOMContentLoaded', () => {
  const burger = new Burger();

  if (document.body.classList.contains('index')) {
    const index = new Index(
      {
        bannerClass: '.js-banner',
        categoriesClass: '.js-cat',
        popularClass: '.js-popular-car',
        galleryClass: '.js-gallery-car',
        developersClass: '.js-developers-car',
        projectsClass: '.js-projects-car',
      },
    );
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
