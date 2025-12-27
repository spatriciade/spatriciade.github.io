const faders = document.querySelectorAll('.fade-section, .skill-card, .experience-card, .project-card');

const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = 'translateY(0px)';
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader, index) => {
  fader.style.transitionDelay = `${index * 0.12}s`;
  appearOnScroll.observe(fader);
});

// Smooth scroll
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Hero paralaje sutil
const heroBg = document.querySelector('.hero-bg img');
window.addEventListener('scroll', () => {
  let offset = window.scrollY * 0.2;
  heroBg.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
});