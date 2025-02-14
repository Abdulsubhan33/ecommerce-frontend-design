document.getElementById('forgotPasswordForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
  
    const response = await fakePasswordResetAPI(email);
  
    if (response.success) {
      document.getElementById('message').textContent = 'Password reset link sent to your email!';
    } else {
      document.getElementById('message').textContent = 'Error sending reset link.';
    }
  });
  
  const fakePasswordResetAPI = (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };
  