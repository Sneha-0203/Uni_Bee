// Show the popup when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";
});

// Handle Sign Up button click
document.getElementById("signupBtn").addEventListener("click", function () {
  window.location.href = "signup.html"; // Redirect to signup page
});

// Handle Login button click
document.getElementById("loginBtn").addEventListener("click", function () {
  window.location.href = "login.html"; // Redirect to login page
});

// Handle Skip button click
document.getElementById("skipBtn").addEventListener("click", function () {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // Hide the popup
});