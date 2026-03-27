// Simple Product Manager for ARYAN Website
let products = JSON.parse(localStorage.getItem('aryanProducts')) || [];

function loadProducts() {
    // Update product showcase
    updateProductShowcase();
    // Update search database
    updateSearchDatabase();
}

function updateProductShowcase() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    const activeCategory = getActiveCategory();
    const categoryProducts = getProductsByCategory(activeCategory);

    productGrid.innerHTML = categoryProducts.map(product => `
        <div class="product-card" onclick="showProductDetails('${product.id}')">
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">` : '🛍️'}
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>${product.description || 'No description available'}</p>
                ${product.price ? `<div class="product-price">₹${product.price}</div>` : ''}
            </div>
        </div>
    `).join('');
}

function updateSearchDatabase() {
    if (window.productDatabase) {
        window.productDatabase = products.map(product => ({
            id: product.id,
            name: product.name,
            category: product.category,
            type: product.category,
            description: product.description || '',
            icon: '🛍️',
            popular: true
        }));
    }
}

function getActiveCategory() {
    const activeTab = document.querySelector('.tab-button.active');
    if (!activeTab) return 'kitchen';
    
    const categoryMap = {
        'Sink': 'kitchen',
        'Bathroom': 'bathroom',
        'Sanitaryware': 'sanitaryware',
        'Accessories': 'unbreakable'
    };
    
    return categoryMap[activeTab.textContent] || 'kitchen';
}

function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

function showProductDetails(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        alert(`Product: ${product.name}\n\nDescription: ${product.description || 'No description'}\n\nPrice: ${product.price ? '₹' + product.price : 'Price not set'}`);
    }
}

// Override the existing showProducts function
function showProducts(category) {
    // Update active tab
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update display
    updateProductShowcase();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    
    // Listen for storage changes
    window.addEventListener('storage', function(e) {
        if (e.key === 'aryanProducts') {
            products = JSON.parse(localStorage.getItem('aryanProducts')) || [];
            loadProducts();
        }
    });
});
