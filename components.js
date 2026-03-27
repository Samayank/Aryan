/* ============================================================
   ARYAN Website — Shared Components (JS-injected HTML)
   ============================================================ */

/**
 * Render the shared header into the page.
 * @param {string} activePage - 'home' | 'kitchen' | 'bathroom' | 'unbreakable' | 'service' | 'cart'
 */
function renderHeader(activePage) {
    const headerHTML = `
    <header>
        <div class="main-header">
            <div class="container">
                <div class="header-content">
                    <a href="index.html" class="logo">ARYAN<span class="logo-tagline">Stainless Steel Kitchen Sink</span></a>
                    <button class="hamburger" id="hamburgerMenu" aria-label="Open menu">
                        <span></span><span></span><span></span>
                    </button>
                    <nav>
                        <ul class="nav-menu">
                            <li class="dropdown">
                                <a href="kitchen.html">Sink</a>
                                <div class="dropdown-content">
                                    <div class="dropdown-category">Series</div>
                                    <a href="customize.html?series=handmade" class="dropdown-item">Handmade</a>
                                    <a href="customize.html?series=smart" class="dropdown-item">Smart Series</a>
                                    <a href="customize.html?series=premium" class="dropdown-item">Premium (Silk)</a>
                                    <a href="customize.html?series=oscar" class="dropdown-item">Oscar (Deluxe)</a>
                                    <a href="customize.html?series=silver" class="dropdown-item">Silver Series</a>
                                    <a href="customize.html?series=economy" class="dropdown-item">Economy Series</a>
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="cistern.html">Flush Tanks</a>
                                <div class="dropdown-content">
                                    <div class="dropdown-category">Series</div>
                                    <a href="cistern.html" class="dropdown-item">Continental</a>
                                    <a href="cistern.html" class="dropdown-item">Curve</a>
                                    <a href="cistern.html" class="dropdown-item">Kubix</a>
                                    <a href="cistern.html" class="dropdown-item">Deluxe</a>
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="vanity.html">Vanity</a>
                                <div class="dropdown-content">
                                    <div class="dropdown-category">Series</div>
                                    <a href="vanity.html" class="dropdown-item">UV (Premium)</a>
                                    <a href="vanity.html" class="dropdown-item">Golden (Deluxe)</a>
                                    <a href="vanity.html" class="dropdown-item">Normal</a>
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="unbreak.html">Accessories</a>
                                <div class="dropdown-content">
                                    <div class="dropdown-category">Accessories</div>
                                    <a href="unbreak.html" class="dropdown-item">Unbreakable</a>
                                </div>
                            </li>
                            <li><a href="service.html">Service</a></li>
                            <li><a href="index.html#about">About</a></li>
                        </ul>
                    </nav>
                    <div class="header-actions">
                        <button class="search-btn" aria-label="Search products">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                        <button class="contact-btn" aria-label="Contact us">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    </header>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

/**
 * Render the shared footer into the page.
 */
function renderFooter() {
    const year = new Date().getFullYear();
    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="kitchen.html">Kitchen Sinks</a></li>
                        <li><a href="cistern.html">Flush Tanks</a></li>
                        <li><a href="vanity.html">Vanity</a></li>
                        <li><a href="unbreak.html">Accessories</a></li>
                        <li><a href="aryan-catalogue.pdf" target="_blank">Complete Catalogue</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="index.html#about">About ARYAN</a></li>
                        <li><a href="service.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Find Us</h3>
                    <ul>
                        <li><a href="service.html">Service Locations</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${year} <span class="aryan-text">ARYAN</span> India Pvt. Ltd. All rights reserved. | <a href="#">Privacy Policy</a></p>
            </div>
        </div>
    </footer>`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

/**
 * Render the contact modal.
 */
function renderContactModal() {
    const contactHTML = `
    <div class="contact-overlay" id="contactOverlay">
        <div class="contact-modal">
            <div class="contact-header">
                <div>
                    <h2>Contact <span class="aryan-text">ARYAN</span></h2>
                    <p>We're here to help with all your needs</p>
                </div>
                <button class="close-contact" id="closeContact" aria-label="Close contact modal">&times;</button>
            </div>
            <div class="contact-body">
                <div class="contact-info">
                    <div class="contact-card">
                        <div class="contact-icon">📞</div>
                        <h3>Contact Us</h3>
                        <p>We're here to help with all your needs<br>
                        Monday to Sunday: 10:00 AM - 7:00 PM</p>
                        <a href="tel:9873108210">Call Us!</a><br>
                        <a href="https://wa.me/919873108210?text=Hello%2C%20I%20want%20to%20know%20more!" target="_blank" rel="noopener">
                            <button style="background-color:#25D366; color:white; padding:10px 20px; border:none; border-radius:5px; margin-top:10px; cursor:pointer;">
                                Chat on WhatsApp
                            </button>
                        </a>
                    </div>
                </div>
                <div class="business-hours">
                    <h4>Business Hours</h4>
                    <div class="business-hours-grid">
                        <div>
                            <strong>Customer Service:</strong>
                            Monday to Sunday<br>
                            10:00 AM - 7:00 PM
                        </div>
                        <div>
                            <strong>Office:</strong>
                            Monday to Sunday<br>
                            10:00 AM - 7:00 PM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', contactHTML);
}

/**
 * Render the floating cart button.
 */
function renderFloatingCart() {
    const cartHTML = `
    <a href="cart.html" class="floating-cart" id="floating-cart" aria-label="View cart">
        <span class="floating-cart-icon">🛒</span>
        <span class="floating-cart-count" id="floating-cart-count">0</span>
    </a>`;

    document.body.insertAdjacentHTML('beforeend', cartHTML);
}

/**
 * Render back-to-top button.
 */
function renderBackToTop() {
    const btnHTML = `
    <button class="back-to-top" id="backToTop" aria-label="Back to top">↑</button>`;

    document.body.insertAdjacentHTML('beforeend', btnHTML);
}

/**
 * Render skip-to-content link.
 */
function renderSkipToContent() {
    const skipHTML = `<a href="#main-content" class="skip-to-content">Skip to main content</a>`;
    document.body.insertAdjacentHTML('afterbegin', skipHTML);
}

/**
 * Render the mobile menu overlay.
 */
function renderMobileMenu() {
    const mobileHTML = `
    <div class="mobile-menu-overlay" id="mobileMenuOverlay">
        <nav class="mobile-menu">
            <button class="close-mobile-menu" id="closeMobileMenu" aria-label="Close menu">&times;</button>
            <ul>
                <li>
                    <div class="mobile-dropdown-toggle" data-target="mobile-kitchen-sub">
                        <a href="kitchen.html">Sink</a>
                        <span class="arrow">▼</span>
                    </div>
                    <div class="mobile-sub-menu" id="mobile-kitchen-sub">
                        <a href="customize.html?series=handmade">Handmade</a>
                        <a href="customize.html?series=smart">Smart Series</a>
                        <a href="customize.html?series=premium">Premium (Silk)</a>
                        <a href="customize.html?series=oscar">Oscar (Deluxe)</a>
                        <a href="customize.html?series=silver">Silver Series</a>
                        <a href="customize.html?series=economy">Economy Series</a>
                    </div>
                </li>
                <li>
                    <div class="mobile-dropdown-toggle" data-target="mobile-unbreakable-sub">
                        <a href="cistern.html">Flush Tanks</a>
                        <span class="arrow">▼</span>
                    </div>
                    <div class="mobile-sub-menu" id="mobile-unbreakable-sub">
                        <a href="cistern.html">Continental</a>
                        <a href="cistern.html">Curve</a>
                        <a href="cistern.html">Kubix</a>
                        <a href="cistern.html">Deluxe</a>
                    </div>
                </li>
                <li>
                    <div class="mobile-dropdown-toggle" data-target="mobile-cistern-sub">
                        <a href="vanity.html">Vanity</a>
                        <span class="arrow">▼</span>
                    </div>
                    <div class="mobile-sub-menu" id="mobile-cistern-sub">
                        <a href="vanity.html">UV (Premium)</a>
                        <a href="vanity.html">Golden (Deluxe)</a>
                        <a href="vanity.html">Normal</a>
                    </div>
                </li>
                <li>
                    <div class="mobile-dropdown-toggle" data-target="mobile-vanity-sub">
                        <a href="unbreak.html">Accessories</a>
                        <span class="arrow">▼</span>
                    </div>
                    <div class="mobile-sub-menu" id="mobile-vanity-sub">
                        <a href="unbreak.html">Unbreakable</a>
                    </div>
                </li>
                <li><a href="service.html">Service</a></li>
                <li><a href="index.html#about">About</a></li>
            </ul>
            <div style="margin-top:32px;display:flex;gap:12px;flex-wrap:wrap;">
                <button class="search-btn" onclick="openSearch();document.getElementById('mobileMenuOverlay').classList.remove('active');" aria-label="Search">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
                <button class="contact-btn" onclick="openContact();document.getElementById('mobileMenuOverlay').classList.remove('active');">Contact</button>
            </div>
        </nav>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', mobileHTML);
}

/**
 * Render the search modal.
 */
function renderSearchModal() {
    const searchHTML = `
    <div class="search-overlay" id="searchOverlay">
        <div class="search-modal">
            <div class="search-header">
                <h2>Search Products</h2>
                <button class="close-search" id="closeSearch" aria-label="Close search">&times;</button>
            </div>
            <div class="search-body">
                <div class="search-input-container">
                    <input type="text" class="search-input" id="searchInput" placeholder="Search for products, categories, or brands..." aria-label="Search products">
                    <span class="search-icon">🔍</span>
                </div>
                <div class="search-filters" id="searchFilters">
                    <div class="filter-chip active" data-filter="all">All Products</div>
                </div>
                <div class="search-results" id="searchResults">
                    <div class="search-results-header" style="display: none;">
                        <div class="results-count" id="resultsCount">0 products found</div>
                        <select class="sort-dropdown" id="sortDropdown" aria-label="Sort results">
                            <option value="relevance">Sort by Relevance</option>
                            <option value="name">Sort by Name</option>
                            <option value="category">Sort by Category</option>
                            <option value="popular">Most Popular</option>
                        </select>
                    </div>
                    <div id="resultsContainer">
                        <div class="popular-searches">
                            <h4>Popular Searches</h4>
                            <div class="popular-tags">
                                <div class="popular-tag" onclick="performSearch('handmade')">Handmade</div>
                                <div class="popular-tag" onclick="performSearch('continental')">Continental</div>
                                <div class="popular-tag" onclick="performSearch('kubix')">Kubix</div>
                                <div class="popular-tag" onclick="performSearch('deluxe')">Deluxe</div>
                                <div class="popular-tag" onclick="performSearch('smart')">Smart</div>
                                <div class="popular-tag" onclick="performSearch('deluxe shelf')">Deluxe Shelf</div>
                                <div class="popular-tag" onclick="performSearch('set top box holder')">Set Top Box Holder</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', searchHTML);
}

/**
 * Render the product detail modal.
 */
function renderProductDetailModal() {
    const detailHTML = `
    <div class="product-detail-overlay" id="productDetailOverlay">
        <div class="product-detail-modal">
            <div class="product-detail-header">
                <button class="close-detail" id="closeDetail" aria-label="Close product details">&times;</button>
                <div class="product-detail-image" id="detailImage"></div>
            </div>
            <div class="product-detail-body">
                <div class="detail-category" id="detailCategory"></div>
                <h2 id="detailName"></h2>
                <p class="detail-description" id="detailDescription"></p>
                <div class="detail-price" id="detailPrice"></div>
                <ul class="product-features" id="detailFeatures"></ul>
                <div class="detail-actions">
                    <button class="btn btn-primary" id="detailAddToCart">Add to Cart</button>
                    <button class="btn btn-secondary" id="detailClose2">Close</button>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', detailHTML);
}

/**
 * Render toast notification container.
 */
function renderToast() {
    const toastHTML = `<div class="toast" id="toast"></div>`;
    document.body.insertAdjacentHTML('beforeend', toastHTML);
}

/**
 * Initialize all shared components.
 * @param {string} activePage
 */
function initComponents(activePage) {
    renderSkipToContent();
    renderHeader(activePage);
    renderMobileMenu();
    renderSearchModal();
    renderContactModal();
    renderProductDetailModal();
    renderFloatingCart();
    renderBackToTop();
    renderToast();
}
