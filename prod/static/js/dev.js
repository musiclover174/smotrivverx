if (document.querySelector('.js-cat-reset')) {
  document.querySelector('.js-cat-reset').addEventListener('click', function() {
    var rangeEl = document.querySelector('.js-range'),
        rangeElFrom = rangeEl.getAttribute('data-from'),
        rangeElTo = rangeEl.getAttribute('data-to');
  
    rangeEl.noUiSlider.set([rangeElFrom, rangeElTo]);
  
    window.catSelect.setValueByChoice('0')
  });
}