const menuToggle = document.getElementById("menuToggle"),
  navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  const s = menuToggle.querySelectorAll("span");
  if (navMenu.classList.contains("active")) {
    s[0].style.transform = "rotate(45deg) translate(4px,4px)";
    s[1].style.opacity = "0";
    s[2].style.transform = "rotate(-45deg) translate(4px,-4px)";
  } else {
    s[0].style.transform = "none";
    s[1].style.opacity = "1";
    s[2].style.transform = "none";
  }
});
document.querySelectorAll(".nav-menu a").forEach((l) =>
  l.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const s = menuToggle.querySelectorAll("span");
    s[0].style.transform = "none";
    s[1].style.opacity = "1";
    s[2].style.transform = "none";
  }),
);
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () =>
  navbar.classList.toggle("scrolled", window.scrollY > 50),
);
const sections = document.querySelectorAll("section[id]"),
  navLinks = document.querySelectorAll(".nav-menu a");
function updateActive() {
  let c = "";
  sections.forEach((s) => {
    const t = s.offsetTop - 150;
    if (window.scrollY >= t && window.scrollY < t + s.offsetHeight) c = s.id;
  });
  navLinks.forEach((l) => {
    l.classList.toggle("active", l.getAttribute("href") === `#${c}`);
  });
}
window.addEventListener("scroll", updateActive);
const reveals = document.querySelectorAll(
  ".section-heading,.about-grid,.timeline-item,.skill-card,.project-card,.education-card,.contact-wrapper",
);
reveals.forEach((e) => e.classList.add("reveal"));
const observer = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
reveals.forEach((e) => observer.observe(e));
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll('a[href^="#"]').forEach((a) =>
  a.addEventListener("click", function (e) {
    const t = document.querySelector(this.getAttribute("href"));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }),
);
document.querySelectorAll(".project-image img").forEach((image) => {
  const hideIfUnavailable = () => {
    if (image.complete && !image.naturalWidth) image.remove();
  };
  image.addEventListener("error", () => image.remove(), { once: true });
  hideIfUnavailable();
});
