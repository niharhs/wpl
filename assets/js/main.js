// ------------------------------
// Mobile navigation toggle
// ------------------------------
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Close mobile menu after clicking a link
const navLinkEls = document.querySelectorAll('.nav-links a');
navLinkEls.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 700 && navLinks && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});

// ------------------------------
// Smooth scroll for internal links
// ------------------------------
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');

    if (targetId.length > 1) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        event.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ------------------------------
// Footer year
// ------------------------------
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
