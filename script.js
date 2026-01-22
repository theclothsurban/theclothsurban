let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Product added to cart");
}

function updateCartCount() {
  document.getElementById("cartCount").innerText = cart.length;
}

updateCartCount();

