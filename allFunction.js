 function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update navigation
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Add page-specific animations
            if (pageId === 'home') {
                animateHero();
            } else if (pageId === 'classes') {
                animateCards('.class-card');
            } else if (pageId === 'facilities') {
                animateCards('.facility-card');
            } else if (pageId === 'trainers') {
                animateCards('.trainer-card');
            } else if (pageId === 'membership') {
                animateCards('.plan-card');
            } else if (pageId === 'contact') {
                animateContactForm();
            }
        }

        function animateHero() {
            const heroElements = document.querySelectorAll('.hero-content h1, .hero-content p, .cta-button');
            heroElements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    el.style.transition = 'all 0.6s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }

        function animateContactForm() {
            const formElements = document.querySelectorAll('.contact-form, .contact-info-card');
            formElements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    el.style.transition = 'all 0.6s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 150);
            });
        }

        function animateCards(selector) {
            const cards = document.querySelectorAll(selector);
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px)';
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            animateHero();
            
            // Add scroll effect to navigation
            window.addEventListener('scroll', function() {
                const nav = document.querySelector('nav');
                if (window.scrollY > 50) {
                    nav.style.background = 'rgba(0, 0, 0, 0.98)';
                } else {
                    nav.style.background = 'rgba(0, 0, 0, 0.95)';
                }
            });

            // Add click handlers for CTA buttons
            const ctaButtons = document.querySelectorAll('.cta-button');
            ctaButtons.forEach(button => {
                button.addEventListener('click', function() {
                    if (this.textContent.includes('Start') || this.textContent.includes('Journey')) {
                        showPage('membership');
                    } else if (this.textContent.includes('Get Started') || 
                               this.textContent.includes('Choose Premium') || 
                               this.textContent.includes('Go Elite') ||
                               this.textContent.includes('Claim Your Offer')) {
                        // Simulate membership signup
                        this.textContent = 'Processing...';
                        this.style.background = '#27ae60';
                        setTimeout(() => {
                            alert('Thank you for your interest! A FitLife representative will contact you within 24 hours to complete your membership setup.');
                            this.textContent = this.textContent.replace('Processing...', 'Thank You!');
                        }, 2000);
                    }
                });
            });

            // Handle contact form submission
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitBtn = this.querySelector('.submit-btn');
                const formData = new FormData(this);
                
                // Get form values
                const firstName = formData.get('firstName');
                const lastName = formData.get('lastName');
                const email = formData.get('email');
                const interest = formData.get('interest');
                
                // Validate required fields
                if (!firstName || !lastName || !email || !interest) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // Simulate form submission
                submitBtn.textContent = 'Sending...';
                submitBtn.style.background = '#27ae60';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert(`Thank you ${firstName}! We've received your message about ${interest.replace('-', ' ')}. Our team will contact you within 24 hours.`);
                    
                    // Reset form
                    this.reset();
                    submitBtn.textContent = 'Message Sent!';
                    submitBtn.style.background = '#27ae60';
                    
                    setTimeout(() => {
                        submitBtn.textContent = 'Send Message';
                        submitBtn.style.background = 'linear-gradient(45deg, #ff6b35, #ff8c42)';
                        submitBtn.disabled = false;
                    }, 3000);
                }, 2000);
            });

            // Add real-time form validation
            const inputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    if (this.hasAttribute('required') && !this.value.trim()) {
                        this.style.borderColor = '#e74c3c';
                    } else if (this.type === 'email' && this.value && !isValidEmail(this.value)) {
                        this.style.borderColor = '#e74c3c';
                    } else {
                        this.style.borderColor = '#27ae60';
                    }
                });
            });

            function isValidEmail(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            }

            // Add interactive effects for facility cards
            const facilityCards = document.querySelectorAll('.facility-card');
            facilityCards.forEach(card => {
                card.addEventListener('click', function() {
                    const overlay = this.querySelector('.facility-overlay');
                    overlay.style.transform = 'translateY(0)';
                    setTimeout(() => {
                        overlay.style.transform = 'translateY(60%)';
                    }, 3000);
                });
            });

            // Add class booking simulation
            const classCards = document.querySelectorAll('.class-card');
            classCards.forEach(card => {
                card.addEventListener('click', function() {
                    const className = this.querySelector('h3').textContent;
                    if (confirm(`Would you like to book a spot in ${className}?`)) {
                        alert(`Great! You've been added to the ${className} class waitlist. You'll receive a confirmation email shortly.`);
                    }
                });
            });

            // Add trainer contact simulation
            const trainerCards = document.querySelectorAll('.trainer-card');
            trainerCards.forEach(card => {
                card.addEventListener('click', function() {
                    const trainerName = this.querySelector('h3').textContent;
                    if (confirm(`Would you like to schedule a consultation with ${trainerName}?`)) {
                        alert(`Excellent! We'll have ${trainerName} reach out to you within 24 hours to schedule your consultation.`);
                    }
                });
            });
        });

        // Add smooth scrolling for better UX
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add loading animation for better perceived performance
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });