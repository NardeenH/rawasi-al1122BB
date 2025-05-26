
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainNavUl = document.querySelector('header .main-nav ul');

    if (menuToggle && mainNavUl) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainNavUl.classList.toggle('active');
            // Change icon on toggle
            const icon = menuToggle.querySelector('i');
            if (mainNavUl.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Update current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Basic Contact Form Handler (prevents default submission and shows a message)
    const contactForm = document.getElementById('contactForm');
    const formMessageDiv = document.getElementById('form-message');

    if (contactForm && formMessageDiv) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission for this static example

            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                formMessageDiv.textContent = 'يرجى ملء جميع الحقول المطلوبة.';
                formMessageDiv.className = 'form-message error';
                formMessageDiv.style.display = 'block';
                return;
            }
            
            // Simulate form submission success
            formMessageDiv.textContent = 'شكراً لك! تم إرسال رسالتك بنجاح.';
            formMessageDiv.className = 'form-message success';
            formMessageDiv.style.display = 'block';
            
            contactForm.reset(); // Clear the form

            // Hide message after a few seconds
            setTimeout(() => {
                formMessageDiv.style.display = 'none';
            }, 5000);
        });
    }

    // Smooth scroll for anchor links on the products page
    document.querySelectorAll('a[href^="products.html#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Check if on products.html already
            if (window.location.pathname.endsWith('products.html') || window.location.pathname.endsWith('products.html/')) {
                e.preventDefault();
                const targetId = href.substring(href.indexOf('#'));
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // If not on products.html, the default link behavior will take the user to products.html
            // and the browser will attempt to jump to the hash.
        });
    });

});
    