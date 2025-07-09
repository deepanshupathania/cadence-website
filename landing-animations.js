// Animate testimonials on scroll
function animateTestimonials() {
  document.querySelectorAll('.animate-fadeinup').forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transitionDelay = (i * 0.1) + 's';
    }
  });
}
window.addEventListener('scroll', animateTestimonials);
window.addEventListener('DOMContentLoaded', animateTestimonials);

// Back to Top Button logic
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.style.opacity = 1;
    backToTop.style.display = 'block';
  } else {
    backToTop.style.opacity = 0;
    backToTop.style.display = 'none';
  }
});
backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Micro-animations for headings and icons
function animateOnScroll() {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('animated');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll); 