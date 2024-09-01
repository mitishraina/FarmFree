const form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
 
  e.preventDefault();

  // Get the username and password input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // For demonstration purposes assuming a successful login
  const isLoggedIn = true;

  if (isLoggedIn) {
    // Redirecting
    window.location.href = 'text';
  } else {
    console.log('Login failed');
  }
});
