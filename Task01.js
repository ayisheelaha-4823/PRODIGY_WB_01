const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav_links");
const closeBtn = document.getElementById("close-btn");

// Open menu
menuBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
});

// Close menu
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

// Close menu when a link is clicked
const navItems = navMenu.querySelectorAll("a");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// NAVBAR LINKS SCROLL
const navLinks = document.querySelectorAll(".nav_links li a");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetText = e.target.textContent.trim().toLowerCase();

    if (targetText === "home") {
      document.querySelector(".header_container").scrollIntoView({ behavior: "smooth" });
    } else if (targetText === "about us") {
      document.querySelector(".about-section").scrollIntoView({ behavior: "smooth" });
    } else if (targetText === "menu") {
      document.querySelector(".menu-section").scrollIntoView({ behavior: "smooth" });
    } else if (targetText === "chef") {
      document.querySelector(".chef-section").scrollIntoView({ behavior: "smooth" });
    } else if (targetText === "client") {
      document.querySelector(".Client-section").scrollIntoView({ behavior: "smooth" });
    } else if (targetText === "contact us") {
      document.querySelector(".contact-section").scrollIntoView({ behavior: "smooth" });
    }
  });
});
