$(function(){


// status online
var elements = document.querySelectorAll(".blog__item-time");
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i]);
            if (elements[i].textContent === 'just now') {
                var div = document.createElement('div');
                div.className = 'img3';
                elements[i].appendChild(div);

            } else {
                 var div = document.createElement('div');
                 div.className = 'img2';
                 elements[i].appendChild(div);
            }

}
// blog__item-button

    $(".blog__item-button").on('click', function () {

        $(this).toggleClass('.btn_unread');

 $(this).parent().siblings().toggleClass('hidden')
        if ($(this).text() == 'Dismiss all') {
     $(this).html('Open All')
        } else {
            $(this).html('Dismiss all')
}

    })



});

//MENU BTN
let menuNav = document.querySelector('#menu__nav');
let menuBtn = document.querySelector('#menu__btn');
menuBtn.addEventListener("click", function () {
    if (menuNav.style.display == 'none') menuNav.style.display = 'block';
    else menuNav.style.display = 'none'

});
