const els = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('reveal--visible');
  });
}, { threshold: 0.2 });
els.forEach(el => obs.observe(el));
