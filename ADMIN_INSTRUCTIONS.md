# ARYAN Website Admin Panel - User Guide

## Overview
The ARYAN website now includes an admin panel that allows you to upload and manage product images independently. This system enables you to keep your website updated with new products without needing technical assistance.

## Accessing the Admin Panel

### Step 1: Navigate to Admin Panel
1. Open your website (index.html)
2. Click the "Admin" button in the top-right corner of the header
3. You'll be redirected to the admin panel

### Step 2: Login
- **Username:** `admin`
- **Password:** `admin123`

> **Important:** Change these default credentials in production by modifying the `admin-auth.js` file.

## Managing Products

### Uploading New Products

1. **Select Images**
   - Click the upload area or drag and drop image files
   - Supported formats: JPG, PNG, WebP
   - Maximum file size: 5MB per image
   - You can select multiple images at once

2. **Fill Product Information**
   - **Product Name** (Required): Enter the product name
   - **Category** (Required): Choose from Kitchen, Bathroom, Sanitaryware, or Unbreakable
   - **Product Type**: Select the specific type (Sink, Tap/Mixer, Shower, Accessory)
   - **Price**: Enter the price in ₹ (optional)
   - **Description**: Add a detailed product description
   - **Featured Product**: Mark as "Yes" to highlight on the homepage
   - **Status**: Set to "Active" to display on the website

3. **Save Product**
   - Click "Save Product" to upload and save
   - The system will process your images and add the product to the website

### Managing Existing Products

1. **View Products**
   - All uploaded products appear in the "Uploaded Products" section
   - Each product shows a preview image and basic information

2. **Edit Products**
   - Click "Edit" on any product to modify its information
   - The form will populate with existing data
   - Make changes and save

3. **Delete Products**
   - Click "Delete" on any product to remove it from the website
   - Confirm the deletion when prompted

## Features

### Image Management
- **Automatic Optimization**: Images are automatically optimized for web display
- **Multiple Images**: Each product can have multiple images
- **Fallback System**: If an image fails to load, a default placeholder is shown

### Product Categories
- **Kitchen**: Kitchen sinks, taps, and accessories
- **Bathroom**: Bathroom fixtures, showers, and accessories
- **Sanitaryware**: Toilets, cisterns, and related products
- **Unbreakable**: Durable accessories and fixtures

### Search Integration
- All uploaded products are automatically added to the website's search functionality
- Products can be found by name, category, or description

## Security Features

### Authentication
- Simple login system protects the admin panel
- Session timeout after 30 minutes of inactivity
- Logout button available in the admin panel

### Data Storage
- All product data is stored locally in the browser
- Data persists between sessions
- Export functionality available to backup product data

## Troubleshooting

### Common Issues

1. **Images Not Uploading**
   - Check file size (must be under 5MB)
   - Ensure file format is JPG, PNG, or WebP
   - Try refreshing the page and uploading again

2. **Products Not Appearing on Website**
   - Ensure product status is set to "Active"
   - Check that the category is correctly selected
   - Refresh the main website page

3. **Login Issues**
   - Use the correct credentials: admin / admin123
   - Clear browser cache if problems persist
   - Check that JavaScript is enabled

### Browser Compatibility
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript to be enabled
- Best experience on desktop or tablet devices

## Data Backup

### Exporting Products
1. In the admin panel, click "Export Products" in the sidebar
2. A JSON file will be downloaded with all your product data
3. Keep this file as a backup of your product information

### Restoring Products
- Contact your web developer to restore from backup files
- Product images will need to be re-uploaded

## Best Practices

### Image Guidelines
- Use high-quality images (minimum 800x600 pixels)
- Ensure good lighting and clear product visibility
- Use consistent image styles across products
- Optimize images before uploading to reduce file size

### Product Information
- Write clear, descriptive product names
- Include detailed descriptions highlighting key features
- Set appropriate categories for easy customer navigation
- Use consistent pricing format

### Regular Maintenance
- Review and update product information regularly
- Remove outdated or discontinued products
- Update prices as needed
- Mark seasonal or special products as featured

## Support

### Getting Help
- For technical issues, contact your web developer
- For product-related questions, refer to this guide
- Keep this instruction file for future reference

### Updates
- The admin system may be updated periodically
- Check for new features and improvements
- Backup your data before any major updates

---

**Note:** This admin panel is designed for ease of use. If you encounter any issues or need additional features, please contact your web development team.
