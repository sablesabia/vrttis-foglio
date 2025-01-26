// Future JavaScript features like animations or theme toggling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

console.log("Welcome to my portfolio!");