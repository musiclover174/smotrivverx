import { qs, qsAll } from './helpers';

export default class Catalog {
  constructor(rangeEl, sortEl, catOpeneEl, catSelectEl) {
    this.rangeEl = rangeEl;
    this.sortEl = sortEl;
    this.catOpeneEl = catOpeneEl;
    this.catSelectEl = catSelectEl;

    if (qs(this.rangeEl)) this.rangeInit();
    if (qs(this.sortEl)) this.sortListener();
    if (qs(this.catOpeneEl)) this.openerListener();
    if (qs(this.catSelectEl)) this.catSelect();
  }

  rangeInit() {
    const slider = qs(this.rangeEl);
    const nativeInput = slider.previousElementSibling;
    const slideMin = +slider.getAttribute('data-min');
    const slideMax = +slider.getAttribute('data-max');
    const slideFrom = +slider.getAttribute('data-from') || slideMin;
    const slideTo = +slider.getAttribute('data-to') || slideMax;

    noUiSlider.create(slider, {
      start: [slideFrom, slideTo],
      connect: true,
      step: 1,
      range: {
        min: slideMin,
        max: slideMax,
      },
    });

    const nodes = [
      qs('.js-range-from'),
      qs('.js-range-to'),
    ];

    slider.noUiSlider.on('update', (values, handle) => {
      nodes[handle].innerHTML = +values[handle];
      nativeInput.value = values.map(num => +num).join(':');
    });
  }

  catSelect() {
    window.catSelect = [];
    qsAll(this.catSelectEl).forEach((sel) => {
      window.catSelect.push(
        new Choices(sel, {
          searchEnabled: false,
          itemSelectText: '',
          position: 'bottom',
          shouldSort: false,
        })
      );
    });
  }

  openerListener() {
    qsAll(this.catOpeneEl).forEach((el) => {
      el.addEventListener('click', () => {
        el.classList.toggle('open');
      });
    });
  }

  sortListener() {
    qsAll(this.sortEl).forEach((el) => {
      el.addEventListener('click', () => {
        if (el.classList.contains('asc')) {
          el.classList.remove('asc');
          el.classList.add('desc');
        } else if (el.classList.contains('desc')) {
          el.classList.remove('desc');
        } else {
          el.classList.add('asc');
        }
      });
    });
  }
}
