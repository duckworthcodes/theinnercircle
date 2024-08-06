// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Text animation for intro section
const textElements = document.querySelectorAll('.intro-container h1, .intro-container p, .join-btn');

textElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity 0.6s ease ${index * 0.3}s, transform 0.6s ease ${index * 0.3}s`;
});

window.addEventListener('DOMContentLoaded', () => {
    textElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 300);
    });
});

// Background animation for intro section
const introContainer = document.querySelector('.intro-container');

introContainer.style.backgroundSize = '110% auto';
introContainer.style.transition = 'background-size 1s ease-in-out';

let backgroundSize = 110;

setInterval(() => {
    backgroundSize = backgroundSize === 110 ? 100 : 110;
    introContainer.style.backgroundSize = `${backgroundSize}% auto`;
}, 3000);

// Parallax effect for background image
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    introContainer.style.backgroundPositionY = `${-scrollY * 0.4}px`;
});

// Text shadow animation for h1
const h1 = document.querySelector('.intro-container h1');

h1.addEventListener('mouseover', () => {
    h1.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
});

h1.addEventListener('mouseout', () => {
    h1.style.textShadow = 'none';
});

// Mouse trail effect for intro section
introContainer.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = `${mouseX}px`;
    trail.style.top = `${mouseY}px`;

    introContainer.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 1500);
});

// Confetti animation on button click
const joinBtn = document.querySelector('.join-btn');

joinBtn.addEventListener('click', () => {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        joinBtn.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
});

// Button animation on hover
joinBtn.addEventListener('mouseenter', () => {
    joinBtn.style.transform = 'scale(1.1)';
    joinBtn.style.backgroundColor = '#0056b3';
});

joinBtn.addEventListener('mouseleave', () => {
    joinBtn.style.transform = 'scale(1)';
    joinBtn.style.backgroundColor = '#007BFF';
});
