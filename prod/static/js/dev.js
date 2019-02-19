// reset catalog filter
(function() {
  if (document.querySelector('.js-cat-reset')) {
    document.querySelector('.js-cat-reset').addEventListener('click', function() {
      var rangeEl = document.querySelector('.js-range'),
          rangeElFrom = rangeEl.getAttribute('data-from'),
          rangeElTo = rangeEl.getAttribute('data-to');
    
      rangeEl.noUiSlider.set([rangeElFrom, rangeElTo]);
    
      window.catSelect.setValueByChoice('0');
    });
  }
})();

// calculation js
(function() {
  if (document.querySelector('.js-calc-sbm')) {
    var calcSbm = document.querySelector('.js-calc-sbm');
    var calcClear = document.querySelector('.js-calc-clear');
    var calc = document.querySelector('.js-calc');
    var calcMainForm = document.querySelector('.js-calc-mainform');
    var calcOrder = document.querySelector('.js-calc-order');
    var calcFeed = document.querySelector('.js-calc-feed');

    calcSbm.addEventListener('click', function(e) {
      if (window.checkForm(document.querySelector('.js-calc-mainform'))) {
        // ajax for content and..
        calc.setAttribute('data-step', '2');
      }
      e.preventDefault();
    });

    calcClear.addEventListener('click', function(e) {
      calcMainForm.reset();
      calcFeed.reset();
      window.choices[0].setValueByChoice('-1');
      calc.setAttribute('data-step', '1');
    });

    calcOrder.addEventListener('click', function(e) {
      calc.setAttribute('data-step', '3');
    });
  }
})();