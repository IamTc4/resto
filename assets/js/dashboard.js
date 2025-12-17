// Mock Data Generator
function generateMockData() {
    const today = new Date();
    const mockOrders = [];
    const itemsList = [
        { name: "Crispy Spring Rolls", price: 5.99, category: "Starters" },
        { name: "Grilled Chicken Salad", price: 8.50, category: "Starters" },
        { name: "Classic Burger", price: 12.99, category: "Main Course" },
        { name: "Spaghetti Carbonara", price: 14.50, category: "Main Course" },
        { name: "Chocolate Lava Cake", price: 6.99, category: "Desserts" },
        { name: "Fresh Fruit Smoothie", price: 4.99, category: "Drinks" }
    ];

    for (let i = 0; i < 20; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - Math.floor(Math.random() * 7)); // Last 7 days

        const numItems = Math.floor(Math.random() * 3) + 1;
        const orderItems = [];
        let total = 0;

        for (let j = 0; j < numItems; j++) {
            const item = itemsList[Math.floor(Math.random() * itemsList.length)];
            orderItems.push({ ...item, quantity: 1 });
            total += item.price;
        }

        mockOrders.push({
            id: Date.now() - Math.floor(Math.random() * 10000000),
            date: date.toISOString(),
            items: orderItems,
            total: total
        });
    }

    return mockOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Load Data
function loadDashboardData() {
    let orderHistory = JSON.parse(localStorage.getItem('orderHistory'));

    // If no data exists, generate mock data for demo purposes
    if (!orderHistory || orderHistory.length === 0) {
        orderHistory = generateMockData();
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    }

    return orderHistory;
}

// Reset Data
function resetData() {
    localStorage.removeItem('orderHistory');
    location.reload();
}

// Calculate Stats
function calculateStats(orders) {
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    // Popular Item
    const itemCounts = {};
    orders.forEach(order => {
        order.items.forEach(item => {
            itemCounts[item.name] = (itemCounts[item.name] || 0) + item.quantity;
        });
    });

    let popularItem = "-";
    let maxCount = 0;
    for (const [name, count] of Object.entries(itemCounts)) {
        if (count > maxCount) {
            maxCount = count;
            popularItem = name;
        }
    }

    return { totalOrders, totalRevenue, avgOrderValue, popularItem };
}

// Update UI
function updateDashboard() {
    const orders = loadDashboardData();
    const stats = calculateStats(orders);

    document.getElementById('total-orders').textContent = stats.totalOrders;
    document.getElementById('total-revenue').textContent = `$${stats.totalRevenue.toFixed(2)}`;
    document.getElementById('avg-order-value').textContent = `$${stats.avgOrderValue.toFixed(2)}`;
    document.getElementById('popular-item').textContent = stats.popularItem;

    renderCharts(orders);
    renderTable(orders);
}

// Render Charts
function renderCharts(orders) {
    // Sales Trends (Daily Revenue)
    const salesData = {};
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        last7Days.push(dateStr);
        salesData[dateStr] = 0;
    }

    orders.forEach(order => {
        const dateStr = new Date(order.date).toISOString().split('T')[0];
        if (salesData[dateStr] !== undefined) {
            salesData[dateStr] += order.total;
        }
    });

    const salesCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: last7Days,
            datasets: [{
                label: 'Revenue ($)',
                data: last7Days.map(d => salesData[d]),
                borderColor: '#D35400',
                backgroundColor: 'rgba(211, 84, 0, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });

    // Category Distribution
    const categoryCounts = {};
    orders.forEach(order => {
        order.items.forEach(item => {
            // In a real app, we'd lookup the category properly if not saved in order history
            // For mock data, category is present. For real saved orders from main.js, we need to ensure category is saved or looked up.
            // Let's assume category is saved in the item object in main.js
            const cat = item.category || "Other";
            categoryCounts[cat] = (categoryCounts[cat] || 0) + item.quantity;
        });
    });

    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(categoryCounts),
            datasets: [{
                data: Object.values(categoryCounts),
                backgroundColor: ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6']
            }]
        },
        options: {
            responsive: true
        }
    });

    // Top Items (Bar Chart)
    const itemCounts = {};
    orders.forEach(order => {
        order.items.forEach(item => {
            itemCounts[item.name] = (itemCounts[item.name] || 0) + item.quantity;
        });
    });

    // Sort by count
    const sortedItems = Object.entries(itemCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5); // Top 5

    const topItemsCtx = document.getElementById('topItemsChart').getContext('2d');
    new Chart(topItemsCtx, {
        type: 'bar',
        data: {
            labels: sortedItems.map(([name]) => name),
            datasets: [{
                label: 'Units Sold',
                data: sortedItems.map(([,count]) => count),
                backgroundColor: 'rgba(39, 174, 96, 0.6)',
                borderColor: '#27AE60',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

function renderTable(orders) {
    const tbody = document.getElementById('orders-table-body');
    tbody.innerHTML = '';

    // Show last 5 orders
    orders.slice(0, 5).forEach(order => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid #eee';

        const date = new Date(order.date).toLocaleDateString();
        const itemsSummary = order.items.map(i => `${i.quantity}x ${i.name}`).join(', ');

        tr.innerHTML = `
            <td style="padding: 10px;">#${order.id.toString().slice(-4)}</td>
            <td style="padding: 10px;">${date}</td>
            <td style="padding: 10px; max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${itemsSummary}">${itemsSummary}</td>
            <td style="padding: 10px;">$${order.total.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Add New Dish
function addDish() {
    const name = document.getElementById('dish-name').value;
    const category = document.getElementById('dish-category').value;
    const price = parseFloat(document.getElementById('dish-price').value);
    const image = document.getElementById('dish-image').value || `https://placehold.co/500x300?text=${encodeURIComponent(name)}`;
    const description = document.getElementById('dish-desc').value;

    if (!name || !price) {
        alert("Name and Price are required!");
        return;
    }

    let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];

    // Create new ID (max existing ID + 1)
    const maxId = menuItems.reduce((max, item) => (item.id > max ? item.id : max), 0);
    const newId = maxId + 1;

    const newDish = {
        id: newId,
        name: name,
        category: category,
        price: price,
        image: image,
        description: description
    };

    menuItems.push(newDish);
    localStorage.setItem('menuItems', JSON.stringify(menuItems));

    alert("Dish added successfully!");

    // Clear form
    document.getElementById('dish-name').value = '';
    document.getElementById('dish-price').value = '';
    document.getElementById('dish-image').value = '';
    document.getElementById('dish-desc').value = '';

    // Note: main.js needs to reload or re-read localStorage to see this change.
    // If the admin is also on the dashboard, they might not see it immediately on the home page unless they refresh.
}

document.addEventListener('DOMContentLoaded', updateDashboard);
