// Initialize Lucide Icons
lucide.createIcons();

// Chart Logic
const ctx = document.getElementById('revenueChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Revenue 2026 ($)',
            data: [12000, 19000, 15000, 25000, 22000, 30000],
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, grid: { display: false } },
            x: { grid: { display: false } }
        }
    }
});

// Mock Order Data
const orders = [
    { id: "#ORD-7721", customer: "John Doe", product: "iPhone 15 Pro", amount: "$999", status: "completed" },
    { id: "#ORD-7722", customer: "Sarah Smith", product: "MacBook Air", amount: "$1,299", status: "pending" },
    { id: "#ORD-7723", customer: "Mike Ross", product: "AirPods Max", amount: "$549", status: "completed" },
    { id: "#ORD-7724", customer: "Rachel Zane", product: "Apple Watch", amount: "$399", status: "pending" }
];

const tableBody = document.getElementById('orderTableBody');

// Render Table
function renderOrders() {
    tableBody.innerHTML = orders.map(order => `
        <tr>
            <td><strong>${order.id}</strong></td>
            <td>${order.customer}</td>
            <td>${order.product}</td>
            <td>${order.amount}</td>
            <td><span class="status ${order.status}">${order.status}</span></td>
        </tr>
    `).join('');
}

renderOrders();
