// =================== DOM References ===================
let menu = document.querySelector("#menu");
let screen = document.querySelector("#full-navbar");
let navbar = document.querySelector("nav");
let icon = document.querySelectorAll("nav i");
let btn = document.querySelector("#btn");
let btnlink = document.querySelector("#btn a");
let mediaQuery = window.matchMedia("(max-width: 1024px)");
let shoppincarts = document.querySelector("#shoppingcart");
let showAddToCarts = document.querySelector("#addToCart");
const container = document.querySelector("#product-grid");
const productContainer = document.querySelector("#productContainer");
const cartContainer = document.querySelector("#container"); // ye #addToCart ke andar wala div hai

let flag = true;
let carts = 0;

// =================== Scroll Navbar ===================
window.addEventListener("scroll", function () {
    if (!flag && mediaQuery.matches) return;

    if (window.scrollY > 70) {
        navbar.style.backgroundColor = "lightgray";
        if (btn) btn.style.backgroundColor = "#666666";
        icon.forEach(i => i.style.color = "#000");
        if (carts === 0 && shoppincarts) shoppincarts.style.color = "#000";
    } else {
        navbar.style.backgroundColor = "transparent";
        icon.forEach(i => i.style.color = "#dadada");
        if (shoppincarts) shoppincarts.style.color = carts === 0 ? "#dadada" : "#000";
    }
});

// =================== Menu Toggle ===================
if (menu && screen) {
    menu.addEventListener("click", function () {
        if (flag) {
            menu.style.color = "#000";
            icon.forEach(i => i.style.color = "#000");
            menu.classList.replace("ri-menu-line", "ri-close-large-fill");
            screen.style.top = "0";
            screen.style.backgroundColor = "#dadada";
            flag = false;
        } else {
            menu.style.color = "#dadada";
            icon.forEach(i => i.style.color = "#dadada");
            menu.classList.replace("ri-close-large-fill", "ri-menu-line");
            screen.style.top = "-100%";
            flag = true;
        }
    });
}

// =================== Products ===================
let products = [
    {
        id: 1,
        image: "../images/Janan.jpg",
        Title: "Janan",
        price: 19.00,
        desc: "Janan – Where Elegance Meets Essence.",
        category: "Perfume",
        gender: "Male",
        createdAt: new Date()
    },
    {
        id: 2,
        image: "../images/Mystic Noir.jpg",
        Title: "Mystic Noir",
        price: 25.00,
        desc: "A mysterious scent for evening elegance.",
        category: "Perfume",
        gender: "Female",
        createdAt: new Date()
    },
    {
        id: 3,
        image: "../images/Royal Oud.jpg",
        Title: "Royal Oud",
        price: 40.00,
        desc: "Luxury oud fragrance for bold personalities.",
        category: "Perfume",
        gender: "Male",
        createdAt: new Date()
    },
    {
        id: 4,
        image: "../images/Velvet Rose.jpg",
        Title: "Velvet Rose",
        price: 30.00,
        desc: "Soft floral fragrance with rose essence.",
        category: "Perfume",
        gender: "Female",
        createdAt: new Date()
    },
    {
        id: 5,
        image: "../images/Ocean Breeze.jpg",
        Title: "Ocean Breeze",
        price: 22.00,
        desc: "Fresh aquatic fragrance for daily wear.",
        category: "Perfume",
        gender: "Male",
        createdAt: new Date()
    },
    {
        id: 6,
        image: "../images/Golden Amber.jpg",
        Title: "Golden Amber",
        price: 35.00,
        desc: "Warm amber scent with rich tones.",
        category: "Perfume",
        gender: "Female",
        createdAt: new Date()
    },
    {
        id: 7,
        image: "../images/Midnight Musk.jpg",
        Title: "Midnight Musk",
        price: 28.00,
        desc: "Deep musk fragrance for night events.",
        category: "Perfume",
        gender: "Male",
        createdAt: new Date()
    },
    {
        id: 8,
        image: "../images/Floral bliss.jpg",
        Title: "Floral Bliss",
        price: 24.00,
        desc: "Refreshing floral bouquet scent.",
        category: "Perfume",
        gender: "Female",
        createdAt: new Date()
    },
    {
        id: 9,
        image: "../images/Desert Oud.jpg",
        Title: "Desert Oud",
        price: 45.00,
        desc: "Strong oud fragrance with woody base.",
        category: "Perfume",
        gender: "Male",
        createdAt: new Date()
    },
    {
        id: 10,
        image: "../images/Pink Bloom.jpg",
        Title: "Pink Bloom",
        price: 27.00,
        desc: "Light and sweet fragrance for daytime.",
        category: "Perfume",
        gender: "Female",
        createdAt: new Date()
    },
    {
        id: 11,
        image: "../images/Silver Storm.jpg",
        Title: "Silver Storm",
        price: 33.00,
        desc: "Energetic scent with citrus burst.",
        category: "Perfume",
        gender: "Male",
        createdAt: new Date()
    },
    {
        id: 12,
        image: "../images/Lavender Dream.jpg",
        Title: "Lavender Dream",
        price: 26.00,
        desc: "Calming lavender-based perfume.",
        category: "Perfume",
        gender: "Female",
        createdAt: new Date()
    },
    {
        id: 13,
        image: "../images/Black Intense.jpg",
        Title: "Black Intense",
        price: 50.00,
        desc: "Strong masculine intense fragrance.",
        category: "Perfume",
        gender: "Male",
        createdAt: new Date()
    },
    {
        id: 14,
        image: "../images/pearl Essence.jpg",
        Title: "Pearl Essence",
        price: 29.00,
        desc: "Elegant fragrance with soft sweetness.",
        category: "Perfume",
        gender: "Female",
        createdAt: new Date()
    },
    {
        id: 15,
        image: "../images/Urban Legend.jpg",
        Title: "Urban Legend",
        price: 31.00,
        desc: "Modern city-inspired fragrance.",
        category: "Perfume",
        gender: "Male",
        createdAt: new Date()
    },
    {
        id: 16,
        image: "../images/Sweet Vanilla.jpg",
        Title: "Sweet Vanilla",
        price: 23.00,
        desc: "Vanilla-infused romantic scent.",
        category: "Perfume",
        gender: "Female",
        createdAt: new Date()
    },
    {
        id: 17,
        image: "../images/Dark Knight.jpg",
        Title: "Dark Knight",
        price: 38.00,
        desc: "Bold and powerful evening fragrance.",
        category: "Perfume",
        gender: "Male",
        createdAt: new Date()
    },
    {
        id: 18,
        image: "../images/Cherry Blossom.jpg",
        Title: "Cherry Blossom",
        price: 32.00,
        desc: "Fresh floral fragrance inspired by spring.",
        category: "Perfume",
        gender: "Female",
        createdAt: new Date()
    },
    {
        id: 19,
        image: "../images/Classic Wood.jpg",
        Title: "Classic Wood",
        price: 34.00,
        desc: "Timeless woody fragrance.",
        category: "Perfume",
        gender: "Male",
        createdAt: new Date()
    }
];





// Only render if container exists
if (container) {
    let butter = "";
    products.forEach(details => {
        butter += `<div class="card">
            <img src="${details.image}" alt="${details.Title}">
            <div class="card-content">
                <h2>${details.category}</h2>
                <h1>${details.Title}</h1>
                <p>${details.desc}</p>
                <p>Added: ${details.createdAt.toLocaleDateString()}</p>
                <div class="card-footer">
                    <span class="price">$${details.price.toFixed(2)}</span>
                    <span class="learn-more">${details.gender}</span>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = butter;
}

// =================== Shopping Cart Toggle ===================
if (shoppincarts && showAddToCarts) {
    shoppincarts.addEventListener("click", function () {
        if (carts === 0) {
            shoppincarts.style.color = "#000";
            shoppincarts.classList.replace("ri-shopping-bag-fill", "ri-close-large-fill");
            showAddToCarts.style.right = "0%";
            showAddToCarts.style.backgroundColor = "#dadada";
            carts = 1;
        } else {
            shoppincarts.style.color = "#dadada";
            shoppincarts.classList.replace("ri-close-large-fill", "ri-shopping-bag-fill");
            showAddToCarts.style.right = "-100%";
            showAddToCarts.style.backgroundColor = "#dadada";
            carts = 0;
        }
    });
}




// ==========================
// RENDER PRODUCTS
// ==========================
function renderProducts(data = products) {

    if (!productContainer) return;

    productContainer.innerHTML = "";

    if (data.length === 0) {
        productContainer.innerHTML = "<h2>No Products Found</h2>";
        return;
    }

    data.forEach(product => {
        productContainer.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.Title}">
        <div class="card-content">
          <h2>${product.category}</h2>
          <h1>${product.Title}</h1>
          <p>${product.desc}</p>
          <h3>$${product.price.toFixed(2)}</h3>
          <span class="learn-more">${product.gender}</span>
          <button class="add-to-cart" onclick="addToCart(${product.id})">
            Add to Cart
          </button>
        </div>
      </div>
    `;
    });
}

renderProducts();

// ==========================
// FILTER FUNCTION (for product.html)
// ==========================

function filterProducts() {

    let nameInput = document.getElementById("productName")?.value.toLowerCase() || "";
    let genderInput = document.getElementById("gender")?.value || "";

    let filtered = products.filter(product => {

        let matchName = product.Title.toLowerCase().includes(nameInput);
        let matchGender = genderInput === "" || product.gender === genderInput;

        return matchName && matchGender;
    });

    renderProducts(filtered);
}


// ==========================
// CART SYSTEM
// ==========================

let cart = [];

function addToCart(id) {

    let product = products.find(p => p.id === id);
    if (!product) return;

    let existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
}
console.log();

function updateCartUI() {

    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<h2 style='text-align:center'>Cart is Empty</h2>";
        return;
    }

    cart.forEach(product => {

        total += product.price * product.quantity;

        cartContainer.innerHTML += `
       <div id="showProduct">
                    <div id="productNameInfo">
                        <div id="Imagebox">
                            <img src="${product.image}" alt="">
                        </div>
                        <div id="productinfo">
                            <h3>${product.Title}</h3>
                            <h4>Price : ${product.price}</h4>
                            <h5>Quantity : <span>${product.quantity}</span></h5>
                        </div>
                    </div>
                    <div id="productDeleteIcon">
                        <i class="ri-delete-bin-6-line" onclick="removeFromCart(${product.id})"></i>
                    </div>
                </div>
    `;
    });

    cartContainer.innerHTML += `
    <div id="buttom">
                    <h1><button><a href="./detail.html">Order Now</a></button></h1>
                    <h2>Total: <span>$${total.toFixed(2)}</span></h2>
                </div>
  `;
}


function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}



