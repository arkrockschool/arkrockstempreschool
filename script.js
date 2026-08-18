// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggle.classList.toggle('open');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// Optional: subtle header shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 40) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.04)';
  }
});