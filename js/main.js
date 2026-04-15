// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('%cAlphaFlow Premium Landing Page Loaded ✅', 'color:#C8A24A; font-size:16px; font-weight:700');

    // Google Analytics Placeholder - Replace G-XXXXXXXXXX
    // <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

    // Countdown Timer (14 days from now - adjust as needed)
    function startCountdown() {
        const deadline = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
        const countdownEl = document.getElementById('countdown');

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = deadline - now;

            if (distance < 0) {
                countdownEl.innerHTML = "Pre-order batch is now closed";
                clearInterval(timer);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            countdownEl.innerHTML = `🔥 Founder Pre-order Batch Closes in <strong>${days}</strong> days — Only 30 Spots`;
        }, 1000);
    }
    startCountdown();

    // Form success message for Formspree
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', () => {
            setTimeout(() => {
                alert("✅ Thank you! Your pre-order or application has been received.\n\nWe will confirm via WhatsApp or email within 24 hours from Cape Town.");
            }, 800);
        });
    });
});
