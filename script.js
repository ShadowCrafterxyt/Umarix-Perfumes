// ========================================
// UMARIX PERFUMES - COMPLETE JAVASCRIPT
// ========================================

const products = [
    { id: 1, name: "Umarix Black", price: 2999, image: "images/perfume1.jpg", tagline: "Bold & Powerful", description: "A bold fragrance concept for evenings and special occasions.", notes: "Woody, Amber" },
    { id: 2, name: "Umarix Rose", price: 2799, image: "images/perfume2.png", tagline: "Soft & Elegant", description: "A soft floral-inspired fragrance with an elegant character.", notes: "Floral, Soft" },
    { id: 3, name: "Umarix Gold", price: 3199, image: "images/perfume3.png", tagline: "Warm & Refined", description: "A warm, refined fragrance for everyday style.", notes: "Warm, Elegant" },
    { id: 4, name: "Umarix Oud", price: 3299, image: "images/perfume4.png", tagline: "Rich & Woody", description: "A rich woody fragrance with a classic character.", notes: "Woody, Oud" },
    { id: 5, name: "Umarix Ocean", price: 2999, image: "images/perfume5.png", tagline: "Fresh & Aquatic", description: "A fresh aquatic-inspired fragrance.", notes: "Fresh, Aquatic" },
    { id: 6, name: "Umarix Velvet", price: 3199, image: "images/perfume6.png", tagline: "Smooth & Sophisticated", description: "A smooth and elegant fragrance concept.", notes: "Smooth, Elegant" },
    { id: 7, name: "Umarix Royal", price: 3499, image: "images/perfume7.png", tagline: "Regal & Luxurious", description: "A bold fragrance inspired by classic luxury.", notes: "Rich, Warm" },
    { id: 8, name: "Umarix Musk", price: 2999, image: "images/perfume8.png", tagline: "Warm & Memorable", description: "A soft musk-inspired fragrance.", notes: "Musk, Warm" },
    { id: 9, name: "Umarix Noir", price: 3299, image: "images/perfume9.png", tagline: "Dark & Modern", description: "A dark, modern fragrance concept.", notes: "Dark, Modern" },
    { id: 10, name: "Umarix Ember", price: 3299, image: "images/perfume10.png", tagline: "Warm Amber", description: "A warm amber-inspired fragrance.", notes: "Amber, Warm" },
    { id: 11, name: "Umarix Citrus Rush", price: 2799, image: "images/perfume11.png", tagline: "Bright & Fresh", description: "A lively citrus-inspired fragrance.", notes: "Citrus, Fresh" },
    { id: 12, name: "Umarix Aqua Storm", price: 3199, image: "images/perfume12.png", tagline: "Cool & Refreshing", description: "A cool aquatic-inspired fragrance.", notes: "Aquatic, Cool" },
    { id: 13, name: "Umarix Amber Crown", price: 3499, image: "images/perfume13.png", tagline: "Rich & Royal", description: "A rich amber-inspired fragrance.", notes: "Amber, Rich" },
    { id: 14, name: "Umarix Midnight Spice", price: 3299, image: "images/perfume14.png", tagline: "Dark & Spicy", description: "A bold, spicy fragrance concept.", notes: "Spicy, Dark" },
    { id: 15, name: "Umarix Cedar Smoke", price: 3199, image: "images/perfume15.png", tagline: "Woody & Earthy", description: "A woody fragrance inspired by cedar.", notes: "Cedar, Woody" },
    { id: 16, name: "Umarix Bloom Royale", price: 2999, image: "images/perfume16.png", tagline: "Floral & Graceful", description: "A graceful floral-inspired fragrance.", notes: "Floral, Soft" },
    { id: 17, name: "Umarix Vanilla Haze", price: 2999, image: "images/perfume17.png", tagline: "Creamy Vanilla", description: "A creamy vanilla-inspired fragrance.", notes: "Vanilla, Creamy" },
    { id: 18, name: "Umarix Silver Mist", price: 3099, image: "images/perfume18.png", tagline: "Clean & Modern", description: "A crisp, clean fragrance concept.", notes: "Clean, Modern" }
];

// ========================================
// REVIEWS
// ========================================

const demoReviews = {
    1: [
        { name: "Ayaan", rating: 5, text: "The bottle design looks bold and classy." },
        { name: "Ali", rating: 4, text: "Nice product presentation." }
    ],
    10: [
        { name: "Hassan", rating: 5, text: "Love the warm fragrance concept." }
    ],
    17: [
        { name: "Sara", rating: 5, text: "The design looks elegant." }
    ],
    18: [
        { name: "Rayyan", rating: 4, text: "Clean and modern bottle style." }
    ]
};

let activeProduct = null;
let cart = [];
let toastTimer;

// ========================================
// HTML ELEMENTS
// ========================================

const productGrid = document.getElementById("productGrid");
const productModal = document.getElementById("productModal");
const cartDrawer = document.getElementById("cartDrawer");
const toast = document.getElementById("toast");

// ========================================
// PRICE FORMAT
// ========================================

function money(price) {
    return "Rs. " + Number(price).toLocaleString("en-PK");
}

// ========================================
// STAR RATINGS
// ========================================

function stars(rating) {
    const value = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
    return "★".repeat(value) + "☆".repeat(5 - value);
}

// ========================================
// HTML TEXT SAFETY
// ========================================

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

// ========================================
// GET SAVED REVIEWS
// ========================================

function getSavedReviews() {
    try {
        return JSON.parse(localStorage.getItem("umarixReviews") || "{}");
    } catch (error) {
        return {};
    }
}

function allReviewsFor(productId) {
    const savedReviews = getSavedReviews();

    return [
        ...(demoReviews[productId] || []),
        ...(savedReviews[productId] || [])
    ];
}

// ========================================
// DISPLAY PRODUCTS
// ========================================

function renderProducts(searchTerm = "") {
    const term = searchTerm.trim().toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.tagline.toLowerCase().includes(term) ||
        product.notes.toLowerCase().includes(term)
    );

    document.getElementById("collectionCount").textContent =
        `${filteredProducts.length} perfumes`;

    if (filteredProducts.length === 0) {
        productGrid.innerHTML =
            '<p class="empty-state">No perfumes found.</p>';
        return;
    }

    productGrid.innerHTML = filteredProducts.map(product => `
        <article class="product-card">
            <button
                class="product-image-button"
                type="button"
                data-details-product="${product.id}"
                aria-label="View ${escapeHTML(product.name)} details"
            >
                <div class="product-image-wrap">
                    <img
                        src="${product.image}"
                        alt="${escapeHTML(product.name)}"
                        loading="lazy"
                    >
                    <div class="image-fallback" style="display:none">
                        <div class="fallback-bottle">UMARIX</div>
                        <small>PERFUMES</small>
                    </div>
                </div>
            </button>

            <div class="product-info">
                <p class="product-kicker">UMARIX SIGNATURE</p>
                <h3>${escapeHTML(product.name)}</h3>
                <p class="product-tagline">${escapeHTML(product.tagline)}</p>

                <p class="card-rating" data-rating-for="${product.id}"></p>

                <div class="product-bottom">
                    <span class="product-price">${money(product.price)}</span>

                    <button
                        class="details-button"
                        type="button"
                        data-details-product="${product.id}"
                    >
                        Details & Reviews ↗
                    </button>
                </div>
            </div>
        </article>
    `).join("");

    productGrid.querySelectorAll(".product-image-wrap img").forEach(image => {
        image.addEventListener("error", () => {
            image.style.display = "none";
            image.nextElementSibling.style.display = "flex";
        }, { once: true });
    });

    refreshCardRatings();
}

// ========================================
// UPDATE PRODUCT RATINGS
// ========================================

function refreshCardRatings() {
    products.forEach(product => {
        const target = document.querySelector(
            `[data-rating-for="${product.id}"]`
        );

        if (!target) return;

        const reviews = allReviewsFor(product.id);

        if (!reviews.length) {
            target.innerHTML = '☆☆☆☆☆ <span>No reviews yet</span>';
            return;
        }

        const average = reviews.reduce(
            (sum, review) => sum + Number(review.rating), 0
        ) / reviews.length;

        target.innerHTML = `
            ${stars(average)}
            <span>${average.toFixed(1)} · ${reviews.length} reviews</span>
        `;
    });
}

// ========================================
// OPEN PRODUCT DETAILS
// ========================================

function openProductModal(productId) {
    activeProduct = products.find(
        product => product.id === Number(productId)
    );

    if (!activeProduct) return;

    const image = document.getElementById("modalImage");

    image.style.display = "block";
    image.src = activeProduct.image;
    image.alt = activeProduct.name;

    image.onerror = () => {
        image.onerror = null;
        image.style.display = "none";
    };

    document.getElementById("modalTitle").textContent =
        activeProduct.name;

    document.getElementById("modalTagline").textContent =
        activeProduct.tagline;

    document.getElementById("modalNotes").textContent =
        "Notes: " + activeProduct.notes;

    document.getElementById("modalDescription").textContent =
        activeProduct.description;

    document.getElementById("modalPrice").textContent =
        money(activeProduct.price);

    document.getElementById("reviewForm").reset();

    document.getElementById("detailAddButton").onclick = () => {
        addToCart(activeProduct.id);
    };

    renderReviews(activeProduct.id);

    productModal.classList.add("show");
    productModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    document.getElementById("closeProductModal").focus();
}

// ========================================
// CLOSE PRODUCT DETAILS
// ========================================

function closeProductModal() {
    productModal.classList.remove("show");
    productModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    activeProduct = null;
}

// ========================================
// DISPLAY REVIEWS
// ========================================

function renderReviews(productId) {
    const reviews = allReviewsFor(productId);
    const averageTarget = document.getElementById("averageRating");
    const list = document.getElementById("reviewsList");

    if (!reviews.length) {
        averageTarget.textContent = "☆☆☆☆☆ No ratings yet";

        list.innerHTML =
            '<p class="no-reviews">No reviews yet. Be the first!</p>';

        return;
    }

    const average = reviews.reduce(
        (sum, review) => sum + Number(review.rating), 0
    ) / reviews.length;

    averageTarget.textContent =
        `${stars(average)} ${average.toFixed(1)} / 5 · ${reviews.length} reviews`;

    list.innerHTML = reviews.map(review => `
        <article class="review-item">
            <strong>${escapeHTML(review.name || "Guest")}</strong>
            <div class="review-stars">${stars(review.rating)}</div>
            <p>${escapeHTML(review.text)}</p>
        </article>
    `).join("");
}

// ========================================
// SUBMIT A REVIEW
// ========================================

function submitReview(event) {
    event.preventDefault();

    if (!activeProduct) return;

    const form = event.currentTarget;

    const chosenRating = form.querySelector(
        'input[name="rating"]:checked'
    );

    const reviewText =
        document.getElementById("reviewText").value.trim();

    const reviewerName =
        document.getElementById("reviewName").value.trim() || "Guest";

    if (!chosenRating || !reviewText) {
        showToast("Choose a rating and write a review.");
        return;
    }

    const savedReviews = getSavedReviews();
    const productReviews = savedReviews[activeProduct.id] || [];

    productReviews.unshift({
        name: reviewerName,
        rating: Number(chosenRating.value),
        text: reviewText,
        date: new Date().toISOString()
    });

    savedReviews[activeProduct.id] = productReviews.slice(0, 100);

    try {
        localStorage.setItem(
            "umarixReviews",
            JSON.stringify(savedReviews)
        );
    } catch (error) {
        showToast("Could not save review in this browser.");
        return;
    }

    form.reset();
    renderReviews(activeProduct.id);
    refreshCardRatings();

    showToast("Thank you! Your review has been saved.");
}

// ========================================
// ADD PRODUCT TO CART
// ========================================

function addToCart(productId) {
    const product = products.find(
        item => item.id === Number(productId)
    );

    if (!product) return;

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    updateCartCount();
    showToast(product.name + " added to cart.");
}

// ========================================
// UPDATE CART COUNT
// ========================================

function updateCartCount() {
    const count = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    document.getElementById("cartCount").textContent = count;
}

// ========================================
// OPEN CART
// ========================================

function openCart() {
    renderCart();

    cartDrawer.classList.add("show");
    cartDrawer.setAttribute("aria-hidden", "false");
}

// ========================================
// CLOSE CART
// ========================================

function closeCart() {
    cartDrawer.classList.remove("show");
    cartDrawer.setAttribute("aria-hidden", "true");
}

// ========================================
// DISPLAY CART ITEMS
// ========================================

function renderCart() {
    const cartItems = document.getElementById("cartItems");
    let total = 0;

    if (!cart.length) {
        cartItems.innerHTML =
            '<p class="no-reviews">Your cart is empty.</p>';
    } else {
        cartItems.innerHTML = cart.map(item => {
            total += item.price * item.quantity;

            return `
                <div class="cart-item">
                    <div>
                        <h3>${escapeHTML(item.name)}</h3>
                        <p>${money(item.price)} × ${item.quantity}</p>
                    </div>

                    <button
                        type="button"
                        data-remove-product="${item.id}"
                    >
                        Remove
                    </button>
                </div>
            `;
        }).join("");
    }

    document.getElementById("cartTotal").textContent = money(total);

    cartItems.querySelectorAll("[data-remove-product]").forEach(button => {
        button.addEventListener("click", () => {
            const productId = Number(button.dataset.removeProduct);

            cart = cart.filter(item => item.id !== productId);

            updateCartCount();
            renderCart();
        });
    });
}

// ========================================
// SHOW NOTIFICATION
// ========================================

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}

// ========================================
// PRODUCT DETAILS BUTTONS
// ========================================

productGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-details-product]");

    if (button) {
        openProductModal(button.dataset.detailsProduct);
    }
});

// ========================================
// SEARCH PRODUCTS
// ========================================

document.getElementById("searchInput").addEventListener("input", event => {
    renderProducts(event.target.value);
});

// ========================================
// REVIEW FORM
// ========================================

document.getElementById("reviewForm").addEventListener(
    "submit",
    submitReview
);

// ========================================
// MODAL AND CART BUTTONS
// ========================================

document.getElementById("closeProductModal").addEventListener(
    "click",
    closeProductModal
);

document.getElementById("openCartButton").addEventListener(
    "click",
    openCart
);

document.getElementById("closeCartButton").addEventListener(
    "click",
    closeCart
);

// ========================================
// CLOSE MODAL BY CLICKING BACKGROUND
// ========================================

productModal.addEventListener("click", event => {
    if (event.target === productModal) {
        closeProductModal();
    }
});

// ========================================
// ESCAPE KEY
// ========================================

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeProductModal();
        closeCart();
    }
});

// ========================================
// DEMO CHECKOUT
// ========================================

document.getElementById("checkoutButton").addEventListener("click", () => {
    if (!cart.length) {
        showToast("Your cart is empty.");
        return;
    }

    showToast("Demo checkout only. Online payment is not connected.");
});

// ========================================
// CURRENT YEAR IN FOOTER
// ========================================

document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// ========================================
// INITIALIZE WEBSITE
// ========================================

renderProducts();
updateCartCount();
