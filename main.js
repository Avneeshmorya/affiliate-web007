// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("show");

  const icon = menuBtn.querySelector("i");

  if (navbar.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});


// Close mobile menu when clicking on nav links
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navbar.classList.remove("show");

    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});


// Newsletter Form Message
const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = newsletterForm.querySelector("input");

    if (emailInput.value.trim() === "") {
      alert("Please enter your email address.");
      return;
    }

    alert("Thank you for subscribing!");
    emailInput.value = "";
  });
}


// Simple scroll effect for header
const siteHeader = document.querySelector(".site-header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    siteHeader.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.08)";
  } else {
    siteHeader.style.boxShadow = "none";
  }
});