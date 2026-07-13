// Main JS entry point - handles initialization, animations, lazy loading, and contact form handling

document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio initialized successfully with Polished Technical Mastery.');

  // 1. Image Lazy Loading fallback via IntersectionObserver
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          // If there's a data-src or original source, load it
          if (image.dataset.src) {
            image.src = image.dataset.src;
          }
          observer.unobserve(image);
        }
      });
    });

    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  }

  // 2. Contact Form Handling & Validation
  const contactForm = document.querySelector('.contact__form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple inputs selection
      const nameInput = contactForm.querySelector('input[type="text"]');
      const emailInput = contactForm.querySelector('input[type="email"]');
      const subjectInput = contactForm.querySelectorAll('input[type="text"]')[1]; // Second text input is subject
      const messageInput = contactForm.querySelector('textarea');

      let isValid = true;
      const inputs = [nameInput, emailInput, subjectInput, messageInput];

      // Reset styles
      inputs.forEach(input => {
        if (input) {
          input.style.boxShadow = '';
        }
      });

      // Validate name
      if (nameInput && nameInput.value.trim() === '') {
        nameInput.style.boxShadow = '0 0 0 2px var(--color-error)';
        isValid = false;
      }

      // Validate email
      if (emailInput && (emailInput.value.trim() === '' || !validateEmail(emailInput.value))) {
        emailInput.style.boxShadow = '0 0 0 2px var(--color-error)';
        isValid = false;
      }

      // Validate subject
      if (subjectInput && subjectInput.value.trim() === '') {
        subjectInput.style.boxShadow = '0 0 0 2px var(--color-error)';
        isValid = false;
      }

      // Validate message
      if (messageInput && messageInput.value.trim() === '') {
        messageInput.style.boxShadow = '0 0 0 2px var(--color-error)';
        isValid = false;
      }

      if (isValid) {
        // Mock successful submit
        const submitBtn = contactForm.querySelector('.contact__form-button');
        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Mengirim...';

        setTimeout(() => {
          alert('Terima kasih! Pesan Anda telah berhasil terkirim.');
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }, 1500);
      }
    });
  }

  // Helper email regex validation
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // 3. Smooth scroll offset logic for anchor links
  const allLinks = document.querySelectorAll('a[href^="#"]');
  allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
