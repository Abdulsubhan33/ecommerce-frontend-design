document.addEventListener("DOMContentLoaded", function() {

    // Smooth Scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const topBarMenu = document.querySelector('.topbarmenu');
    const body = document.querySelector('body');
  
    hamburger.addEventListener('click', function() {
      topBarMenu.classList.toggle('active');
      body.classList.toggle('no-scroll'); // Prevent body from scrolling when menu is open
    });
  
    // Hover effect for product cards
    const cards = document.querySelectorAll('.cards');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });
  
    // Dropdown animations for category and language
    const categoryDropdown = document.querySelector('.category-dropdown');
    const languageDropdown = document.querySelector('.language-currency select');
  
    categoryDropdown.addEventListener('mouseenter', function() {
      categoryDropdown.style.transition = 'transform 0.3s ease';
      categoryDropdown.style.transform = 'scale(1.05)';
    });
  
    languageDropdown.addEventListener('mouseenter', function() {
      languageDropdown.style.transition = 'transform 0.3s ease';
      languageDropdown.style.transform = 'scale(1.05)';
    });
  
    categoryDropdown.addEventListener('mouseleave', function() {
      categoryDropdown.style.transform = 'scale(1)';
    });
  
    languageDropdown.addEventListener('mouseleave', function() {
      languageDropdown.style.transform = 'scale(1)';
    });
  
    // Sticky header effect
    const header = document.querySelector('.header');
    const stickyClass = 'sticky';
  
    window.onscroll = function() {
      if (window.scrollY > 100) {
        header.classList.add(stickyClass);
      } else {
        header.classList.remove(stickyClass);
      }
    };
  
    // Form validation (example for the quote form)
    const form = document.querySelector('.supplier-form');
    form.addEventListener('submit', function(e) {
      const itemName = document.getElementById('text-name');
      const quantity = document.getElementById('quantity');
  
      if (itemName.value === '' || quantity.value <= 0) {
        e.preventDefault();
        alert('Please fill out all fields correctly.');
      }
    });
  
    // Close menu on outside click (optional)
    document.addEventListener('click', function(e) {
      if (!topBarMenu.contains(e.target) && !hamburger.contains(e.target)) {
        topBarMenu.classList.remove('active');
        body.classList.remove('no-scroll');
      }
    });
  
    // Add any other interactive effects here
    
  });
  