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

// mengirim email
function sendEmail(event) {
  event.preventDefault(); // Mencegah reload halaman

  // Ambil data dari input
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Encode agar tidak terjadi error pada URL
  subject = encodeURIComponent(subject);
  message = encodeURIComponent(message);

  // Buat link mailto
  var mailtoLink = `https://mail.google.com/mail/?view=cm&to=candradermawansyah@gmail.com&su=${subject}&body=${message}`;

  // Arahkan pengguna ke Gmail dengan email yang sudah terisi
  window.open(mailtoLink, "_blank");
}
