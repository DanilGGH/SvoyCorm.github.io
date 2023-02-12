const $dzvin = $('.dzvin');
const $crestik = $('.crestik');
const $dnone = $('.dnone');
const $individual = $('.individual');
const $dnone1 = $('.dnone1');
const $deliveri = $('.deliveri');
const $dnone2 = $('.dnone2');

$dzvin.on('click', function () {
   $dnone.addClass('activ');
   $('body').css('overflow', 'hidden');
});

$crestik.on('click', function () {
   $dnone.removeClass('activ');
   $dnone1.removeClass('activ');
   $dnone2.removeClass('activ');
   $('body').css('overflow', 'auto');
});

$individual.on('click', function () {
   $dnone1.addClass('activ');
   $('body').css('overflow', 'hidden');
});

$deliveri.on('click', function () {
   $dnone2.addClass('activ');
   $('body').css('overflow', 'hidden');
});

$crestik.on('click', function () {
   $dnone1.removeClass('activ');
   $dnone2.removeClass('activ');
   $('body').css('overflow', 'auto');
});

// document.querySelector('.s1').addEventListener('mouseover', function () {
//    document.querySelector('.first-page').style.backgroundImage = "url('../img/cow.jpg')";
// });
// document.querySelector('.s1').addEventListener('mouseout', function () {
//    document.querySelector('.first-page').style.backgroundImage = "";
// });

// document.querySelector('.s2').addEventListener('mouseover', function () {
//    document.querySelector('.first-page').style.backgroundImage = "url('../img/mel-rog.jpg')";
// });
// document.querySelector('.s2').addEventListener('mouseout', function () {
//    document.querySelector('.first-page').style.backgroundImage = "";
// });

// document.querySelector('.s3').addEventListener('mouseover', function () {
//    document.querySelector('.first-page').style.backgroundImage = "url('../img/pig.jpg')";
// });
// document.querySelector('.s3').addEventListener('mouseout', function () {
//    document.querySelector('.first-page').style.backgroundImage = "";
// });

// document.querySelector('.s4').addEventListener('mouseover', function () {
//    document.querySelector('.first-page').style.backgroundImage = "url('../img/ciken.jpg')";
// });
// document.querySelector('.s4').addEventListener('mouseout', function () {
//    document.querySelector('.first-page').style.backgroundImage = "";
// });

// document.querySelector('.s5').addEventListener('mouseover', function () {
//    document.querySelector('.first-page').style.backgroundImage = "url('../img/fich.jpg')";
// });
// document.querySelector('.s5').addEventListener('mouseout', function () {
//    document.querySelector('.first-page').style.backgroundImage = "";
// });

// document.querySelector('.s6').addEventListener('mouseover', function () {
//    document.querySelector('.first-page').style.backgroundImage = "url('../img/rabits.jpg')";
// });
// document.querySelector('.s6').addEventListener('mouseout', function () {
//    document.querySelector('.first-page').style.backgroundImage = "";
// });

// document.querySelector('.s7').addEventListener('mouseover', function () {
//    document.querySelector('.first-page').style.backgroundImage = "url('../img/corm.jpg')";
// });
// document.querySelector('.s7').addEventListener('mouseout', function () {
//    document.querySelector('.first-page').style.backgroundImage = "";
// });

const tovars = document.querySelectorAll('.tovar');
const modals = document.querySelectorAll('.modal-window');
const closes = document.querySelectorAll('.close');
const body = document.querySelector('body');

tovars.forEach(function (tovar, index) {
   tovar.addEventListener('click', function (event) {
      if (event.target.classList.contains("dobavka-b")) {
         event.preventDefault();
      } else {
         modals[index].style.display = 'block';
         body.style.overflow = 'hidden';
         body.style.background = 'blur(5px)';
      }
   });
});

closes.forEach(function (close, index) {
   close.addEventListener('click', function () {
      modals[index].style.display = 'none';
      body.style.overflow = 'auto';
      body.style.background = 'none';
   });
});

modals.forEach(function (modal) {
   window.addEventListener('click', function (event) {
      if (event.target === modal) {
         modal.style.display = 'none';
         body.style.overflow = 'auto';
         body.style.background = 'none';
      }
   });
});

$(function () {
   $('.smart-basket__wrapper').smbasket({
      productElement: 'tovar',
      buttonAddToBasket: 'dobavka-b',
      productPrice: 'pris',
      productSize: 'product__size-element',

      productQuantityWrapper: 'product__quantity',
      smartBasketMinArea: 'corsina',
      countryCode: '+7',
      smartBasketCurrency: '₽',
      smartBasketMinIconPath: './smartbasket/img/shopping-basket-wight.svg',

      agreement: {
         isRequired: true,
         isChecked: true,
         isLink: 'https://artstranger.ru/privacy.html',
      },
      nameIsRequired: false,
   });
});