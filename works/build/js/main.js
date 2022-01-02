$(function () {
    // Включает / выключает кнопки /Расстояние до метро


     $('#loc5').on('change', function () {
         if ($(this).prop('checked')) {
             $('.location').prop('checked', false);
         }
     });
     $('.location').on('change', function () {
         if ($(this).prop('checked')) {
             $('.location2').prop('checked', false);
         }
     });

/* ВЫКЛЮЧИТЬ ВСЕ РАДИО И ЧЕКБОКСЫ / reset */
    $('.reset').on('click', function () {
        $('.location, .location2, .radio-real, .checkbox-real').prop('checked', false);
    })

    /* Сайдбар -Показать еще- */
    var checkbox_showAll = $('.checkbox__showAll');
    var show_all = $('.show__all');
    checkbox_showAll.on('click', function () {
        show_all.toggleClass('show');
        if (checkbox_showAll.text().trim() === 'Показать еще')
        {
            checkbox_showAll.text('Close');
        } else {
            checkbox_showAll.text('Показать еще ');
        }

    });

    /* Блок -Показать еще- */
    var btn_more = $('.btn__more');
    var show_allblock = $('.show__all-block');
    btn_more.on('click', function () {
        show_allblock.toggleClass('showblock');
    });


    /* ПОКАЗАТЬ ИЛИ СКРЫТЬ РАДОИ И ЧЕКБОКСЫ */

    var vidgets = $('.vidget__title');

    vidgets.on('click', function () {
        $(this).toggleClass('special');
        $(this).next().toggleClass('endshow')

    })




    /* MENU MEDIA */
    document.querySelector('.menu-icon-wrapper').onclick = function () {
        document.querySelector('.menu-icon').classList.toggle('menu-icon-active');

        var menu = document.querySelector('.sidebar');
        console.log(menu.style.transform);
        if (menu.style.transform == ('translateX(0%)')) {
            menu.style.transform = ('translateX(-150%)');
        } else {
            menu.style.transform = ('translateX(0%)')
        }
    }


});
