// =================
// UMARIX PERFUMES 
// =================

const products = [
    {
        id: 1,
        name: "Umarix Black",
        price: 2999,
        image: "images/perfume1.jpg",
        tagline: "Bold & powerful",
        description: "A bold, confident fragrance concept for evenings and special occasions.",
        notes: "Woody • Amber"
    },
    {
        id: 2,
        name: "Umarix Rose",
        price: 2799,
        image: "images/perfume2.png",
        tagline: "Soft & elegant",
        description: "A soft floral-inspired fragrance with an elegant character.",
        notes: "Floral • Soft"
    },
    {
        id: 3,
        name: "Umarix Gold",
        price: 3199,
        image: "images/perfume3.png",
        tagline: "Warm & refined",
        description: "A warm, refined fragrance concept for everyday style.",
        notes: "Warm • Elegant"
    },
    {
        id: 4,
        name: "Umarix Oud",
        price: 3299,
        image: "images/perfume4.png",
        tagline: "Rich & woody",
        description: "A rich woody fragrance with a classic character.",
        notes: "Woody • Oud"
    },
    {
        id: 5,
        name: "Umarix Ocean",
        price: 2999,
        image: "images/perfume5.png",
        tagline: "Fresh & aquatic",
        description: "A fresh aquatic-inspired fragrance.",
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
        description: "A bold fragrance inspired by classic luxury.",
        notes: "Rich • Warm"
    },
    {
        id: 8,
        name: "Umarix Musk",
        price: 2999,
        image: "images/perfume8.png",
        tagline: "Warm & memorable",
        description: "A soft musk-inspired fragrance.",
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
        tagline: "Warm amber",
        description: "A warm amber-inspired fragrance.",
        notes: "Amber • Warm"
    },
    {
        id: 11,
        name: "Umarix Citrus Rush",
        price: 2799,
        image: "images/perfume11.png",
        tagline: "Bright & fresh",
        description: "A lively citrus-inspired fragrance.",
        notes: "Citrus • Fresh"
    },
    {
        id: 12,
        name: "Umarix Aqua Storm",
        price: 3199,
        image: "images/perfume12.png",
        tagline: "Cool & refreshing",
        description: "A cool aquatic-inspired fragrance.",
        notes: "Aquatic • Cool"
    },
    {
        id: 13,
        name: "Umarix Amber Crown",
        price: 3499,
        image: "images/perfume13.png",
        tagline: "Rich & royal",
        description: "A rich amber-inspired fragrance.",
        notes: "Amber • Rich"
    },
    {
        id: 14,
        name: "Umarix Midnight Spice",
        price: 3299,
        image: "images/perfume14.png",
        tagline: "Dark & spicy",
        description: "A bold, spicy fragrance concept.",
        notes: "Spicy • Dark"
    },
    {
        id: 15,
        name: "Umarix Cedar Smoke",
        price: 3199,
        image: "images/perfume15.png",
        tagline: "Woody & earthy",
        description: "A woody fragrance inspired by cedar.",
        notes: "Cedar • Woody"
    },
    {
        id: 16,
        name: "Umarix Bloom Royale",
        price: 2999,
        image: "images/perfume16.png",
        tagline: "Floral & graceful",
        description: "A graceful floral-inspired fragrance.",
        notes: "Floral • Soft"
    },
    {
        id: 17,
        name: "Umarix Vanilla Haze",
        price: 2999,
        image: "images/perfume17.png",
        tagline: "Creamy vanilla",
        description: "A creamy vanilla-inspired fragrance.",
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

// Example reviews for selected perfumes.
const demoReviews = {
    1: [
        {
            name: "Ayaan",
            rating: 5,
            text: "The bottle design looks bold and classy."
        },
        {
            name: "Ali",
            rating: 4,
            text: "Nice product presentation."
        }
    ],
    10: [
        {
            name: "Hassan",
            rating: 5,
            text: "Love the warm fragrance concept."
        }
    ],
    17: [
        {
            name: "Sara",
            rating: 5,
            text: "The design looks elegant."
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

let activeProduct = null;
let cart = [];
let toastTimer = null;

const productGrid = document.getElementById("productGrid");
const productModal = document.getElementById("productModal");
const cartDrawer = document.getElementById("cartDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const toast = document.getElementById("toast");

// ========================================
// ENTER WEBSITE BUTTON
// ========================================

document
    .getElementById("enterWebsiteButton")
    .addEventListener("click", function () {
        document
            .getElementById("welcomeScreen")
            .classList.add("hidden");
    });

// ========================================
// FORMAT PRICE
// ========================================

function money(price) {
    return "Rs. " + Number(price).toLocaleString("en-PK");
}

// ========================================
// CREATE RATING STARS
// ========================================

function stars(rating) {
    const value = Math.max(
        0,
        Math.min(5, Math.round(Number(rating) || 0))
    );

    return "★".repeat(value) + "☆".repeat(5 - value);
}

// ========================================
// PROTECT TEXT ENTERED BY VISITORS
// ========================================

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[character];
    });
}

// ========================================
// LOAD SAVED REVIEWS
// ========================================

function getSavedReviews() {
    try {
        return JSON.parse(
            localStorage.getItem("umarixReviews") || "{}"
        );
    } catch (error) {
        return {};
    }
}

// ========================================
// GET ALL REVIEWS FOR A PERFUME
// ========================================

function allReviewsFor(productId) {
    const saved = getSavedReviews();

    return [
        ...(demoReviews[productId] || []),
        ...(saved[productId] || [])
    ];
}

// ========================================
// DISPLAY ALL 18 PERFUMES
// ========================================

function renderProducts(searchTerm = "") {
    const term = searchTerm.trim().toLowerCase();

    const filtered = products.filter(function (product) {
        return (
            product.name.toLowerCase().includes(term) ||
            product.tagline.toLowerCase().includes(term) ||
            product.notes.toLowerCase().includes(term)
        );
    });

    document.getElementById("collectionCount").textContent =
        filtered.length +
        (filtered.length === 1 ? " perfume" : " perfumes");

    if (filtered.length === 0) {
        productGrid.innerHTML =
            '<p class="empty-state">No perfumes found. Try another search.</p>';

        return;
    }

    productGrid.innerHTML = filtered.map(function (product) {
        return `
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
                            alt="${escapeHTML(product.name)} perfume bottle"
                            loading="lazy"
                        >

                        <div class="fallback" style="display:none">
                            UMARIX
                        </div>

                    </div>
                </button>

                <div class="product-info">

                    <p class="product-kicker">
                        UMARIX SIGNATURE
                    </p>

                    <h3>${escapeHTML(product.name)}</h3>

                    <p class="product-tagline">
                        ${escapeHTML(product.tagline)}
                    </p>

                    <p
                        class="card-rating"
                        data-rating-for="${product.id}"
                    ></p>

                    <div class="product-bottom">

                        <span class="product-price">
                            ${money(product.price)}
                        </span>

                        <button
                            class="details-button"
                            type="button"
                            data-details-product="${product.id}"
                        >
                            Details & Reviews ↗
                        </button>

                        <button
                            class="button gold add-card-button"
                            type="button"
                            data-add-product="${product.id}"
                        >
                            Add to Cart
                        </button>

                    </div>

                </div>

            </article>
        `;
    }).join("");

    // Show a fallback if a perfume image cannot be found.
    productGrid
        .querySelectorAll(".product-image-wrap img")
        .forEach(function (image) {
            image.addEventListener(
                "error",
                function () {
                    image.style.display = "none";
                    image.nextElementSibling.style.display = "flex";
                },
                { once: true }
            );
        });

    refreshCardRatings();
}

// ========================================
// UPDATE RATINGS ON PERFUME CARDS
// ========================================

function refreshCardRatings() {
    products.forEach(function (product) {
        const target = document.querySelector(
            `[data-rating-for="${product.id}"]`
        );

        if (!target) {
            return;
        }

        const reviews = allReviewsFor(product.id);

        if (reviews.length === 0) {
            target.innerHTML =
                '☆☆☆☆☆ <span>No reviews yet</span>';

            return;
        }

        const average = reviews.reduce(function (sum, review) {
            return sum + Number(review.rating);
        }, 0) / reviews.length;

        target.innerHTML = `
            ${stars(average)}
            <span>
                ${average.toFixed(1)} · ${reviews.length} reviews
            </span>
        `;
    });
}

// ========================================
// OPEN PERFUME DETAILS AND REVIEWS
// ========================================

function openProductModal(productId) {
    activeProduct = products.find(function (product) {
        return product.id === Number(productId);
    });

    if (!activeProduct) {
        return;
    }

    const image = document.getElementById("modalImage");
    const fallback = document.getElementById("modalImageFallback");

    image.style.display = "block";
    fallback.style.display = "none";

    image.src = activeProduct.image;
    image.alt = activeProduct.name + " perfume bottle";

    image.onerror = function () {
        image.style.display = "none";
        fallback.style.display = "flex";
    };

    document.getElementById("modalTitle").textContent =
        activeProduct.name;

    document.getElementById("modalTagline").textContent =
        activeProduct.tagline;

    document.getElementById("modalDescription").textContent =
        activeProduct.description;

    document.getElementById("modalNotes").textContent =
        "Notes: " + activeProduct.notes;

    document.getElementById("modalPrice").textContent =
        money(activeProduct.price);

    document.getElementById("reviewForm").reset();

    document.getElementById("detailAddButton").onclick = function () {
        addToCart(activeProduct.id);
    };

    renderReviews(activeProduct.id);

    productModal.classList.add("show");

    productModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    document.getElementById("closeProductModal").focus();
}

// ========================================
// CLOSE PERFUME DETAILS
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

    const averageTarget =
        document.getElementById("averageRating");

    const summaryTarget =
        document.getElementById("modalRatingSummary");

    const list =
        document.getElementById("reviewsList");

    if (reviews.length === 0) {
        averageTarget.textContent = "No ratings yet";

        summaryTarget.textContent =
            "☆☆☆☆☆ Be the first to review";

        list.innerHTML = `
            <p class="no-reviews">
                No reviews yet. Be the first to leave one!
            </p>
        `;

        return;
    }

    const average = reviews.reduce(function (sum, review) {
        return sum + Number(review.rating);
    }, 0) / reviews.length;

    averageTarget.textContent =
        `${stars
