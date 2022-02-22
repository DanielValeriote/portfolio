const dropdown = document.getElementById("dropdown");
const dropdownBtn = document.getElementById("dropdown-btn");

window.onclick = e => {
  if (e.target !== dropdownBtn) dropdown.classList.add("hidden");
};

const dropdownToggle = () => dropdown.classList.toggle("hidden");
