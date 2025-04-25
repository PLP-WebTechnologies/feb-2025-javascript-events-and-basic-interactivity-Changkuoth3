// Button click effect
document.getElementById("magicBtn").addEventListener("click", function () {
  this.textContent = "You clicked me!";
  this.style.backgroundColor = "#28a745";
});

// Hover effect on images
const images = document.querySelectorAll(".gallery-img");
images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.1)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

// Tabs functionality
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const target = document.getElementById(this.dataset.target);

    // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.style.display = "none";
    });

    // Show the clicked tab content
    target.style.display = "block";
  });
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    event.preventDefault();
    return;
  }

  // Password validation
  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    event.preventDefault();
    return;
  }

  feedback.textContent = ""; // Clear feedback if form is valid
});
