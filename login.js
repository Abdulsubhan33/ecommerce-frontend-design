document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulate an API call for authentication
  setTimeout(() => {
    if (email === 'user@example.com' && password === 'password123') {
      // Simulate storing JWT token
      localStorage.setItem('token', 'fake-jwt-token');
      window.location.href = 'dashboard.html'; // Redirect to the dashboard
    } else {
      alert('Invalid credentials');
    }
  }, 1000);
});
