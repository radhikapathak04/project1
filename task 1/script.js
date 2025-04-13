// GSAP Animation on Load
gsap.from(".hero-text h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero-text p", { opacity: 0, y: 30, duration: 1, delay: 0.3 });
gsap.from(".cta-btn", { opacity: 0, scale: 0.5, duration: 1, delay: 0.6 });

// Sticky Navbar Effect on Scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
