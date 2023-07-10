// Hamburger toggle

const targetBtn = document.querySelector("#btn-menu");
const targetMenu = document.querySelector("#mob-nav-menu");
targetBtn.addEventListener("click", (e) => {
  targetBtn.classList.toggle("hamburger-active");
  targetMenu.classList.toggle("flex");
  targetMenu.classList.toggle("hidden");
});
//hamburger-active
