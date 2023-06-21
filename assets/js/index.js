// ganti navbar active ketika diklik
const navLinks = document.querySelectorAll('#navbar-nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const activeLink = document.querySelector('#navbar-nav a.active');
    if (activeLink) {
      activeLink.classList.remove('active');
    }

    link.classList.add('active');
  });
});

// ganti navbar jadi sticky ketika discoll
const navbar = document.querySelector("nav");
window.addEventListener ("scroll", function() {
    navbar.classList.toggle("sticky", window.pageYOffset > 100);
});
