// Simulate fetching user data from localStorage or API
const userName = localStorage.getItem('userName') || 'User';
document.getElementById('userName').innerText = userName;

// Check for JWT token in localStorage
if (!localStorage.getItem('token')) {
  window.location.href = 'login.html'; // Redirect to login if not authenticated
}

const orderHistoryBtn = document.getElementById('orderHistoryBtn');
const accountSettingsBtn = document.getElementById('accountSettingsBtn');
const logoutBtn = document.getElementById('logoutBtn');
const orderHistorySection = document.getElementById('orderHistory');
const accountSettingsSection = document.getElementById('accountSettings');

const ordersList = document.getElementById('ordersList');
const accountForm = document.getElementById('accountForm');
const newEmail = document.getElementById('newEmail');
const newPassword = document.getElementById('newPassword');

// Show order history
orderHistoryBtn.addEventListener('click', function() {
  orderHistorySection.style.display = 'block';
  accountSettingsSection.style.display = 'none';
  loadOrderHistory();
});

// Show account settings
accountSettingsBtn.addEventListener('click', function() {
  accountSettingsSection.style.display = 'block';
  orderHistorySection.style.display = 'none';
});

// Logout
logoutBtn.addEventListener('click', function() {
  localStorage.removeItem('token');
  window.location.href = 'login.html'; // Redirect to login page after logout
});

// Simulated API call to fetch order history
function loadOrderHistory() {
  const orders = [
    { id: 1, item: 'Product 1', total: '$50.00' },
    { id: 2, item: 'Product 2', total: '$75.00' },
  ];

  ordersList.innerHTML = '';
  orders.forEach(order => {
    const listItem = document.createElement('li');
    listItem.innerText = `Order #${order.id}: ${order.item} - ${order.total}`;
    ordersList.appendChild(listItem);
  });
}

// Simulated API call to update user information
accountForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Simulate an API update call
  setTimeout(() => {
    alert('Account updated successfully!');
    if (newEmail.value) {
      localStorage.setItem('userEmail', newEmail.value);
    }
    if (newPassword.value) {
      // Save password securely (simulation)
      alert('Password updated (insecure simulation)');
    }
  }, 1000);
});
