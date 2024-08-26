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
const counters = document.querySelectorAll('.stat-number');
const speed = 200; 

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

