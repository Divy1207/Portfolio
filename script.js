// Theme toggle, year stamp, and a simple form handler
(function() {
  const root = document.documentElement;
  const key = "theme-preference";
  const saved = localStorage.getItem(key);
  if (saved === "light") root.classList.add("light");
  const btn = document.getElementById("themeToggle");
  btn?.addEventListener("click", () => {
    root.classList.toggle("light");
    localStorage.setItem(key, root.classList.contains("light") ? "light" : "dark");
  });
  document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "Thank you. Your message has been noted.";
    form.reset();
  });
})();

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(section => observer.observe(section));

// Smooth scroll is already native with CSS (html { scroll-behavior: smooth; })


// Reveal-on-scroll via IntersectionObserver
(function(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    }
  }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();
