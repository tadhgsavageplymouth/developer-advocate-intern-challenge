const navLinks = document.querySelectorAll('.top-nav a');
const sections = document.querySelectorAll('main section');

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -30% 0px',
  threshold: 0.1,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.id;
    const navLink = document.querySelector(`.top-nav a[href="#${id}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove('active'));
      if (navLink) navLink.classList.add('active');
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
