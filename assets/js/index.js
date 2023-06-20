const navbar = document.querySelector("nav");
window.addEventListener ("scroll", function() {
    navbar.classList.toggle("sticky", window.pageYOffset > 100);
});