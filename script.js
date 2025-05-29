console.log("DSP Creations Portfolio Loaded");

const hero = document.querySelector('.hero');
const heroBg = document.querySelector('.hero-bg');
const navbar = document.querySelector('.navbar');
const aboutSection = document.getElementById('about');

let lastScroll = window.scrollY;
let ticking = false;

// Parallax background
function parallaxEffect() {
  const scrollY = window.scrollY;
  hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
  heroBg.style.transform = `translateY(${scrollY * 0.1}px)`;
}

// Bounce animation near top or bottom
function bounceEffect() {
  const currentScroll = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  const isNearTop = currentScroll < 50 && lastScroll > currentScroll;
  const isNearBottom = currentScroll > maxScroll - 50 && lastScroll < currentScroll;

  if ((isNearTop || isNearBottom) && !heroBg.classList.contains('bounce')) {
    heroBg.classList.add('bounce');
    heroBg.addEventListener('animationend', () => {
      heroBg.classList.remove('bounce');
    }, { once: true });
  }

  lastScroll = currentScroll;
}

// Navbar color toggle
function navbarEffect() {
  const aboutTop = aboutSection.offsetTop;

  if (window.scrollY >= aboutTop - 100) {
    navbar.classList.add('dark');
  } else {
    navbar.classList.remove('dark');
  }
}

// Handle scroll events
function onScroll() {
  parallaxEffect();
  bounceEffect();
  navbarEffect();
}

// Scroll event handler
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      onScroll();
      ticking = false;
    });
    ticking = true;
  }
});
window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});
