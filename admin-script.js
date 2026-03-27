// Global variables
let uploadedFiles = [];
let products = JSON.parse(localStorage.getItem('aryanProducts')) || [];

// Initialize the admin panel
document.addEventListener('DOMContentLoaded', function() {
    initializeUpload();
    loadProducts();
    setupFormValidation();
});

// Upload functionality
function initializeUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');

    if (!uploadArea || !fileInput) return;

    // Click to upload
    uploadArea.addEventListener('click', () => fileInput.click());

    // Drag and drop
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);

    // File input change
    fileInput.addEventListener('change', handleFileSelect);
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
}

function handleFileSelect(e) {
    const files = Array.from(e.target.files);
    processFiles(files);
}

function processFiles(files) {
    const validFiles = files.filter(file => {
        const isValidType = file.type.startsWith('image/');
        const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB
        
        if (!isValidType) {
            showMessage('Please select only image files.', 'error');
            return false;
        }
        if (!isValidSize) {
            showMessage('File size must be less than 5MB.', 'error');
            return false;
        }
        return true;
    });

    if (validFiles.length > 0) {
        uploadedFiles = validFiles;
        showMessage(`${validFiles.length} file(s) selected successfully.`, 'success');
        updateUploadArea();
    }
}

function updateUploadArea() {
    const uploadArea = document.getElementById('uploadArea');
    if (!uploadArea) return;

    if (uploadedFiles.length > 0) {
        uploadArea.innerHTML = `
            <div class="upload-icon">✅</div>
            <div class="upload-text">${uploadedFiles.length} file(s) ready to upload</div>
            <div class="upload-subtext">Click to select different files</div>
            <input type="file" id="fileInput" class="file-input" multiple accept="image/*">
        `;
        // Re-attach event listener
        const newFileInput = document.getElementById('fileInput');
        if (newFileInput) {
            newFileInput.addEventListener('change', handleFileSelect);
        }
    }
}

// Form handling
function setupFormValidation() {
    const form = document.getElementById('productForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    if (uploadedFiles.length === 0) {
        showMessage('Please select at least one image to upload.', 'error');
        return;
    }

    const productData = {
        id: Date.now(),
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        type: document.getElementById('productType').value,
        price: document.getElementById('productPrice').value,
        description: document.getElementById('productDescription').value,
        isFeatured: document.getElementById('isFeatured').value === 'true',
        status: document.getElementById('productStatus').value,
        images: [],
        createdAt: new Date().toISOString()
    };

    // Simulate upload process
    uploadProduct(productData);
}

function uploadProduct(productData) {
    const submitBtn = document.querySelector('button[type="submit"]');
    const submitText = document.getElementById('submitText');
    const submitSpinner = document.getElementById('submitSpinner');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');

    if (!submitBtn) return;

    // Show loading state
    submitBtn.classList.add('loading');
    if (submitText) submitText.style.display = 'none';
    if (submitSpinner) submitSpinner.style.display = 'block';
    if (progressBar) progressBar.style.display = 'block';

    // Simulate upload progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 90) progress = 90;
        if (progressFill) progressFill.style.width = progress + '%';
    }, 200);

    // Simulate upload completion
    setTimeout(() => {
        clearInterval(progressInterval);
        if (progressFill) progressFill.style.width = '100%';

        // Generate image URLs (in real app, these would come from server)
        productData.images = uploadedFiles.map((file, index) => ({
            id: Date.now() + index,
            name: file.name,
            url: URL.createObjectURL(file),
            size: file.size,
            type: file.type
        }));

        // Save product
        products.push(productData);
        localStorage.setItem('aryanProducts', JSON.stringify(products));

        // Reset form
        setTimeout(() => {
            clearForm();
            loadProducts();
            showMessage('Product uploaded successfully!', 'success');
            
            // Reset UI
            submitBtn.classList.remove('loading');
            if (submitText) submitText.style.display = 'block';
            if (submitSpinner) submitSpinner.style.display = 'none';
            if (progressBar) progressBar.style.display = 'none';
            if (progressFill) progressFill.style.width = '0%';
        }, 500);
    }, 1500); // Reduced from 2000ms to 1500ms
}

function clearForm() {
    const form = document.getElementById('productForm');
    if (form) form.reset();
    
    uploadedFiles = [];
    updateUploadArea();
    
    const uploadArea = document.getElementById('uploadArea');
    if (uploadArea) {
        uploadArea.innerHTML = `
            <div class="upload-icon">📁</div>
            <div class="upload-text">Drop images here or click to browse</div>
            <div class="upload-subtext">Supports JPG, PNG, WebP (Max 5MB each)</div>
            <input type="file" id="fileInput" class="file-input" multiple accept="image/*">
        `;
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.addEventListener('change', handleFileSelect);
        }
    }
}

function loadProducts() {
    const previewGrid = document.getElementById('previewGrid');
    if (!previewGrid) return;
    
    if (products.length === 0) {
        previewGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #6b7280;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📦</div>
                <h3>No products uploaded yet</h3>
                <p>Upload your first product to get started!</p>
            </div>
        `;
        return;
    }

    previewGrid.innerHTML = products.map(product => `
        <div class="preview-item">
            <img src="${product.images[0]?.url || getDefaultImage()}" 
                 alt="${product.name}" class="preview-image" 
                 onerror="this.src='${getDefaultImage()}'">
            <div class="preview-info">
                <div class="preview-name">${product.name}</div>
                <div class="preview-category">${product.category}</div>
                <div class="preview-actions">
                    <button class="btn btn-primary" onclick="editProduct(${product.id})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
                </div>
            </div>
        </div>
    `).join('');
}

function getDefaultImage() {
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04Ny41IDYwSDExMi41VjkwSDg3LjVWNjBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0xMDAgNDVMMTA3LjUgNTIuNUwxMTIuNSA0Ny41TDEwMCAzNUw4Ny41IDQ3LjVMOTIuNSA1Mi41TDEwMCA0NVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
}

function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Populate form with product data
    const nameField = document.getElementById('productName');
    const categoryField = document.getElementById('productCategory');
    const typeField = document.getElementById('productType');
    const priceField = document.getElementById('productPrice');
    const descField = document.getElementById('productDescription');
    const featuredField = document.getElementById('isFeatured');
    const statusField = document.getElementById('productStatus');

    if (nameField) nameField.value = product.name;
    if (categoryField) categoryField.value = product.category;
    if (typeField) typeField.value = product.type || '';
    if (priceField) priceField.value = product.price || '';
    if (descField) descField.value = product.description || '';
    if (featuredField) featuredField.value = product.isFeatured ? 'true' : 'false';
    if (statusField) statusField.value = product.status;

    // Scroll to form
    const uploadSection = document.querySelector('.upload-section');
    if (uploadSection) {
        uploadSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(p => p.id !== productId);
        localStorage.setItem('aryanProducts', JSON.stringify(products));
        loadProducts();
        showMessage('Product deleted successfully!', 'success');
    }
}

function showMessage(text, type) {
    const messageContainer = document.getElementById('messageContainer');
    if (!messageContainer) return;

    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    message.style.display = 'block';
    
    messageContainer.appendChild(message);
    
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 5000);
}

// Export products for main website
function exportProducts() {
    const dataStr = JSON.stringify(products, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'aryan-products.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Add export button to sidebar
document.addEventListener('DOMContentLoaded', function() {
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (sidebarNav) {
        const exportItem = document.createElement('li');
        exportItem.innerHTML = '<a href="#" onclick="exportProducts()"><i>📤</i> Export Products</a>';
        sidebarNav.appendChild(exportItem);
    }
});
