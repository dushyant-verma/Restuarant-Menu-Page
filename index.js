document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        document.querySelectorAll('main section').forEach(section => {
            const sectionTop = section.offsetTop - 50;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });


        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                currentSection = section.getAttribute('id');
            }
        });

    });





});