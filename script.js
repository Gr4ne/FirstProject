const nav_toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu");

nav_toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
