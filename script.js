// script.js

// Newsletter form alert
const newsletterForm = document.querySelector('#newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email.trim() !== '') {
      alert(`Thank you for subscribing with ${email}!`);
      this.reset();
    } else {
      alert('Please enter a valid email address.');
    }
  });
}

// Mobile nav toggle (optional)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}
// Smooth scroll for any button[data-target]
document.querySelectorAll('button[data-target]').forEach(btn => {
  btn.addEventListener('click', e => {
    const selector = btn.getAttribute('data-target');
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
