/* ============================================================
   ARYAN Website — Shared JavaScript
   ============================================================ */

/* ---- Utility: Escape HTML to prevent XSS ---- */
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/* ---- Toast Notification ---- */
function showToast(message, duration) {
    duration = duration || 2500;
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(function () {
        toast.classList.remove('show');
    }, duration);
}

/* ---- Contact Modal ---- */
function openContact() {
    var overlay = document.getElementById('contactOverlay');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeContact() {
    var overlay = document.getElementById('contactOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

/* ---- Search Modal ---- */
var searchTimeout;
var currentFilter = 'all';

function getRawImg(filename) {
    if (filename.startsWith('http')) {
        return '<img src="' + filename + '" alt="Product Image" style="width:100%; height:100%; object-fit:contain; border-radius:8px;">';
    }
    return '<img src="https://raw.githubusercontent.com/Samayank/Aryan/main/' + filename + '" alt="Product Image" style="width:100%; height:100%; object-fit:contain; border-radius:8px; padding: 4px;">';
}

var productDatabase = [
    { id: 'k1', name: 'Handmade Series Sink', category: 'kitchen', description: 'Our finest handcrafted square bowl kitchen sink — the pinnacle of ARYAN craftsmanship', icon: getRawImg('handmade_single.png'), popular: true },
    { id: 'k2', name: 'Smart Series Sink', category: 'kitchen', description: 'Clean geometric square bowl design for the modern kitchen', icon: getRawImg('smart.png'), popular: true },
    { id: 'k3', name: 'Premium Series Sink', category: 'kitchen', description: 'Elegant oval bowl sinks with a silky-smooth finish', icon: getRawImg('silk.png'), popular: true },
    { id: 'k4', name: 'Oscar Series Sink', category: 'kitchen', description: 'Deluxe oval bowl kitchen sink offering great value and refined design', icon: getRawImg('oscar.png'), popular: false },
    { id: 'k5', name: 'Silver Series Sink', category: 'kitchen', description: 'Reliable oval bowl sinks with a polished silver finish', icon: getRawImg('silver.png'), popular: false },
    { id: 'k6', name: 'Economy Series Sink', category: 'kitchen', description: 'Budget friendly oval bowl kitchen sink built for everyday use', icon: getRawImg('economy.png'), popular: false },

    { id: 'c1', name: 'Continental Cistern', category: 'cistern', description: 'Our most premium cistern — single flush center push & double flush options', icon: getRawImg('continental.png'), popular: true },
    { id: 'c2', name: 'Curve Cistern', category: 'cistern', description: 'Premium cistern with sleek curved design and single flush side handle', icon: getRawImg('curve.png'), popular: true },
    { id: 'c3', name: 'Kubix Cistern', category: 'cistern', description: 'Clean, geometric cistern design with a dependable single flush side handle', icon: getRawImg('kubix.png'), popular: false },
    { id: 'c4', name: 'Deluxe Cistern', category: 'cistern', description: 'Reliable and durable cistern with single flush side handle', icon: getRawImg('deluxe.png'), popular: false },
    { id: 'c5', name: 'Solid Seat Cover', category: 'cistern', description: 'Durable and high-quality solid toilet seat cover for everyday use', icon: getRawImg('solid.png'), popular: true },
    { id: 'c6', name: 'EWC Seat Cover', category: 'cistern', description: 'Standard EWC toilet seat cover ensuring comfort and a perfect fit', icon: getRawImg('ewc.png'), popular: false },
    { id: 'c7', name: 'Jet Seat Cover', category: 'cistern', description: 'Reliable jet toilet seat cover designed for convenience and hygiene', icon: getRawImg('jet.png'), popular: false },

    { id: 'v1', name: 'UV Vanity Cabinet', category: 'vanity', description: 'High-gloss UV coated vanity cabinet, waterproof and termite proof', icon: getRawImg('https://images.unsplash.com/photo-1620626011761-996317b8d101?w=200&h=200&fit=crop'), popular: true },
    { id: 'v2', name: 'Golden Vanity Cabinet', category: 'vanity', description: 'Luxurious vanity with golden accents and premium HDHMR build', icon: getRawImg('https://images.unsplash.com/photo-1620626011761-996317b8d101?w=200&h=200&fit=crop'), popular: true },
    { id: 'v3', name: 'Normal Vanity Cabinet', category: 'vanity', description: 'Reliable HDHMR board vanity for everyday storage', icon: getRawImg('https://images.unsplash.com/photo-1620626011761-996317b8d101?w=200&h=200&fit=crop'), popular: false },

    { id: 'u1', name: 'Jumbo Corner Set', category: 'accessories', description: 'Large capacity transparent corner set for maximum storage', icon: getRawImg('jumbo.png'), popular: true },
    { id: 'u2', name: 'Corner Set', category: 'accessories', description: 'Standard transparent corner set for organizing bathroom essentials', icon: getRawImg('normal.png'), popular: false },
    { id: 'u3', name: 'Set Top Box Holder', category: 'accessories', description: 'Sturdy wall-mounted holder for set top boxes and routers', icon: getRawImg('set.png'), popular: false },
    { id: 'u4', name: '18" Shelf', category: 'accessories', description: 'Spacious 18-inch transparent shelf for bathroom utilities', icon: getRawImg('18.png'), popular: false },
    { id: 'u5', name: 'Deluxe Shelf', category: 'accessories', description: 'Premium transparent shelf with built-in compartments', icon: getRawImg('deluxeShelf.png'), popular: true },
    { id: 'u_org', name: 'Bathroom Organizer', category: 'accessories', description: 'Versatile multi-purpose organizers (2, 3, 4 & 5-in-1 variants)', icon: getRawImg('5.png'), popular: true },
    { id: 'u10', name: 'Double Soap Dish', category: 'accessories', description: 'Transparent double soap dish for his & hers or different soaps', icon: getRawImg('double.png'), popular: false },
    { id: 'u11', name: 'Single Soap Dish', category: 'accessories', description: 'Minimalist transparent single soap dish', icon: getRawImg('single.png'), popular: false },
    { id: 'u12', name: 'Towel Ring Triangle', category: 'accessories', description: 'Modern triangular transparent towel ring', icon: getRawImg('tri.png'), popular: false },
    { id: 'u13', name: 'Towel Ring Round', category: 'accessories', description: 'Classic round transparent towel ring', icon: getRawImg('round.png'), popular: true },
    { id: 'u14', name: 'Towel Rod', category: 'accessories', description: 'Sturdy and clear transparent towel rod', icon: getRawImg('rod.png'), popular: false },
    { id: 'u15', name: 'Corner Set Nano', category: 'accessories', description: 'Compact nano corner set for small spaces', icon: getRawImg('nano.png'), popular: false }
];

function openSearch() {
    var overlay = document.getElementById('searchOverlay');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(function () {
            var input = document.getElementById('searchInput');
            if (input) input.focus();
        }, 200);
    }
}

function closeSearch() {
    var overlay = document.getElementById('searchOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        var input = document.getElementById('searchInput');
        if (input) input.value = '';
    }
}

function performSearch(query) {
    var input = document.getElementById('searchInput');
    if (!input) return;

    if (query) input.value = query;
    var searchTerm = input.value.trim().toLowerCase();

    if (searchTerm.length === 0) {
        showPopularSearches();
        return;
    }

    var results = productDatabase.filter(function (p) {
        var matchesFilter = currentFilter === 'all' || p.category === currentFilter;
        var matchesSearch = p.name.toLowerCase().indexOf(searchTerm) !== -1 ||
            p.category.toLowerCase().indexOf(searchTerm) !== -1 ||
            p.description.toLowerCase().indexOf(searchTerm) !== -1;
        return matchesFilter && matchesSearch;
    });

    // Sort
    var sortDropdown = document.getElementById('sortDropdown');
    if (sortDropdown) {
        var sortBy = sortDropdown.value;
        if (sortBy === 'name') results.sort(function (a, b) { return a.name.localeCompare(b.name); });
        if (sortBy === 'category') results.sort(function (a, b) { return a.category.localeCompare(b.category); });
        if (sortBy === 'popular') results.sort(function (a, b) { return (b.popular ? 1 : 0) - (a.popular ? 1 : 0); });
    }

    renderSearchResults(results, searchTerm);
}

function renderSearchResults(results, searchTerm) {
    var container = document.getElementById('resultsContainer');
    var countEl = document.getElementById('resultsCount');
    var headerEl = container ? container.parentElement.querySelector('.search-results-header') : null;

    if (!container) return;

    if (results.length === 0) {
        if (headerEl) headerEl.style.display = 'none';
        container.innerHTML =
            '<div class="no-results">' +
            '<div class="no-results-icon">🔍</div>' +
            '<p>No products found for "<strong>' + escapeHTML(searchTerm) + '</strong>"</p>' +
            '<p style="color: #aaa; font-size: 14px;">Try different keywords or browse categories</p>' +
            '</div>';
        return;
    }

    if (headerEl) headerEl.style.display = 'flex';
    if (countEl) countEl.textContent = results.length + ' product' + (results.length !== 1 ? 's' : '') + ' found';

    container.innerHTML = results.map(function (item) {
        var safeName = escapeHTML(item.name);
        var safeDesc = escapeHTML(item.description);
        var safeCat = escapeHTML(item.category);
        return '<div class="search-result-item" onclick="window.location.href=\'' + getCategoryPage(item.category) + '\'">' +
            '<div class="result-image">' + item.icon + '</div>' +
            '<div class="result-info">' +
            '<div class="result-title">' + highlightMatch(safeName, searchTerm) + '</div>' +
            '<div class="result-category">' + safeCat + '</div>' +
            '<div class="result-description">' + safeDesc + '</div>' +
            '</div></div>';
    }).join('');
}

function highlightMatch(text, term) {
    if (!term) return text;
    // text is already escaped; highlight safely
    var regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(regex, '<strong style="color:#0066cc;">$1</strong>');
}

function getCategoryPage(category) {
    var map = {
        kitchen: 'kitchen.html',
        cistern: 'cistern.html',
        vanity: 'vanity.html',
        accessories: 'unbreak.html'
    };
    return map[category] || 'index.html';
}

function showPopularSearches() {
    var container = document.getElementById('resultsContainer');
    var headerEl = container ? container.parentElement.querySelector('.search-results-header') : null;
    if (headerEl) headerEl.style.display = 'none';
    if (container) {
        container.innerHTML =
            '<div class="popular-searches">' +
            '<h4>Popular Searches</h4>' +
            '<div class="popular-tags">' +
            '<div class="popular-tag" onclick="performSearch(\'kitchen sink\')">Kitchen Sink</div>' +
            '<div class="popular-tag" onclick="performSearch(\'cistern\')">Flush Tanks</div>' +
            '<div class="popular-tag" onclick="performSearch(\'vanity\')">Vanity Cabinets</div>' +
            '<div class="popular-tag" onclick="performSearch(\'seat cover\')">Seat Cover</div>' +
            '<div class="popular-tag" onclick="performSearch(\'organizer\')">Bathroom Organizer</div>' +
            '<div class="popular-tag" onclick="performSearch(\'towel\')">Towel Ring</div>' +
            '<div class="popular-tag" onclick="performSearch(\'unbreakable\')">Accessories</div>' +
            '</div></div>';
    }
}

/* ---- Product Detail Modal ---- */
var currentDetailProduct = null;

function openProductDetail(product) {
    currentDetailProduct = product;
    var overlay = document.getElementById('productDetailOverlay');
    if (!overlay) return;

    var imgEl = document.getElementById('detailImage');
    var nameEl = document.getElementById('detailName');
    var catEl = document.getElementById('detailCategory');
    var descEl = document.getElementById('detailDescription');
    var priceEl = document.getElementById('detailPrice');
    var featEl = document.getElementById('detailFeatures');

    if (imgEl) {
        if (product.image && product.image.indexOf('http') === 0) {
            imgEl.innerHTML = '<img src="' + escapeHTML(product.image) + '" alt="' + escapeHTML(product.name) + '" loading="lazy">';
        } else {
            imgEl.innerHTML = '<span style="font-size:64px;">🚰</span>';
        }
    }
    if (nameEl) nameEl.textContent = product.name;
    if (catEl) catEl.textContent = product.category || '';
    if (descEl) descEl.textContent = product.description || '';
    if (priceEl) priceEl.textContent = product.price || '';
    if (featEl && product.features) {
        featEl.innerHTML = product.features.map(function (f) {
            return '<li>' + escapeHTML(f) + '</li>';
        }).join('');
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductDetail() {
    var overlay = document.getElementById('productDetailOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

/* ---- Back to Top ---- */
function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ---- Header Scroll Effect ---- */
function initHeaderScroll() {
    var header = document.querySelector('header');
    if (!header) return;
    var lastY = 0;
    window.addEventListener('scroll', function () {
        var y = window.scrollY;
        if (y > lastY && y > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastY = y;
    });
}

/* ---- Smooth Scroll for Anchor Links ---- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ---- Fade-in Observer ---- */
function initFadeInObserver() {
    var elements = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        elements.forEach(function (el) { observer.observe(el); });
    } else {
        elements.forEach(function (el) { el.classList.add('visible'); });
    }
}

/* ---- Mobile Menu ---- */
function initMobileMenu() {
    var hamburger = document.getElementById('hamburgerMenu');
    var overlay = document.getElementById('mobileMenuOverlay');
    var closeBtn = document.getElementById('closeMobileMenu');

    if (hamburger && overlay) {
        hamburger.addEventListener('click', function () {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', function () {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Mobile dropdown accordion toggles
    document.querySelectorAll('.mobile-dropdown-toggle').forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') return; // let links work
            var targetId = this.getAttribute('data-target');
            var subMenu = document.getElementById(targetId);
            var arrow = this.querySelector('.arrow');
            if (subMenu) {
                subMenu.classList.toggle('open');
                if (arrow) arrow.classList.toggle('open');
            }
        });
    });
}

/* ---- Initialize All Shared Event Listeners ---- */
function initSharedListeners() {
    // Contact modal
    document.querySelectorAll('.contact-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            openContact();
        });
    });

    var closeContactBtn = document.getElementById('closeContact');
    if (closeContactBtn) {
        closeContactBtn.addEventListener('click', closeContact);
    }

    var contactOverlay = document.getElementById('contactOverlay');
    if (contactOverlay) {
        contactOverlay.addEventListener('click', function (e) {
            if (e.target === contactOverlay) closeContact();
        });
    }

    // Search modal
    document.querySelectorAll('.search-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            openSearch();
        });
    });

    var closeSearchBtn = document.getElementById('closeSearch');
    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', closeSearch);
    }

    var searchOverlay = document.getElementById('searchOverlay');
    if (searchOverlay) {
        searchOverlay.addEventListener('click', function (e) {
            if (e.target === searchOverlay) closeSearch();
        });
    }

    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(function () { performSearch(); }, 300);
        });
    }

    // Search filters
    document.querySelectorAll('.filter-chip').forEach(function (chip) {
        chip.addEventListener('click', function () {
            document.querySelectorAll('.filter-chip').forEach(function (c) { c.classList.remove('active'); });
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            performSearch();
        });
    });

    // Sort dropdown
    var sortDropdown = document.getElementById('sortDropdown');
    if (sortDropdown) {
        sortDropdown.addEventListener('change', function () { performSearch(); });
    }

    // Product detail modal
    var closeDetailBtn = document.getElementById('closeDetail');
    if (closeDetailBtn) closeDetailBtn.addEventListener('click', closeProductDetail);
    var closeDetail2Btn = document.getElementById('detailClose2');
    if (closeDetail2Btn) closeDetail2Btn.addEventListener('click', closeProductDetail);

    var detailOverlay = document.getElementById('productDetailOverlay');
    if (detailOverlay) {
        detailOverlay.addEventListener('click', function (e) {
            if (e.target === detailOverlay) closeProductDetail();
        });
    }

    var detailAddToCart = document.getElementById('detailAddToCart');
    if (detailAddToCart) {
        detailAddToCart.addEventListener('click', function () {
            if (currentDetailProduct && window.aryanCart) {
                var priceNum = Number(String(currentDetailProduct.price).replace(/[^\d.]/g, ''));
                window.aryanCart.addToCart({
                    id: currentDetailProduct.id,
                    name: currentDetailProduct.name,
                    image: currentDetailProduct.image || '',
                    price: priceNum,
                    quantity: 1
                });
                showToast('✓ Added to cart!');
                closeProductDetail();
            }
        });
    }

    // Global Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeContact();
            closeSearch();
            closeProductDetail();
            var mobileOverlay = document.getElementById('mobileMenuOverlay');
            if (mobileOverlay && mobileOverlay.classList.contains('active')) {
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
}

/* ---- Master Initialization ---- */
function initAryanWebsite(activePage) {
    // Render shared components
    initComponents(activePage);
    // Render footer (called separately because page may want it before or after content)
    renderFooter();
    // Init all event listeners & behaviors
    initSharedListeners();
    initMobileMenu();
    initHeaderScroll();
    initSmoothScroll();
    initFadeInObserver();
    initBackToTop();
    // Update cart icon
    if (window.aryanCart) {
        window.aryanCart.updateCartIcon();
    }
}
