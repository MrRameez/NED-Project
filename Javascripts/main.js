let menu = document.querySelector("#menu");
let screen = document.querySelector("#full-navbar");

let navbar = document.querySelector("nav");
let icon = document.querySelectorAll("nav i");
let btn = document.querySelector("#btn");
let btnlink = document.querySelector("#btn a");

let mediaQuery = window.matchMedia("(min-width: 768px)");




window.addEventListener("scroll", function () {

    if (window.scrollY > 70) {
        navbar.style.backgroundColor = "lightgray";
        icon.forEach(function (i) {
            i.style.color = "#000";
        })
        btn.style.backgroundColor = "#666666";
    }
    if (window.scrollY <= 70) {
        navbar.style.backgroundColor = "transparent";
        icon.forEach(function (i) {
            i.style.color = "#dadada";
        })

    }
});


let flag = true
menu.addEventListener('click', function () {





    if (flag) {
        menu.style.color = "#000000";
        icon.forEach(function (i) {
            i.style.color = "#000";
        })
        screen.style
        menu.style.transition = "0.4s ease";
        menu.classList.remove("ri-menu-line");
        menu.classList.add("ri-close-large-fill");
        screen.style.top = "0";
        screen.style.backgroundColor = "#dadada";
        flag = false;
    } else {
        menu.style.color = "#dadada";
        icon.forEach(function (i) {
            i.style.color = "#dadada";
        })
        screen.style.backgroundColor = "#dadada";
        menu.classList.remove("ri-close-large-fill");
        menu.classList.add("ri-menu-line");
        screen.style.top = "-100%";
        flag = true;
    }

    
});