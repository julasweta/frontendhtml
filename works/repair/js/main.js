$(function () {
    $('.gallery').slick({
        slidesToShow: 1,
        //infinite: true,
        prevArrow: '<img class="slider-left-arrow" src="../img/next_button.png" alt="">',
        nextArrow: '<img class="slider-right-arrow" src="../img/next_button.png" alt="">',
        adaptiveHeight: true,
        //asNavFor: '.shorts',
        //dots: true,
        // customPaging: function (slick, index) {
        //     var targetImage = slick.$slides.eq(index).find('img').attr('src');
        //     return '<img src=" ' + targetImage + ' "/>';
        // }
    });



    $('[data-fancybox]').fancybox({
        thumbs: {
            autoStart: true,
            "imageScale": true,
        }
    })


    // MENU adaptive
    $('.menu__btn').on('click', function () {
        $('.menu__box').toggleClass('menu__box-active');
    })

    /* INNER APPARTMENT  */
    $('.inner__appartment-link').on('click', function () {

        $('.disable__ap').toggleClass('active__ap');

    })

    // заказать звонок MODAL

    $(".gallery2").fancybox({
        "padding": 20,
        "frameWidth": 700,
        "frameHeight": 600,
        "overlayOpacity": 0.8,

    });


    /*TABLE SORT */

    var input, filter, table, tr, td, td2, i, j;
    input = $('.myInput');
    //filter = input.value.toUpperCase();

    table = document.getElementById("table-id");
    tr = table.getElementsByTagName("tr");

 $('.myInput').on('click', function () {

     if (!$(this).hasClass('myInput-plus')) {
         $(this).addClass('myInput-plus');
         $('.myInput-plus').html('Показывать все');
         filter = '-';

         // Loop through all table rows, and hide those who don't match the search query
         for (i = 0; i < tr.length; i++) {
             td = tr[i].getElementsByTagName("td")[1];
             td2 = tr[i].getElementsByTagName("td")[2];
             console.log(td);
             console.log(td2)
                 if (td || td2) {
                     if ((td.innerHTML.toUpperCase().indexOf(filter) > -1) || (td2.innerHTML.toUpperCase().indexOf(filter) > -1)) {
                         tr[i].style.display = "";
                     } else {
                         tr[i].style.display = "none";
                     }
             }

             }


         /// Возвращаем таблицу в прежнее состояние
     } else {
         $(this).removeClass('myInput-plus');
         $('.myInput').html('Показывать только отличающиеся ');
         for (i = 0; i < tr.length; i++) {
             td = tr[i].getElementsByTagName("td")[1];
             if (td) {
                 if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                     tr[i].style.display = "";
                 } else {
                     tr[i].style.display = "table-row";
                 }
             }

         }


     }

 })







})
