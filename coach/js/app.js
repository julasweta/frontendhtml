// Carousel Swiper
 var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
console.log('PRIVET');

//Form
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myForm").style.position = 'fixed';
  document.getElementById("myForm").style.bottom = 0;
  document.getElementById("myForm").style.zIndex = 1;
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


// HTML
var price = document.getElementsByClassName('prise');
console.log(price[0].textContent);
for(i=0; i<3;i++)
if (price[i].textContent == 'free') {
  price[i].style.color = 'rgb(30, 175, 19)';
}

//MENU
/* function menu(){
var menu = document.getElementById('menu_nav');
var navbar = document.getElementById('navbar');
//navbar.style.display = "none";
menu.style.display = "block";
if(navbar[onclick]){
  menu.style.display = "none";
} */

var menu = document.querySelector('#menu_nav');
var navbar = document.querySelector('#navbar');
navbar.addEventListener("click", function () {
console.log('Navbar');
  if (menu.style.display == 'none') menu.style.display = 'block';
  else menu.style.display = 'none'

});


function menu_close(){
 var menu = document.getElementById('menu_nav');
 var navbar = document.getElementById('navbar');
 navbar.style.display = "block";
 menu.style.display = "none";

}


// INCLUDE JS
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
//include("../../node_modules/bootstrap/js/boots");
