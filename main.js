/* =============================================
   SERENE COFFEES — FESTIVE COLLECTION 2026
   main.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // --- Sticky Navigation Scroll Effect ---
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // --- Mobile Menu Toggle ---
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // --- Scroll Reveal Animation Observer ---
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add .reveal class to sections and cards for scroll animation
  const revealElements = document.querySelectorAll('.about, .hampers__grid, .includes__inner, .contact__inner, .bulk__inner, .hamper-card, .include-item');
  revealElements.forEach((el, index) => {
    el.classList.add('reveal');
    if (index % 3 === 1) el.classList.add('reveal-delay-1');
    if (index % 3 === 2) el.classList.add('reveal-delay-2');
    revealObserver.observe(el);
  });

  // --- Contact Form Submission handling ---
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect form data (for potential integration)
      const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        hamperType: document.getElementById('hamperType').value,
        qty: document.getElementById('qty').value,
        message: document.getElementById('message').value
      };

      console.log('Enquiry submitted:', formData);

      // Smooth transition to success state
      contactForm.style.opacity = '0';
      contactForm.style.transform = 'translateY(-10px)';
      contactForm.style.transition = 'all 0.4s ease';

      setTimeout(() => {
        contactForm.hidden = true;
        formSuccess.hidden = false;
        formSuccess.style.opacity = '0';
        formSuccess.style.transform = 'translateY(10px)';
        formSuccess.style.transition = 'all 0.4s ease';

        requestAnimationFrame(() => {
          formSuccess.style.opacity = '1';
          formSuccess.style.transform = 'translateY(0)';
        });
      }, 400);
    });
  }

});
