// Future JavaScript features like animations or theme toggling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70; 
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed-text", {
    strings: ["a developer.", "a writer.", "a problem solver."], // Customize these
    typeSpeed: 70, // Adjust speed (lower is faster)
    backSpeed: 40,
    backDelay: 1500, // Time before erasing
    startDelay: 500,
    loop: true, // Makes it repeat
    showCursor: true, // Show blinking cursor
    cursorChar: "|",
  });    
});

console.log("Welcome to my portfolio!");