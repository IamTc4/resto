const menuItems = [
    {
        id: 1,
        name: "Crispy Spring Rolls",
        category: "Starters",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1544681280-d21c51932463?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Vegetables wrapped in a crispy pastry."
    },
    {
        id: 2,
        name: "Grilled Chicken Salad",
        category: "Starters",
        price: 8.50,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Fresh greens with grilled chicken breast."
    },
    {
        id: 3,
        name: "Classic Burger",
        category: "Main Course",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Juicy beef patty with lettuce, tomato, and cheese."
    },
    {
        id: 4,
        name: "Spaghetti Carbonara",
        category: "Main Course",
        price: 14.50,
        image: "https://images.unsplash.com/photo-1612874742237-982e9657ade9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Traditional Italian pasta with egg, cheese, and bacon."
    },
    {
        id: 5,
        name: "Chocolate Lava Cake",
        category: "Desserts",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Warm chocolate cake with a molten center."
    },
    {
        id: 6,
        name: "Fresh Fruit Smoothie",
        category: "Drinks",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Blend of seasonal fruits."
    }
];

// Load Cart from LocalStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update Cart Count in UI
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.textContent = totalItems;
    }

    const stickyCountElement = document.getElementById('sticky-cart-count');
    if (stickyCountElement) {
        stickyCountElement.textContent = totalItems;
        // Optionally hide if 0? But requested to be sticky bottom button
    }
}

// Add Item to Cart
function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    const existingItemIndex = cart.findIndex(i => i.id === id);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    alert(`${item.name} added to cart!`);
}

// Remove Item from Cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartCount();
    // If we are on the cart page, we might want to re-render the cart list
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

// Update Item Quantity
function updateQuantity(id, change) {
    const itemIndex = cart.findIndex(i => i.id === id);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        saveCart();
        updateCartCount();
        if (window.location.pathname.includes('cart.html')) {
            renderCart();
        }
    }
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Render Menu (for menu.html)
function renderMenu() {
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer) return;

    const categories = [...new Set(menuItems.map(item => item.category))];

    categories.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.classList.add('menu-category');
        categorySection.innerHTML = `<h3 class="category-title">${category}</h3>`;

        const itemsGrid = document.createElement('div');
        itemsGrid.classList.add('menu-grid');

        const categoryItems = menuItems.filter(item => item.category === category);

        categoryItems.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.classList.add('menu-item');
            itemCard.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-img">
                <div class="menu-info">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    <div class="menu-footer">
                        <span class="price">$${item.price.toFixed(2)}</span>
                        <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id})">Add to Order</button>
                    </div>
                </div>
            `;
            itemsGrid.appendChild(itemCard);
        });

        categorySection.appendChild(itemsGrid);
        menuContainer.appendChild(categorySection);
    });
}

// Render Cart (for cart.html)
function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');

    if (!cartContainer || !totalElement) return;

    cartContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalElement.textContent = '0.00';
        return;
    }

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div class="cart-controls">
                <button class="btn-qty" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="btn-qty" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <div class="cart-price">
                $${itemTotal.toFixed(2)}
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    totalElement.textContent = total.toFixed(2);
}

// Checkout (WhatsApp)
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const phoneNumber = "1234567890"; // Replace with restaurant's number
    let message = "Hello, I’d like to order:%0A";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `- ${item.name} x${item.quantity}%0A`;
    });

    message += `Total: $${total.toFixed(2)}`;

    // Save order for data analysis
    saveOrder(total);

    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();

    // Redirect to WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

    // Redirect current tab to Thank You page after a short delay
    setTimeout(() => {
        window.location.href = 'thankyou.html';
    }, 1000);
}

// Save Order to History (Mock Backend)
function saveOrder(total) {
    let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

    const newOrder = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: JSON.parse(JSON.stringify(cart)), // Deep copy
        total: total
    };

    orderHistory.push(newOrder);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');

    const btn = document.querySelector('.mobile-menu-btn');
    if (btn) {
        const isExpanded = nav.classList.contains('active');
        btn.setAttribute('aria-expanded', isExpanded);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderMenu();
    renderCart();
});
