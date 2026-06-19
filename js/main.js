// ============================
// Mobile nav toggle
// ============================
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// ============================
// Auto-update footer year
// ============================
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ============================
// Contact form submission (Formspree)
// ============================
const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formNote.textContent = '';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formNote.textContent = "Thanks! Your message has been sent.";
        formNote.style.color = '#2e7d32';
        contactForm.reset();
      } else {
        formNote.textContent = "Something went wrong. Please email us directly instead.";
        formNote.style.color = '#c62828';
      }
    } catch (err) {
      formNote.textContent = "Could not send message. Please check your connection or email us directly.";
      formNote.style.color = '#c62828';
    }

    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  });
}
