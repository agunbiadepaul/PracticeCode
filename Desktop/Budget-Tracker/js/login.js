document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    if (response.ok) {
      // Store user data (or token) in localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
