'use strict';

// Navbar Toggle
const navToggle = document.querySelector('[data-nav-toggle]');
const navbar = document.querySelector('[data-navbar]');
const navLinks = document.querySelectorAll('[data-nav-link]');

if (navToggle && navbar) {
  navToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });
}

// Scroll to Top Button
const goTop = document.querySelector('[data-go-top]');
if (goTop) {
  window.addEventListener('scroll', () => {
    goTop.classList.toggle('active', window.scrollY >= 400);
  });
}

// Dark / Light Theme Toggle with Local Storage
const themeToggle = document.getElementById('theme-toggle');

try {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    if (themeToggle) themeToggle.checked = true;
  }

  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }
} catch (e) {
  console.warn('LocalStorage não disponível ou erro:', e);
}


