const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));

const bounce = document.querySelectorAll('.bounce');
bounce.forEach((el) => observer.observe(el));