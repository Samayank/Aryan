// cart.js
// Simple cart system using localStorage

const CART_KEY = 'aryan_cart';

function loadCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCart() {
    return loadCart();
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function addToCart(product) {
    const cart = loadCart();
    const idx = cart.findIndex(item => item.id === product.id);
    if (idx !== -1) {
        cart[idx].quantity += product.quantity || 1;
    } else {
        cart.push({ ...product, quantity: product.quantity || 1 });
    }
    saveCart(cart);
    updateCartIcon();
}

function updateCartItem(id, quantity) {
    const cart = loadCart();
    const idx = cart.findIndex(item => item.id === id);
    if (idx !== -1) {
        cart[idx].quantity = quantity;
        if (cart[idx].quantity <= 0) cart.splice(idx, 1);
        saveCart(cart);
        updateCartIcon();
    }
}

function removeCartItem(id) {
    const cart = loadCart().filter(item => item.id !== id);
    saveCart(cart);
    updateCartIcon();
}

function clearCart() {
    saveCart([]);
    updateCartIcon();
}

function updateCartIcon() {
    const icon = document.getElementById('floating-cart-count');
    if (icon) {
        icon.textContent = getCartCount();
    }
}

// Call this on page load to sync icon
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', updateCartIcon);
}

// Export for inline script usage
window.aryanCart = {
    loadCart,
    getCart,
    getCartCount,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart,
    updateCartIcon
}; 