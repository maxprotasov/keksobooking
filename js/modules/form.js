'use strict';

(function Form() {
    var pinBlock = document.querySelector('.tokyo__pin-map'),
        dialogPanel = document.querySelector('.dialog'),
        closeToggle = document.querySelector('.dialog__close');


    title.required = true;
    title.maxlength = 100;
    title.minlength = 30;
    price.required = true;
    price.max = 1000000;
    price.min = 1000;
    address.required = true;

    pinBlock.addEventListener('click', function (event){
      var target = (event.target.tagName == 'DIV')? event.target : event.target.parentNode;

        setPinActive(target);
        pinBlock.parentNode.appendChild(dialogPanel);

    });
    closeToggle.addEventListener('click', function () {
      var pin = document.querySelector('.pin--active');
      dialogPanel.parentNode.removeChild(dialogPanel);
      pin.classList.remove('pin--active');
    });

    function setPinActive(pin) {
      var collectionPin = pinBlock.querySelectorAll('.pin');
      collectionPin.forEach(function (item) {
        if(item.classList.contains('pin--active')) {
          item.classList.remove('pin--active');
        }
      });
      pin.classList.add('pin--active');
    }

    time.addEventListener('change', function () {
      timeout.value = time.value;
    });
    timeout.addEventListener('change', function () {
      time.value = timeout.value;
    });
    type.addEventListener('change', function () {
      price.min = type.value;
    });

    room_number.addEventListener('change', function () {
      if(room_number.value > 1) {
        capacity.value = 3;
      } else {
        capacity.value = 0;
      }

  })
  })();

