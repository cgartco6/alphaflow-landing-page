// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('%cAlphaFlow Professional Site Loaded ✅', 'color:#C8A24A; font-weight:700');

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Countdown (14 days example)
    function startCountdown() {
        const deadline = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
        const el = document.getElementById('countdown');
        if (!el) return;

        setInterval(() => {
            const diff = deadline - new Date();
            if (diff < 0) {
                el.textContent = "Pre-order batch closed";
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            el.innerHTML = `🔥 Founder Pre-order Batch Closes in <strong>${days}</strong> days — Only 30 Spots Left`;
        }, 86400000); // Update daily
    }
    startCountdown();

    // Form feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            // Formspree handles submission, we just show success
            setTimeout(() => {
                alert("✅ Thank you! Pre-order / application received.\n\nWe'll confirm via WhatsApp or email within 24 hours from Cape Town.");
            }, 600);
        });
    });
});
