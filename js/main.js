$(function () {
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-left-arrow" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-right-arrow" src="img/arrow-right.svg" alt="">',
        asNavFor: '.slider_child',
        adaptiveHeight: true,
    });
    $('.slider_child').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        dots: true,
            centerMode: true,
            focusOnSelect: true
    });
    $('.works__items').slick({
         slidesToShow: 2,
         infinite: true,
         centerMode: true,
          appendArrows: $('.your-class-arrow'),
         prevArrow: '<img class="slider-left-arrow" src="img/arrow-left.svg" alt="">',
         nextArrow: '<img class="slider-right-arrow" src="img/arrow-right.svg" alt="">',
         adaptiveHeight: true,
        asNavFor: '.shorts',
  responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 2
          }
      }

  ]
     });
     $('.shorts').slick({
         slidesToShow: 1,
         asNavFor: '.works__items',
         dots: true,
         centerMode: true,
         adaptiveHeight: true,
         arrows: false
     });

   

});

// DATA
/* функция добавления ведущих нулей */
/* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

/* функция получения текущей даты и времени */
function date_year() {
    var current_datetime = new Date();
    var year = current_datetime.getFullYear();

    return year;
}

function date_day() {
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());

    return day;
}
function date_month() {
    var current_datetime = new Date();
    var month = zero_first_format(current_datetime.getMonth() + 1);

    return month;
}
/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
document.querySelector('.year').innerHTML = date_year();
document.querySelector('.day').innerHTML = date_day();
document.querySelector('.month').innerHTML = date_month();


//MENU BTN
let menuNav = document.querySelector('#menu__nav');
let menuBtn = document.querySelector('#menu__btn');
menuBtn.addEventListener("click", function () {
    if (menuNav.style.display == 'none') menuNav.style.display = 'block';
    else menuNav.style.display = 'none'

});
