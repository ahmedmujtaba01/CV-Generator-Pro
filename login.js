document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple login check for demonstration (replace with actual authentication in production)
    if (username === "admin" && password === "user123") {
        // Set login status to true in localStorage
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        window.location.href = "index.html";  // Redirect to the CV Generator page
    } else {
        alert("Invalid username or password.");
    }
});







