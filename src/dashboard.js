document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const welcomeMessage = document.getElementById('welcomeMessage');

    if (loggedInUser) {
        welcomeMessage.textContent = `Welcome, ${loggedInUser.username}!`;
    } else {
        // Redirect to the login page if not logged in
        window.location.href = '/index.html';
    }
});

function logout() {
    // Clear the user from local storage and redirect to the login page
    localStorage.removeItem('loggedInUser');
    window.location.href = '/index.html';
}
