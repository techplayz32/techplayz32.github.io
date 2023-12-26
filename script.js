function validateLogin() {
    // Dummy data for the user database
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Login successful
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = '/src/dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
