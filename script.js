document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");

  
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

  
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
            navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)";
        } else {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
        }
    });
});
