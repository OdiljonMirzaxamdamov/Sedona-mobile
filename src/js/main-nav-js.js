
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
// var link = document.querySelector('.main-nav__user-login');
// var popup = document.querySelector(".modal-login");
// var close = popup.querySelector(".modal-login__close");
// var form = popup.querySelector("form");
// var login = popup.querySelector("[name=login]");
// var password = popup.querySelector("[name=password]");
// var storage = localStorage.getItem("login")

    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('main-nav--closed')) {
            navMain.classList.remove('main-nav--closed');
            navMain.classList.add('main-nav--opened');
        } else {
            navMain.classList.add('main-nav--closed');
            navMain.classList.remove('main-nav--opened');
        }
    });


//     link.addEventListener("click", function(event) {
//     event.preventDefault();
//     popup.classList.add("modal-login--show");
// });
//
//     close.addEventListener("click", function(event) {
//     event.preventDefault();
//     popup.classList.remove("modal-login--show");
// });
