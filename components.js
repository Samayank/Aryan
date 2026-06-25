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
                    <a href="index.html" class="logo">ARYAN<span class="logo-tagline">Kitchen & Bath Solutions</span></a>
                    <button class="hamburger" id="hamburgerMenu" aria-label="Open menu">
                        <span></span><span></span><span></span>
                    </button>
                    <nav>
                        <ul class="nav-menu">
                            <li class="dropdown">
                                <a href="kitchen.html">Sink</a>
                                <div class="dropdown-content mega-menu">
                                    <div class="dropdown-list">
                                        <div class="dropdown-category">Series</div>
                                        <a href="customize.html?series=handmade" class="dropdown-item">
                                            <div class="dropdown-item-text">
                                                <div class="dropdown-item-title">Handmade <span class="nav-badge popular">Popular</span></div>
                                                <div class="dropdown-item-subtitle">304 & 202 Grade</div>
                                            </div>
                                        </a>
                                        <a href="customize.html?series=smart" class="dropdown-item">
                                            <div class="dropdown-item-text">
                                                <div class="dropdown-item-title">Smart Series</div>
                                                <div class="dropdown-item-subtitle">Clean modern geometry</div>
                                            </div>
                                        </a>
                                        <a href="customize.html?series=premium" class="dropdown-item">
                                            <div class="dropdown-item-text">
                                                <div class="dropdown-item-title">Premium (Silk)</div>
                                                <div class="dropdown-item-subtitle">Sleek styling and finish</div>
                                            </div>
                                        </a>
                                        <hr class="dropdown-divider">
                                        <a href="customize.html?series=oscar" class="dropdown-item">
                                            <div class="dropdown-item-text">
                                                <div class="dropdown-item-title">Oscar (Deluxe)</div>
                                                <div class="dropdown-item-subtitle">Great value oval bowl</div>
                                            </div>
                                        </a>
                                        <a href="customize.html?series=silver" class="dropdown-item">
                                            <div class="dropdown-item-text">
                                                <div class="dropdown-item-title">Silver Series</div>
                                                <div class="dropdown-item-subtitle">Everyday utility design</div>
                                            </div>
                                        </a>
                                        <a href="customize.html?series=economy" class="dropdown-item">
                                            <div class="dropdown-item-text">
                                                <div class="dropdown-item-title">Economy Series</div>
                                                <div class="dropdown-item-subtitle">Budget friendly essential</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="dropdown-image-panel" style="background-image: url('https://raw.githubusercontent.com/Samayank/Aryan/main/smartCard.png');"></div>
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="cistern.html">Flush Tanks</a>
                                <div class="dropdown-content mega-menu">
                                    <div class="dropdown-list">
                                        <div class="dropdown-category">Series</div>
                                        <a href="cistern.html" class="dropdown-item">
                                            <div class="dropdown-item-text">
                                                <div class="dropdown-item-title">Continental</div>
                                                <div class="dropdown-item-subtitle">Most premium operation</div>
                                            </div>
                                        </a>
                                        <a href="cistern.html" class="dropdown-item">
                                            <div class="dropdown-item-text">
                                                <div class="dropdown-item-title">Curve <span class="nav-badge new">New</span></div>
                                                <div class="dropdown-item-subtitle">Sleek curved design</div>
                                            </div>
                                        </a>
                                        <hr class="dropdown-divider">
                                        <a href="cistern.html" class="dropdown-item">
                                            <div class="dropdown-item-text">
                                                <div class="dropdown-item-title">Kubix</div>
                                                <div class="dropdown-item-subtitle">Modern geometric shape</div>
                                            </div>
                                        </a>
                                        <a href="cistern.html" class="dropdown-item">
                                            <div class="dropdown-item-text">
                                                <div class="dropdown-item-title">Deluxe</div>
                                                <div class="dropdown-item-subtitle">Standard fit reliability</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="dropdown-image-panel" style="background-image: url('https://raw.githubusercontent.com/Samayank/Aryan/main/continentalCard.png');"></div>
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="vanity.html">Vanity</a>
                                <div class="dropdown-content mega-menu">
                                    <div class="dropdown-list">
                                        <div class="dropdown-category">Series</div>
                                        <a href="vanity.html" class="dropdown-item">
                                            <div class="dropdown-item-text">
                                                <div class="dropdown-item-title">Golden (Deluxe)</div>
                                                <div class="dropdown-item-subtitle">Elegant mica finish</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="dropdown-image-panel" style="background-image: url('vanityCard.png');"></div>
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="unbreak.html">Accessories</a>
                                <div class="dropdown-content mega-menu">
                                    <div class="dropdown-list">
                                        <div class="dropdown-category">Accessories</div>
                                        <a href="unbreak.html" class="dropdown-item">
                                            <div class="dropdown-item-text">
                                                <div class="dropdown-item-title">Unbreakable</div>
                                                <div class="dropdown-item-subtitle">Jumbo corner set, deluxe shelf, bathroom organizer</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="dropdown-image-panel" style="background-image: url('https://raw.githubusercontent.com/Samayank/Aryan/main/deluxeShelf.png');"></div>
                                </div>
                            </li>
                            <li><a href="index.html#about">About</a></li>
                        </ul>
                    </nav>
                    <div class="header-actions">
                        <button class="search-btn" aria-label="Search products">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                        <a href="cart.html" class="nav-cart" aria-label="View cart">
                            <span class="nav-cart-icon">🛒</span>
                            <span class="nav-cart-count">0</span>
                        </a>
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
                    <h3>Brand</h3>
                    <ul>
                        <li><a href="index.html#about">About ARYAN</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Find Us</h3>
                    <ul>
                        <li><a href="index.html#network">Service Locations</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p><span style="font-weight: 500;">Made in India 🇮🇳</span></p>
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
 * Render the floating contact FAB.
 */
function renderFloatingContact() {
    const contactHTML = `
    <div class="floating-contact-container">
        <div class="floating-contact-options">
            <div class="floating-contact-option-wrapper">
                <span class="floating-contact-label">WhatsApp</span>
                <a href="https://wa.me/919873108210?text=Hello%2C%20I%20want%20to%20know%20more!" target="_blank" rel="noopener" class="floating-contact-option whatsapp" aria-label="WhatsApp Us">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </a>
            </div>
            <div class="floating-contact-option-wrapper">
                <span class="floating-contact-label">Phone</span>
                <a href="tel:9873108210" class="floating-contact-option phone" aria-label="Call Us">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </a>
            </div>
        </div>
        <button class="floating-contact-main" id="floatingContactMain" aria-label="Contact Options">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </button>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', contactHTML);

    const mainBtn = document.getElementById('floatingContactMain');
    const container = document.querySelector('.floating-contact-container');
    if(mainBtn && container) {
        mainBtn.addEventListener('click', () => {
            container.classList.toggle('active');
        });
    }
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
                        <a href="vanity.html">Golden (Deluxe)</a>
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
                <li><a href="index.html#about">About</a></li>
            </ul>
            <div style="margin-top:32px;display:flex;gap:12px;flex-wrap:wrap;">
                <button class="search-btn" onclick="openSearch();document.getElementById('mobileMenuOverlay').classList.remove('active');" aria-label="Search">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
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
                                <div class="popular-tag" onclick="performSearch('kitchen')">Sinks</div>
                                <div class="popular-tag" onclick="performSearch('cistern')">Cisterns</div>
                                <div class="popular-tag" onclick="performSearch('accessories')">Accessories</div>
                                <div class="popular-tag" onclick="performSearch('vanity')">Vanity</div>
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
    renderFloatingContact();
    renderBackToTop();
    renderToast();
}
