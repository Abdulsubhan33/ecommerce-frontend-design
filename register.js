document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Simulate form validation
  if (password === confirmPassword) {
    // Simulate a registration API call
    setTimeout(() => {
      alert('Registration successful!');
      window.location.href = 'login.html'; // Redirect to login page after registration
    }, 1000);
  } else {
    alert('Passwords do not match');
  }
});
