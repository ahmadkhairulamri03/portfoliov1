// Navbar scroll effect, active menu links, and mobile menu toggle logic

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar__link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

  // 1. Scroll Effect (shrink and add shadow to navbar)
  const handleNavbarScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  };

  // 2. Active Menu Link highlighting on scroll
  const highlightActiveLink = () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120; // offset height of navbar

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    const updateActiveClasses = (links, activeClass) => {
      links.forEach(link => {
        link.classList.remove(activeClass);
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}` || (currentSectionId === '' && href === '#home')) {
          link.classList.add(activeClass);
        }
      });
    };

    updateActiveClasses(navLinks, 'navbar__link--active');
    updateActiveClasses(mobileNavLinks, 'mobile-nav__link--active');
  };

  // Listen for scroll events
  window.addEventListener('scroll', () => {
    handleNavbarScroll();
    highlightActiveLink();
  });

  // Run once on load to initialize navbar state
  handleNavbarScroll();
  highlightActiveLink();

  // 3. Mobile Menu Drawer Toggle Handling
  const menuToggle = document.getElementById('navbar-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileNavClose = document.getElementById('mobile-nav-close');

  const openMobileMenu = () => {
    if (mobileNav && mobileNavOverlay) {
      mobileNav.classList.add('mobile-nav--open');
      mobileNavOverlay.classList.add('mobile-nav__overlay--open');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  };

  const closeMobileMenu = () => {
    if (mobileNav && mobileNavOverlay) {
      mobileNav.classList.remove('mobile-nav--open');
      mobileNavOverlay.classList.remove('mobile-nav__overlay--open');
      document.body.style.overflow = ''; // Restore background scrolling
    }
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', openMobileMenu);
  }
  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileMenu);
  }
  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close mobile drawer when a link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
});
