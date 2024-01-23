const navLinks = document.querySelector(".nav-links");
function showSidebar(event) {
  event.name === "menu",
    navLinks.classList.add("block"),
    navLinks.classList.remove("hidden");
}
function hideSidebar(event) {
  event.name == "close",
    navLinks.classList.add("hidden"),
    navLinks.classList.add("block");
}
//Slide
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide");
  splide.mount();
});
