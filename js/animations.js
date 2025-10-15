/* ========================================
   Website Animations JavaScript
   ======================================== */

class WebsiteAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupAnimations());
        } else {
            this.setupAnimations();
        }
    }

    setupAnimations() {
        this.setupScrollAnimations();
        this.setupPageSpecificAnimations();
        this.setupHoverEffects();
        this.setupTypewriterEffect();
    }

    // Scroll animations using Intersection Observer
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all elements with scroll-animate class
        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });
    }

    // Page-specific animations
    setupPageSpecificAnimations() {
        const currentPage = this.getCurrentPage();
        
        switch (currentPage) {
            case 'home':
                this.setupHomeAnimations();
                break;
            case 'projects':
                this.setupProjectsAnimations();
                break;
            case 'about':
                this.setupAboutAnimations();
                break;
            case 'resume':
                this.setupResumeAnimations();
                break;
            case 'contact':
                this.setupContactAnimations();
                break;
        }
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('projects')) return 'projects';
        if (path.includes('about')) return 'about';
        if (path.includes('resume')) return 'resume';
        if (path.includes('contact')) return 'contact';
        return 'home';
    }

    // Home page animations
    setupHomeAnimations() {
        // Hero section fade-in animations
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroDescription = document.querySelector('.hero-description');
        const heroImage = document.querySelector('.hero-image');

        if (heroTitle) {
            heroTitle.classList.add('animate-fade-in-up');
        }
        
        if (heroSubtitle) {
            heroSubtitle.classList.add('animate-fade-in-up', 'animate-delay-1');
        }
        
        if (heroDescription) {
            heroDescription.classList.add('animate-fade-in-up', 'animate-delay-2');
        }
        
        if (heroImage) {
            heroImage.classList.add('animate-fade-in-right', 'animate-delay-3');
        }

        // Add scroll animations to sections
        this.addScrollAnimation('.about-section', 'fadeInUp');
        this.addScrollAnimation('.skills-section', 'fadeInUp');
        this.addScrollAnimation('.cta-section', 'fadeInUp');
    }

    // Projects page animations
    setupProjectsAnimations() {
        // Add scroll animations to project cards
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.classList.add('scroll-animate', 'hover-lift');
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Add scroll animations to other elements
        this.addScrollAnimation('.page-header', 'fadeInUp');
        this.addScrollAnimation('.projects-intro', 'fadeInUp');
    }

    // About page animations
    setupAboutAnimations() {
        // Simple fade-in for page header
        const pageHeader = document.querySelector('.page-header');
        if (pageHeader) {
            pageHeader.classList.add('animate-fade-in-up');
        }

        // Simple fade-in for sections with delays
        const sections = document.querySelectorAll('.about-section, .interests-section, .internship-goals');
        sections.forEach((section, index) => {
            section.classList.add('animate-fade-in-up');
            section.style.animationDelay = `${(index + 1) * 0.2}s`;
        });
    }

    // Resume page animations
    setupResumeAnimations() {
        // Simple fade-in for resume container
        const resumePreview = document.querySelector('.resume-preview');
        if (resumePreview) {
            resumePreview.classList.add('animate-fade-in');
        }

        // Simple fade-in for sections with delays
        const sections = document.querySelectorAll('.resume-download, .resume-section-item');
        sections.forEach((section, index) => {
            section.classList.add('animate-fade-in-up');
            section.style.animationDelay = `${(index + 1) * 0.2}s`;
        });
    }

    // Contact page animations
    setupContactAnimations() {
        // Simple fade-in for page header
        const pageHeader = document.querySelector('.page-header');
        if (pageHeader) {
            pageHeader.classList.add('animate-fade-in-up');
        }

        // Simple fade-in for contact sections with delays
        const sections = document.querySelectorAll('.contact-form, .contact-info, .additional-info');
        sections.forEach((section, index) => {
            section.classList.add('animate-fade-in-up');
            section.style.animationDelay = `${(index + 1) * 0.2}s`;
        });
    }

    // Add scroll animation to elements
    addScrollAnimation(selector, animationType = 'fadeInUp') {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.classList.add('scroll-animate');
            el.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // Setup hover effects
    setupHoverEffects() {
        // Add hover effects to buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.classList.add('hover-scale');
        });

        // Add hover effects to cards
        document.querySelectorAll('.card, .project-card, .info-card').forEach(card => {
            card.classList.add('hover-lift');
        });

        // Add hover effects to links
        document.querySelectorAll('a:not(.btn)').forEach(link => {
            link.classList.add('hover-glow');
        });
    }

    // Typewriter effect for hero subtitle
    setupTypewriterEffect() {
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle && this.getCurrentPage() === 'home') {
            const text = heroSubtitle.textContent;
            heroSubtitle.textContent = '';
            heroSubtitle.classList.add('typewriter');
            
            // Start typewriter effect after a delay
            setTimeout(() => {
                this.typeWriter(heroSubtitle, text, 50);
            }, 1000);
        }
    }

    // Typewriter animation function
    typeWriter(element, text, speed = 50) {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                // Remove typewriter class after completion
                setTimeout(() => {
                    element.classList.remove('typewriter');
                }, 1000);
            }
        }, speed);
    }

    // Utility method to add animation classes
    addAnimationClass(selector, className, delay = 0) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add(className);
            }, delay + (index * 100));
        });
    }

    // Method to trigger animations manually
    triggerAnimation(selector, animationClass) {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.add(animationClass);
        }
    }
}

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.websiteAnimations = new WebsiteAnimations();
});

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WebsiteAnimations;
}
