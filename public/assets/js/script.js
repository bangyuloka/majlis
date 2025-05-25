const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const nav = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("active");
  menuToggle.style.display = "block";
  closeMenu.style.display = "none";
});
