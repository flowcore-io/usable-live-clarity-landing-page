/**
 * Understandable Landing Page - Main JavaScript
 * Vanilla JavaScript for theme management, navigation, and interactions
 * Following Orlando design principles
 */

// ===================================================================
// Theme Management
// ===================================================================

class ThemeManager {
  constructor() {
    this.htmlElement = document.documentElement;
    this.themeToggle = document.getElementById('theme-toggle');
    this.storageKey = 'theme';
    
    this.init();
  }
  
  init() {
    // Set initial theme
    const savedTheme = this.getStoredTheme();
    const systemTheme = this.getSystemPreference();
    const initialTheme = savedTheme || systemTheme;
    
    this.setTheme(initialTheme);
    
    // Set up toggle button
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    // Listen for system theme changes
    this.watchSystemTheme();
  }
  
  getStoredTheme() {
    try {
      return localStorage.getItem(this.storageKey);
    } catch (e) {
      console.warn('localStorage not available:', e);
      return null;
    }
  }
  
  storeTheme(theme) {
    try {
      localStorage.setItem(this.storageKey, theme);
    } catch (e) {
      console.warn('Could not save theme preference:', e);
    }
  }
  
  getSystemPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }
  
  setTheme(theme) {
    this.htmlElement.setAttribute('data-theme', theme);
    this.storeTheme(theme);
    this.updateToggleIcon(theme);
  }
  
  toggleTheme() {
    const currentTheme = this.htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
  
  updateToggleIcon(theme) {
    if (this.themeToggle) {
      const icon = this.themeToggle.querySelector('.theme-toggle__icon');
      if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
      }
    }
  }
  
  watchSystemTheme() {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      // Only auto-switch if user hasn't manually set a preference
      mediaQuery.addEventListener('change', (e) => {
        if (!this.getStoredTheme()) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
}

// ===================================================================
// Navigation & Smooth Scrolling
// ===================================================================

class NavigationManager {
  constructor() {
    this.header = document.querySelector('.header');
    this.navLinks = document.querySelectorAll('.nav__link');
    this.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    this.nav = document.querySelector('.nav');
    
    this.init();
  }
  
  init() {
    this.setupSmoothScrolling();
    this.setupMobileMenu();
    this.setupScrollSpy();
  }
  
  setupSmoothScrolling() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
            const headerHeight = this.header ? this.header.offsetHeight : 0;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            
            // Close mobile menu if open
            this.closeMobileMenu();
            
            // Update URL without jumping
            history.pushState(null, '', href);
          }
        }
      });
    });
  }
  
  setupMobileMenu() {
    if (this.mobileMenuToggle && this.nav) {
      this.mobileMenuToggle.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (this.isMobileMenuOpen() && 
            !this.nav.contains(e.target) && 
            !this.mobileMenuToggle.contains(e.target)) {
          this.closeMobileMenu();
        }
      });
      
      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isMobileMenuOpen()) {
          this.closeMobileMenu();
        }
      });
    }
  }
  
  toggleMobileMenu() {
    const isOpen = this.isMobileMenuOpen();
    
    if (isOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }
  
  openMobileMenu() {
    this.header.classList.add('header--mobile-open');
    this.mobileMenuToggle.classList.add('mobile-menu-toggle--active');
    this.mobileMenuToggle.setAttribute('aria-expanded', 'true');
    
    // Show nav list on mobile
    const navList = this.nav.querySelector('.nav__list');
    if (navList) {
      navList.style.display = 'flex';
      navList.style.flexDirection = 'column';
      navList.style.position = 'absolute';
      navList.style.top = '100%';
      navList.style.left = '0';
      navList.style.right = '0';
      navList.style.backgroundColor = 'var(--color-background)';
      navList.style.borderTop = '1px solid var(--color-border)';
      navList.style.padding = 'var(--spacing-md)';
      navList.style.boxShadow = 'var(--shadow-lg)';
    }
  }
  
  closeMobileMenu() {
    this.header.classList.remove('header--mobile-open');
    this.mobileMenuToggle.classList.remove('mobile-menu-toggle--active');
    this.mobileMenuToggle.setAttribute('aria-expanded', 'false');
    
    const navList = this.nav.querySelector('.nav__list');
    if (navList && window.innerWidth < 768) {
      navList.style.display = 'none';
    }
  }
  
  isMobileMenuOpen() {
    return this.header.classList.contains('header--mobile-open');
  }
  
  setupScrollSpy() {
    // Highlight active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length === 0) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          this.updateActiveNavLink(id);
        }
      });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
  }
  
  updateActiveNavLink(activeId) {
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      if (href === `#${activeId}`) {
        link.classList.add('nav__link--active');
      } else {
        link.classList.remove('nav__link--active');
      }
    });
  }
}

// ===================================================================
// Animation on Scroll
// ===================================================================

class ScrollAnimations {
  constructor() {
    this.animatedElements = document.querySelectorAll(
      '.value-card, .service-card, .process-step, .differentiator, .testimonial-card'
    );
    
    this.init();
  }
  
  init() {
    if ('IntersectionObserver' in window) {
      this.setupObserver();
    } else {
      // Fallback: show all elements
      this.animatedElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }
  }
  
  setupObserver() {
    // Initially hide elements that should animate
    this.animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger animation slightly
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 50);
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    this.animatedElements.forEach(el => observer.observe(el));
  }
}

// ===================================================================
// Performance Optimization
// ===================================================================

class PerformanceOptimizer {
  constructor() {
    this.init();
  }
  
  init() {
    // Defer non-critical resources
    this.deferImages();
    
    // Add loading indicator for async actions
    this.setupLoadingStates();
  }
  
  deferImages() {
    // Lazy load images if needed in the future
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window && images.length > 0) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    }
  }
  
  setupLoadingStates() {
    // Add loading states to interactive elements
    document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach(link => {
      link.addEventListener('click', () => {
        link.classList.add('loading');
        setTimeout(() => link.classList.remove('loading'), 1000);
      });
    });
  }
}

// ===================================================================
// Analytics & Tracking (Placeholder)
// ===================================================================

class AnalyticsManager {
  constructor() {
    this.init();
  }
  
  init() {
    this.trackPageView();
    this.setupEventTracking();
  }
  
  trackPageView() {
    // Placeholder for analytics integration
    console.log('Page view tracked:', window.location.pathname);
  }
  
  setupEventTracking() {
    // Track CTA clicks
    document.querySelectorAll('.btn--primary').forEach(button => {
      button.addEventListener('click', (e) => {
        const href = button.getAttribute('href');
        console.log('CTA clicked:', href || button.textContent);
      });
    });
    
    // Track section views
    document.querySelectorAll('section[id]').forEach(section => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('Section viewed:', entry.target.id);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(section);
    });
  }
}

// ===================================================================
// Initialization
// ===================================================================

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

function initializeApp() {
  // Initialize all components
  new ThemeManager();
  new NavigationManager();
  new ScrollAnimations();
  new PerformanceOptimizer();
  new AnalyticsManager();
  
  console.log('✨ Understandable landing page initialized');
}

// ===================================================================
// Utility Functions
// ===================================================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ThemeManager,
    NavigationManager,
    ScrollAnimations,
    PerformanceOptimizer,
    AnalyticsManager
  };
}

