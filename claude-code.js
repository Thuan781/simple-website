// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (!targetId || targetId === '#') {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}


// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {

        if (hamburger) {
            hamburger.classList.remove('active');
        }

        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});


// Contact form
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput =
            this.querySelector('input[type="text"]');

        const emailInput =
            this.querySelector('input[type="email"]');

        const messageInput =
            this.querySelector('textarea');

        const name = nameInput
            ? nameInput.value.trim()
            : '';

        const email = emailInput
            ? emailInput.value.trim()
            : '';

        const message = messageInput
            ? messageInput.value.trim()
            : '';


        // Check empty fields
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }


        // Check email
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }


        // Success message
        alert(
            "Thank you for your message! I'll get back to you soon."
        );


        // Clear form
        this.reset();
    });
}


// Navbar background on scroll
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {

        if (window.scrollY > 100) {

            navbar.style.background =
                'rgba(255, 255, 255, 0.98)';

        } else {

            navbar.style.background =
                'rgba(255, 255, 255, 0.95)';
        }
    });
}


// Scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = '1';

                entry.target.style.transform =
                    'translateY(0)';

                observer.unobserve(entry.target);
            }
        });

    },
    observerOptions
);


// Animate project cards and skills
document
    .querySelectorAll('.project-card, .skill-item')
    .forEach(element => {

        element.style.opacity = '0';

        element.style.transform =
            'translateY(20px)';

        element.style.transition =
            'opacity 0.6s ease, transform 0.6s ease';

        observer.observe(element);
    });


// Update active navigation link
const sections =
    document.querySelectorAll('section[id]');

const navLinks =
    document.querySelectorAll('.nav-link');


window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {
            currentSection =
                section.getAttribute('id');
        }
    });


    navLinks.forEach(link => {

        link.classList.remove('active');

        if (
            link.getAttribute('href') ===
            `#${currentSection}`
        ) {
            link.classList.add('active');
        }
    });
});


// Automatically update copyright year
const yearElement =
    document.getElementById('year');

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


console.log('Website JavaScript loaded successfully!');
