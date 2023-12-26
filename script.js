function validateLogin() {
    // Dummy data for the user database
    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' }
    ];

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Login successful
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = '/src/dashboard.html'; // Update the path here
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
