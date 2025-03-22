// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add active class to nav items when scrolling
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Handle navbar background on scroll
function updateNavbar() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .info-card');

    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Initialize all scroll events
window.addEventListener('scroll', () => {
    updateNavbar();
    updateActiveNavLink();
    animateOnScroll();
});

// Initialize animations on page load
window.addEventListener('load', () => {
    updateNavbar();
    updateActiveNavLink();
    animateOnScroll();
});

// Initialize animations on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    updateNavbar();
    updateActiveNavLink();
    animateOnScroll();
});