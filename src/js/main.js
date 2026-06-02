// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

setTimeout(() => {
  document.querySelectorAll(
    ".project-item, .exp-item, .blog-item, .cert-item, .yt-card, .tag-row"
  ).forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
}, 60);
