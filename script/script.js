const dropdown = document.getElementById("dropdown");
const dropdownBtn = document.getElementById("dropdown-btn");
window.onclick = e => {
  if (e.target !== dropdownBtn) dropdown.classList.add("hidden");
};
const dropdownToggle = () => dropdown.classList.toggle("hidden");

const initHiddenElements = document.querySelectorAll(".init-hidden")

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("onscroll-animate"); //, ent.isIntersecting);
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: [0, 0.5, 1],
    }
  );
});

initHiddenElements.forEach((e) => {
  observer.observe(e);
});


