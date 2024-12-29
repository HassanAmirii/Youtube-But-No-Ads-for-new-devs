// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Select the div where the navbar will be inserted
  const navbarContainer = document.getElementById("navbar-container");

  // Fetch the navbar.html file
  fetch("html-files/navbar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load navbar");
      }
      return response.text();
    })
    .then((data) => {
      // Insert the navbar HTML into the #navbar div
      navbarContainer.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading navbar:", error);
    });
});
