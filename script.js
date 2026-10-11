const products = [
    {
        id: 1,
        name: "Umarix Black",
        price: 2999,
        image: "images/perfume1.jpg",
        tagline: "Bold & powerful fragrance",
        description: "A confident, deep scent for evenings and special occasions.",
        notes: "Woody • Amber"
    },
    {
        id: 2,
        name: "Umarix Rose",
        price: 2799,
        image: "images/perfume2.png",
        tagline: "Soft & elegant fragrance",
        description: "A soft floral-inspired fragrance with an elegant character.",
        notes: "Floral • Soft"
    },
    {
        id: 3,
        name: "Umarix Gold",
        price: 3199,
        image: "images/perfume3.png",
        tagline: "Warm & refined fragrance",
        description: "A warm, refined fragrance for everyday use.",
        notes: "Warm • Elegant"
    },
    {
        id: 4,
        name: "Umarix Oud",
        price: 3299,
        image: "images/perfume4.png",
        tagline: "Rich & woody fragrance",
        description: "A rich woody fragrance with a classic character.",
        notes: "Woody • Oud"
    },
    {
        id: 5,
        name: "Umarix Ocean",
        price: 2999,
        image: "images/perfume5.png",
        tagline: "Fresh & aquatic fragrance",
        description: "A fresh, aquatic-inspired fragrance.",
        notes: "Fresh • Aquatic"
    },
    {
        id: 6,
        name: "Umarix Velvet",
        price: 3199,
        image: "images/perfume6.png",
        tagline: "Smooth & sophisticated",
        description: "A smooth and elegant fragrance concept.",
        notes: "Smooth • Elegant"
    },
    {
        id: 7,
        name: "Umarix Royal",
        price: 3499,
        image: "images/perfume7.png",
        tagline: "Regal & luxurious",
        description: "A bold fragrance concept inspired by classic luxury.",
        notes: "Rich • Warm"
    },
    {
        id: 8,
        name: "Umarix Musk",
        price: 2999,
        image: "images/perfume8.png",
        tagline: "Warm & memorable",
        description: "A soft musk-inspired fragrance concept.",
        notes: "Musk • Warm"
    },
    {
        id: 9,
        name: "Umarix Noir",
        price: 3299,
        image: "images/perfume9.png",
        tagline: "Dark & modern",
        description: "A dark, modern fragrance concept.",
        notes: "Dark • Modern"
    },
    {
        id: 10,
        name: "Umarix Ember",
        price: 3299,
        image: "images/perfume10.png",
        tagline: "Warm amber fragrance",
        description: "A warm amber-inspired fragrance concept.",
        notes: "Amber • Warm"
    },
    {
        id: 11,
        name: "Umarix Citrus Rush",
        price: 2799,
        image: "images/perfume11.png",
        tagline: "Bright & fresh",
        description: "A lively citrus-inspired fragrance concept.",
        notes: "Citrus • Fresh"
    },
    {
        id: 12,
        name: "Umarix Aqua Storm",
        price: 3199,
        image: "images/perfume12.png",
        tagline: "Cool ocean fragrance",
        description: "A cool, aquatic-inspired fragrance concept.",
        notes: "Aquatic • Cool"
    },
    {
        id: 13,
        name: "Umarix Amber Crown",
        price: 3499,
        image: "images/perfume13.png",
        tagline: "Rich & royal",
        description: "A rich amber-inspired fragrance concept.",
        notes: "Amber • Rich"
    },
    {
        id: 14,
        name: "Umarix Midnight Spice",
        price: 3299,
        image: "images/perfume14.png",
        tagline: "Dark spicy fragrance",
        description: "A bold, spicy fragrance concept for evenings.",
        notes: "Spicy • Dark"
    },
    {
        id: 15,
        name: "Umarix Cedar Smoke",
        price: 3199,
        image: "images/perfume15.png",
        tagline: "Woody & earthy",
        description: "A woody fragrance concept inspired by cedar.",
        notes: "Cedar • Woody"
    },
    {
        id: 16,
        name: "Umarix Bloom Royale",
        price: 2999,
        image: "images/perfume16.png",
        tagline: "Floral fragrance",
        description: "A graceful floral-inspired fragrance concept.",
        notes: "Floral • Soft"
    },
    {
        id: 17,
        name: "Umarix Vanilla Haze",
        price: 2999,
        image: "images/perfume17.png",
        tagline: "Creamy vanilla fragrance",
        description: "A creamy vanilla-inspired fragrance concept.",
        notes: "Vanilla • Creamy"
    },
    {
        id: 18,
        name: "Umarix Silver Mist",
        price: 3099,
        image: "images/perfume18.png",
        tagline: "Clean & modern",
        description: "A crisp, clean fragrance concept.",
        notes: "Clean • Modern"
    }
];

let cart = [];
let activeProduct = null;

const demoReviews = {
    1: [
        {
            name: "Ayaan",
            rating: 5,
            text: "The bottle design looks bold and classy."
        },
        {
            name: "M. Ali",
            rating: 4,
            text: "Nice product presentation."
        }
    ],
    10: [
        {
            name: "Hassan",
            rating: 5,
            text: "Love the warm amber-inspired concept."
        }
    ],
    17: [
        {
            name: "Sara",
            rating: 5,
            text: "The cream and gold design looks elegant."
        }
    ],
    18: [
        {
            name: "Rayyan",
            rating: 4,
            text: "Clean and modern bottle style."
        }
    ]
};

// Close the welcome popup.
function closePopup() {
    const popup = document.getElementById("welcomePopup");

    if (popup) {
        popup.style.display = "none";
    }
}

// Read reviews saved in this browser.
function getSavedReviews() {
    try {
        return JSON.parse(
            localStorage.getItem("umarixReviews") || "{}"
        );
    } catch (error) {
        return {};
    }
}

// Combine demo reviews with reviews submitted by visitors.
function allReviewsFor(productId) {
    const saved = getSavedReviews();

    return [
        ...(demoReviews[productId] || []),
        ...(saved[productId] || [])
    ];
}

// Display stars.
function stars(value) {
    value = Math.max(0, Math.min(5, Number(value) || 0));

    return "★".repeat(value) + "☆".repeat(5 - value);
}

// Format prices.
function money(value) {
    return "Rs. " + Number(value).toLocaleString("en-PK");
}

// Refresh ratings shown on product cards.
function refreshCardRatings() {
    products.forEach(product => {
        const reviews = allReviewsFor(product.id);

        const target = document.querySelector(
            `[data-rating-for="${product.id}"]`
        );

        if (!target) return;

        if (!reviews.length) {
            target.innerHTML =
                `☆☆☆☆☆ <span>No ratings yet</span>`;

            return;
        }

        const average = reviews.reduce(
            (sum, review) => sum + Number(review.rating),
            0
        ) / reviews.length;

        target.innerHTML =
            `${stars(Math.round(average))}
            <span>${average.toFixed(1)} (${reviews.length}
            ${reviews.length === 1 ? "review" : "reviews"})</span>`;
    });
}

// Open product details.
function openProductModal(productId) {
    activeProduct = products.find(
        product => product.id === Number(productId)
    );

    if (!activeProduct) return;

    document.getElementById("modalImage").src =
        activeProduct.image;

    document.getElementById("modalImage").alt =
        activeProduct.name + " perfume bottle";

    document.getElementById("modalTitle").textContent =
        activeProduct.name;

    document.getElementById("modalNotes").textContent =
        activeProduct.notes;

    document.getElementById("modalDescription").textContent =
        activeProduct.description;

    document.getElementById("modalPrice").textContent =
        money(activeProduct.price);

    document.getElementById("detailAddButton").onclick = () => {
        addToCart(activeProduct.id);
    };

    document.getElementById("reviewForm").reset();

    renderReviews(activeProduct.id);

    const modal = document.getElementById("productModal");

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

// Close product details.
function closeProductModal() {
    const modal = document.getElementById("productModal");

    if (!modal) return;

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    activeProduct = null;
}

// Display product reviews.
function renderReviews(productId) {
    const reviews = allReviewsFor(productId);

    const averageTarget =
        document.getElementById("averageRating");

    const list = document.getElementById("reviewsList");

    if (!reviews.length) {
        averageTarget.textContent = "☆☆☆☆☆ No ratings yet";

        list.innerHTML =
            '<p class="no-reviews">No reviews yet. Be the first to leave one!</p>';

        return;
    }

    const average = reviews.reduce(
        (sum, review) => sum + Number(review.rating),
        0
    ) / reviews.length;

    averageTarget.textContent =
        `${stars(Math.round(average))} ${average.toFixed(1)} / 5 ·
        ${reviews.length} ${reviews.length === 1 ? "review" : "reviews"}`;

    list.innerHTML = reviews.map(review => `
        <article class="review-item">
            <strong>${escapeHTML(review.name || "Guest")}</strong>

            <div class="review-stars">
                ${stars(Number(review.rating))}
            </div>

            <p>${escapeHTML(review.text)}</p>
        </article>
    `).join("");
}

// Protect the page when displaying visitor-written text.
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

// Submit a product review.
document.getElementById("reviewForm").addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        if (!activeProduct) return;

        const chosen = this.querySelector(
            'input[name="rating"]:checked'
        );

        const reviewText =
            document.getElementById("reviewText").value.trim();

        if (!chosen || !reviewText) {
            showCartMessage(
                "Please choose a star rating and write a review."
            );

            return;
        }

        const name =
            document.getElementById("reviewName").value.trim()
            || "Guest";

        const saved = getSavedReviews();

        const list = saved[activeProduct.id] || [];

        list.unshift({
            name: name,
            rating: Number(chosen.value),
            text: reviewText,
            date: new Date().toISOString()
        });

        saved[activeProduct.id] = list.slice(0, 100);

        try {
            localStorage.setItem(
                "umarixReviews",
                JSON.stringify(saved)
            );
        } catch (error) {
            showCartMessage(
                "Could not save review in this browser."
            );

            return;
        }

        this.reset();

        renderReviews(activeProduct.id);
        refreshCardRatings();

        showCartMessage(
            "Thanks! Your review was saved on this browser."
        );
    }
);

// Add a product to the cart.
function addToCart(productId) {
    const product = products.find(
        item => item.id === Number(productId)
    );

    if (!product) return;

    const existing = cart.find(
        item => item.id === product.id
    );

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    updateCart();

    showCartMessage(product.name + " added to cart!");
}

// Update the cart counter.
function updateCart() {
    const count = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    document.getElementById("cartCount").textContent = count;
}

// Open cart and display its items.
function openCart() {
    const items = document.getElementById("cartItems");
    const totalTarget = document.getElementById("cartTotal");

    items.innerHTML = "";

    let total = 0;

    if (!cart.length) {
        items.innerHTML =
            '<p class="no-reviews">Your cart is empty.</p>';
    }

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const row = document.createElement("div");

        row.className = "cart-item";

        row.innerHTML = `
            <div>
                <h3>${escapeHTML(item.name)}</h3>
                <p>${money(item.price)} × ${item.quantity}</p>
            </div>

            <button type="button" data-remove-index="${index}">
                Remove
            </button>
        `;

        items.appendChild(row);
    });

    items.querySelectorAll("[data-remove-index]").forEach(
        button => {
            button.addEventListener("click", () => {
                removeFromCart(
                    Number(button.dataset.removeIndex)
                );
            });
        }
    );

    totalTarget.textContent = money(total);

    document.getElementById("cartBox").classList.add("show");
}

// Close cart.
function closeCart() {
    document.getElementById("cartBox").classList.remove("show");
}

// Remove an item from the cart.
function removeFromCart(index) {
    cart.splice(index, 1);

    updateCart();
    openCart();
}

// Show a small message.
function showCartMessage(message) {
    const box = document.getElementById("cartMessage");

    box.textContent = "✓ " + message;
    box.classList.add("show");

    window.clearTimeout(showCartMessage.timer);

    showCartMessage.timer = window.setTimeout(() => {
        box.classList.remove("show");
    }, 2600);
}

// Demo checkout message.
function openCheckout() {
    if (cart.length) {
        showCartMessage(
            "Demo checkout is not connected yet."
        );
    } else {
        showCartMessage("Your cart is empty!");
    }
}

// Make product cards clickable.
document.querySelectorAll(".product").forEach(card => {
    card.addEventListener("click", event => {
        if (event.target.closest("button")) return;

        openProductModal(card.dataset.productId);
    });

    card.addEventListener("keydown", event => {
        if (
            (event.key === "Enter" || event.key === " ") &&
            event.target === card
        ) {
            event.preventDefault();

            openProductModal(card.dataset.productId);
        }
    });
});

// Details buttons.
document.querySelectorAll("[data-details-product]").forEach(
    button => {
        button.addEventListener("click", () => {
            openProductModal(
                button.dataset.detailsProduct
            );
        });
    }
);

// Add-to-cart buttons.
document.querySelectorAll("[data-add-product]").forEach(
    button => {
        button.addEventListener("click", () => {
            addToCart(button.dataset.addProduct);
        });
    }
);

// Close product details by clicking outside the modal.
document.getElementById("productModal").addEventListener(
    "click",
    event => {
        if (event.target.id === "productModal") {
            closeProductModal();
        }
    }
);

// Escape key closes product details.
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeProductModal();
    }
});

// Display existing ratings when the page loads.
refreshCardRatings();
