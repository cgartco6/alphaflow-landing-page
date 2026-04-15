// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('%cAlphaFlow Premium Site Loaded ✅', 'color:#C8A24A; font-weight:700');

    // Hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Simple form feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', () => {
            setTimeout(() => {
                alert("✅ Thank you! Your request has been received.\n\nWe will contact you within 24 hours.");
            }, 600);
        });
    });
});
