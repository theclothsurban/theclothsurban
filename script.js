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
    localStorage.setItem('urbanCart', JSON.stringify(cart));
    updateCartCount();

    // Toast Notification logic
    const toast = document.getElementById("toast");
    toast.innerText = `${product.name} added to cart!`;
    toast.className = "show";
    
    // 3 second baad hide kar do
    setTimeout(function(){ 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}

    
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

// ... (Purana code: products array, addToCart function, etc.) ...

// --- YAHAN SE STEP C KA CODE SHURU HOTA HAI ---

const themeBtn = document.getElementById('theme-toggle');

// 1. Click hone par theme badlo
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Check karo ki abhi kaunsa mode hai aur save karo
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Button ka text bhi badal sakte hain
        themeBtn.innerText = isDark ? "☀️ Light" : "🌙 Dark";
    });
}

// 2. Page load hote hi check karo ki user ne pehle kya select kiya tha
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if(themeBtn) themeBtn.innerText = "☀️ Light";
    }
});

function searchProducts() {
    const query = document.getElementById('product-search').value.toLowerCase();
    const container = document.getElementById('product-container');
    
    // Products filter karein naam ke basis par
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );

    // Filtered items ko dikhane ke liye grid update karein
    if (filteredProducts.length > 0) {
        container.innerHTML = filteredProducts.map(product => `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button class="btn-add" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `).join('');
    } else {
        container.innerHTML = `<h3 style="grid-column: 1/-1; text-align: center; padding: 50px;">Oops! Aisa kuch nahi mila. 😅</h3>`;
    }
}

            window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1000); // 1 second tak dikhayega
});

