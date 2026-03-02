let menu = document.querySelector("#menu");
let screen = document.querySelector("#full-navbar");

let navbar = document.querySelector("nav");
let icon = document.querySelectorAll("nav i");
let btn = document.querySelector("#btn");
let btnlink = document.querySelector("#btn a");

let mediaQuery = window.matchMedia("(min-width: 768px)");
const container = document.querySelector("#product-grid");




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

menu.addEventListener("click", function(e){
    e.preventDefault();
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
    let products = [
        {
            id: 1,
            image: "../images/janan.png",
            Title: "Janan",
            price: 19.00,
            desc: "Janan – Where Elegance Meets Essence.",
            category: "Perfume",
            createdAt: new Date()
        },
        {
            id: 2,
            image: "../images/janan.png",
            Title: "Mystic Noir",
            price: 25.00,
            desc: "A mysterious scent for evening elegance.",
            category: "Perfume",
            createdAt: new Date()
        },
        {
            id: 1,
            image: "../images/janan.png",
            Title: "Janan",
            price: 19.00,
            desc: "Janan – Where Elegance Meets Essence.",
            category: "Perfume",
            createdAt: new Date()
        },
        {
            id: 1,
            image: "../images/janan.png",
            Title: "Janan",
            price: 19.00,
            desc: "Janan – Where Elegance Meets Essence.",
            category: "Perfume",
            createdAt: new Date()
        },
        {
            id: 1,
            image: "../images/janan.png",
            Title: "Janan",
            price: 19.00,
            desc: "Janan – Where Elegance Meets Essence.",
            category: "Perfume",
            createdAt: new Date()
        },
        {
            id: 1,
            image: "../images/janan.png",
            Title: "Janan",
            price: 19.00,
            desc: "Janan – Where Elegance Meets Essence.",
            category: "Perfume",
            createdAt: new Date()
        },
        {
            id: 1,
            image: "../images/janan.png",
            Title: "Janan",
            price: 19.00,
            desc: "Janan – Where Elegance Meets Essence.",
            category: "Perfume",
            createdAt: new Date()
        },
        {
            id: 1,
            image: "../images/janan.png",
            Title: "Janan",
            price: 19.00,
            desc: "Janan – Where Elegance Meets Essence.",
            category: "Perfume",
            createdAt: new Date()
        },
       
    ];
        let butter = "";
        // console.log(products);
        
        products.forEach(function(details) {


            // console.log("product details", details);
            
            butter += `<div class="card">
                <img src="${details.image}" alt="${details.Title}">
                <div class="card-content">
                    <h2>${details.category}</h2>
                    <h1>${details.Title}</h1>
                    <p>${details.desc}</p>
                    <p>Added: ${details.createdAt.toLocaleDateString()}</p>
                    <div class="card-footer">
                        <span class="price">$${details.price.toFixed(2)}</span>
                        <span class="learn-more">
                            Learn More
                        </span>
                    </div>
                </div>
            </div>`;
        });

        container.innerHTML = butter;