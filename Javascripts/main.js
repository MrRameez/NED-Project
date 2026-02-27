let navbar = document.querySelector("nav");
let input = document.querySelector("#input");
let icon = document.querySelectorAll("nav i");
let btn = document.querySelector("#btn");
let btnlink = document.querySelector("#btn a");



window.addEventListener("scroll", function () {

    if (window.scrollY > 70) {
        navbar.style.backgroundColor = "lightgray";
        icon.forEach( function(i){
            i.style.color = "#000";
        })
        input.style.backgroundColor = "#666666";
        btn.style.backgroundColor = "#666666";
    }
    if (window.scrollY <= 70) {
        navbar.style.backgroundColor = "transparent";
        icon.forEach( function(i){
            i.style.color = "#dadada";
        })
        // btnlink.style.color = "#000";
        input.style.backgroundColor = "transparent";
        // btn.style.backgroundColor = "transparent";
    }

});