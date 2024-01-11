let hamburger = document.querySelector(".menu-bar");
let menu = document.querySelector(".menu-item");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
