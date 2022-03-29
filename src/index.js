import "./styles/style.scss";

const dropdown = document.getElementById("dropdown");
const dropdownBtn = document.getElementById("dropdown-btn");
dropdownBtn.onclick(dropdownToggle)
window.onclick = e => {if (e.target !== dropdownBtn) dropdown.classList.add("hidden")};
const dropdownToggle = _ => dropdown.classList.toggle("hidden");

const initHiddenEls = document.querySelectorAll(".init-hidden")
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("onscroll-animate");
        observer.unobserve(entry.target);
      }
    },{threshold: [0, 0.5, 1]}
  );
});
initHiddenEls.forEach(e => observer.observe(e));