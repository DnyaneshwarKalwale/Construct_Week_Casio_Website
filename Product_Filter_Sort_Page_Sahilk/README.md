# Casio Product Filter Sort Page

This project is a product listing page for Casio watches with filtering, sorting, and pagination functionality. It allows users to browse watches stored in a Firebase Realtime Database and provides an interactive interface for a seamless shopping experience.

---

## Features

### 1. Sorting
- **Sort by Name**: Alphabetically sorts watches by their code.
- **Sort by Price**: Sorts watches by price in ascending order.

### 2. Filtering
- **Price Range**: Filters watches based on selected price ranges.
- **Size**: Filters watches by size (Small, Medium, Large).
- **Functions**: Filters watches by available functions (e.g., Bluetooth, Solar, Water Resistant).

### 3. Pagination
- Displays 5 watches per page.
- Navigate between pages using "Previous" and "Next" buttons.

---

## File Overview

### 1. `index.html`
- Main HTML file containing the structure and elements:
  - A header with a title and sorting dropdown.
  - Filters for price, size, and functions.
  - A section for displaying watches and pagination controls.
  - Firebase configuration and JavaScript logic.

### 2. `product_sort.css`
- Stylesheet for designing the page, including the header, filters, and product cards. *(Note: CSS file is not included in the provided code, so ensure it's added.)*

### 3. Firebase Integration
- Uses Firebase Realtime Database to fetch watch data.
- Firebase SDKs are loaded for app initialization and database interaction.

---

## Firebase Configuration

Ensure that Firebase is set up with the following configuration:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyBERuOH-3GvNnYxWSHMMKgBk0hRQ4D5O-U",
    authDomain: "casio-product-sort-page.firebaseapp.com",
    projectId: "casio-product-sort-page",
    storageBucket: "casio-product-sort-page.firebasestorage.app",
    messagingSenderId: "952840620124",
    appId: "1:952840620124:web:7e6bb7245330c5f4463e99"
};
