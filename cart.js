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
    if (typeof renderCartButtons === 'function') renderCartButtons();
}

function updateCartItem(id, quantity) {
    const cart = loadCart();
    const idx = cart.findIndex(item => item.id === id);
    if (idx !== -1) {
        cart[idx].quantity = quantity;
        if (cart[idx].quantity <= 0) cart.splice(idx, 1);
        saveCart(cart);
        updateCartIcon();
        if (typeof renderCartButtons === 'function') renderCartButtons();
    }
}

function removeCartItem(id) {
    const cart = loadCart().filter(item => item.id !== id);
    saveCart(cart);
    updateCartIcon();
    if (typeof renderCartButtons === 'function') renderCartButtons();
}

function clearCart() {
    saveCart([]);
    updateCartIcon();
    if (typeof renderCartButtons === 'function') renderCartButtons();
}

function updateCartIcon() {
    const icons = document.querySelectorAll('.nav-cart-count');
    icons.forEach(icon => {
        icon.textContent = getCartCount();
    });
}

function renderCartButtons() {
    var containers = document.querySelectorAll('.cart-btn-container');
    var cart = getCart();
    containers.forEach(function(container) {
        var productData = container.getAttribute('data-product');
        if (!productData) return;
        try {
            var product = JSON.parse(productData);
            var customClass = container.getAttribute('data-custom-class') || 'btn btn-primary';
            var customStyle = container.getAttribute('data-custom-style') || '';
            var cartItem = cart.find(item => item.id === product.id);
            if (cartItem && cartItem.quantity > 0) {
                container.innerHTML = `
                    <div class="cart-qty-control" style="${customStyle}">
                        <button class="cart-qty-btn cart-qty-minus">-</button>
                        <span class="cart-qty-display">${cartItem.quantity}</span>
                        <button class="cart-qty-btn cart-qty-plus">+</button>
                    </div>
                `;
            } else {
                var btnText = container.getAttribute('data-btn-text') || '🛒 Add to Cart';
                container.innerHTML = `
                    <button class="${customClass} cart-add-btn" style="${customStyle}">
                        ${btnText}
                    </button>
                `;
            }
        } catch (e) {
            console.error('Error rendering cart button', e);
        }
    });
}

// Call this on page load to sync icon and buttons
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        updateCartIcon();
        renderCartButtons();
    });

    // Global event delegation for cart buttons
    document.addEventListener('click', function(e) {
        var addBtn = e.target.closest('.cart-add-btn');
        var minusBtn = e.target.closest('.cart-qty-minus');
        var plusBtn = e.target.closest('.cart-qty-plus');
        
        if (addBtn) {
            var container = addBtn.closest('.cart-btn-container');
            if (container) {
                var product = JSON.parse(container.getAttribute('data-product'));
                addToCart(product);
                if (typeof showToast === 'function') {
                    showToast('✓ ' + product.name + ' added to cart!');
                }
            }
        } else if (minusBtn) {
            var container = minusBtn.closest('.cart-btn-container');
            if (container) {
                var product = JSON.parse(container.getAttribute('data-product'));
                var cartItem = getCart().find(item => item.id === product.id);
                if (cartItem) {
                    updateCartItem(product.id, cartItem.quantity - 1);
                }
            }
        } else if (plusBtn) {
            var container = plusBtn.closest('.cart-btn-container');
            if (container) {
                var product = JSON.parse(container.getAttribute('data-product'));
                var cartItem = getCart().find(item => item.id === product.id);
                if (cartItem) {
                    updateCartItem(product.id, cartItem.quantity + 1);
                }
            }
        }
    });
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
    updateCartIcon,
    renderCartButtons
}; 