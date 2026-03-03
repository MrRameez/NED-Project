let products = [
    {
        id: 1,
        image: "../images/janan.png",
        Title: "Janan",
        price: 19.00,
        desc: "Janan – Where Elegance Meets Essence.",
        gender: "Male"
    },
    {
        id: 2,
        image: "../images/janan.png",
        Title: "Mystic Noir",
        price: 25.00,
        desc: "Mystic Noir – A mysterious evening fragrance.",
        gender: "Female"
    },
    {
        id: 3,
        image: "../images/janan.png",
        Title: "Royal Oud",
        price: 30.00,
        desc: "Royal Oud – Luxury woody scent for special nights.",
        gender: "Male"
    },
    {
        id: 4,
        image: "../images/janan.png",
        Title: "Velvet Rose",
        price: 28.00,
        desc: "Velvet Rose – Soft floral fragrance for elegance.",
        gender: "Female"
    },
    {
        id: 5,
        image: "../images/janan.png",
        Title: "Golden Amber",
        price: 35.00,
        desc: "Golden Amber – Warm and rich aromatic notes.",
        gender: "Male"
    },
    {
        id: 6,
        image: "../images/janan.png",
        Title: "Mystic Jasmine",
        price: 45.00,
        desc: "Mystic Jasmine – Enchanting fragrance for evenings.",
        gender: "Female"
    }
];
function filterProducts() {
    let name = document.getElementById("productName").value.toLowerCase();
    let gender = document.getElementById("gender").value.toLowerCase();

    let filtered = products.filter(function (product) {
        let nameMatch = true;
        let genderMatch = true;

        if (name !== "") {
            nameMatch = product.Title.toLowerCase().includes(name);
        }

        if (gender !== "") {
            genderMatch = product.gender.toLowerCase() === gender;
        }

        return nameMatch && genderMatch;
    });

    displayProducts(filtered);
}

function displayProducts(data) {
    let container = document.getElementById("productContainer");
    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = "<h2>No Products Found</h2>";
        return;
    }

    data.forEach(function (product) {
        container.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.Title}">
                <h2>${product.Title}</h2>
                <p>${product.desc}</p>
                <h3>$${product.price}</h3>
                <p>${product.gender}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

let cart = []

function addToCart(id) {
    let product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);  // cart array me push kar diya
        alert(`${product.Title} added to cart!`);
        console.log("Cart Items:", cart);
    }
}

// By default show all products
displayProducts(products);