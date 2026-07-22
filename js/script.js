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

document.addEventListener("DOMContentLoaded", () => {
    const textArray = [
        "Full Stack Developer",
        "BSc CSIT Student",
        "UI/UX Enthusiast",
        "Problem Solver"
    ];

    const typingText = document.getElementById("typing-text");
    if (!typingText) return;

    let textIndex = 0;
    let charIndex = 0;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typingText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, typingDelay + 300);
        }
    }

    // Start typing initial text
    setTimeout(type, 500);
});