let menu = document.querySelector("#menu");
let screen = document.querySelector("#full-navbar");
let navbar = document.querySelector("nav");
let icon = document.querySelectorAll("nav i");
let btn = document.querySelector("#btn");
let btnlink = document.querySelector("#btn a");
let mediaQuery = window.matchMedia("(max-width: 1024px)");
let shoppincarts = document.querySelector("#shoppingcart")
let showAddToCarts = document.querySelector("#addToCart")



const container = document.querySelector("#product-grid");



let flag = true
let carts = 0;


window.addEventListener("scroll", function () {

    if (!flag && mediaQuery.matches) {
        return;
    }

    if (window.scrollY > 70) {

        navbar.style.backgroundColor = "lightgray";
        btn.style.backgroundColor = "#666666";

        icon.forEach(function (i) {
            i.style.color = "#000";
        });

        if (carts === 0) {
            shoppincarts.style.color = "#000";
        }

    } else {

        navbar.style.backgroundColor = "transparent";

        icon.forEach(function (i) {
            i.style.color = "#dadada";
        });

        if (carts === 0) {
            shoppincarts.style.color = "#dadada";
        } else {
            shoppincarts.style.color = "#000";
        }
    }
});


menu.addEventListener('click', function() {
    // e.preventDefault();
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
        gender: "Male",
        createdAt: new Date()
    },
    {
        id: 2,
        image: "../images/janan.png",
        Title: "Mystic Noir",
        price: 25.00,
        desc: "A mysterious scent for evening elegance.",
        category: "Perfume",
        gender: "Female",
        createdAt: new Date()
    },
    {
        id: 3,
        image: "../images/janan.png",
        Title: "Royal Oud",
        price: 40.00,
        desc: "Luxury oud fragrance.",
        category: "Perfume",
        gender: "Male",
        createdAt: new Date()
    }
];

let butter = "";
// console.log(products);

products.forEach(function (details) {


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
                            ${details.gender}
                        </span>
                    </div>
                </div>
            </div>`;
});
container.innerHTML = butter;

shoppincarts.addEventListener("click", function () {
    // e.preventDefault();
    if (carts === 0) {
        shoppincarts.style.color = "#000000";
        screen.style
        shoppincarts.style.transition = "0.4s ease";
        shoppincarts.classList.remove("ri-shopping-bag-fill");
        shoppincarts.classList.add("ri-close-large-fill");
        showAddToCarts.style.right = "0";
        showAddToCarts.style.backgroundColor = "#dadada";
        carts = 1;
    } else {
        shoppincarts.style.color = "#dadada";
        shoppincarts.classList.remove("ri-close-large-fill");
        shoppincarts.classList.add("ri-shopping-bag-fill");
        showAddToCarts.style.right = "-100%";
        showAddToCarts.style.backgroundColor = "#dadada";
        carts = 0;
    }
});










function filterProducts() {

    let min = document.getElementById("minPrice").value;
    let max = document.getElementById("maxPrice").value;
    let gender = document.getElementById("gender").value;

    let filtered = products.filter(function (product) {

        let priceMatch = true;
        let genderMatch = true;

        if (min !== "") {
            priceMatch = product.price >= Number(min);
        }

        if (max !== "") {
            priceMatch = product.price <= Number(max);
        }

        if (gender !== "") {
            genderMatch = product.gender === gender;
        }

        return priceMatch && genderMatch;
    });

    displayProducts(filtered);
}

function displayProducts(data) {
    console.log(data)

    let container = document.getElementById("productContainer");
    container.innerHTML = "";

    data.forEach(function (product) {

        container.innerHTML += `
            <div class="card">
                <img src="${product.image}" width="150">
                <h2>${product.Title}</h2>
                <p>${product.desc}</p>
                <h3>$${product.price}</h3>
                <p>${product.gender}</p>
            </div>
        `;
    });
}









