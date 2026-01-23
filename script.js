// 1. Product Data (Ensure images match your file names in GitHub)
const products = [
    { id: 1, name: "Urban Oversized Tee", price: 999, img: "product1.jpg" },
    { id: 2, name: "Street Cargo Pants", price: 1499, img: "product2.jpg" },
    { id: 3, name: "City Vibe Hoodie", price: 1999, img: "product3.jpg" }
];

// 2. Load Cart from LocalStorage
let cart = JSON.parse(localStorage.getItem('urbanCart')) || [];

// 3. Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
});

// 4. Render Products to Grid
function renderProducts() {
    const container = document.getElementById('product-container');
    if (!container) return; // Only run on pages with this container

    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button class="btn-add" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// 5. Add to Cart Function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    
    // Save to LocalStorage
    localStorage.setItem('urbanCart', JSON.stringify(cart));
    
    updateCartCount();
    alert(product.name + " added to your urban collection!");
}

// 6. Update Cart Count Display
function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.length;
    }
}
