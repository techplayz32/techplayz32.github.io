// Retrieve existing users from local storage or initialize an empty array
const users = JSON.parse(localStorage.getItem('users')) || [];

function createAccount() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Check if the username is already taken
    if (isUsernameTaken(newUsername)) {
        alert('Username is already taken. Please choose a different one.');
        return;
    }

    // Add the new user to the database
    const newUser = { username: newUsername, password: newPassword };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully! You can now log in.');
    // Redirect to the login page after successful signup
    window.location.href = '/index.html';
}

function isUsernameTaken(username) {
    const existingUser = users.find(u => u.username === username);
    return existingUser !== undefined;
}
