document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-list");
    const toggleIcon = menuToggle.querySelector("i");
    const allNavLinks = document.querySelectorAll(".nav-links a");

    // Toggle menu state on icon click
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Switch icon between hamburger (bars) and close (xmark)
        if (navLinks.classList.contains("active")) {
            toggleIcon.classList.remove("fa-bars");
            toggleIcon.classList.add("fa-xmark");
        } else {
            toggleIcon.classList.remove("fa-xmark");
            toggleIcon.classList.add("fa-bars");
        }
    });

    // Close menu automatically when clicking any menu link
    allNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                toggleIcon.classList.remove("fa-xmark");
                toggleIcon.classList.add("fa-bars");
            }
        });
    });
});