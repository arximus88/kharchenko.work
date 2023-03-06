// const currentLocation = location.href;
// const navLinks = document.querySelectorAll(".nav-link");

// navLinks.forEach(link => {
//     if (link.href === currentLocation) {
//         link.classList.add("active");
//     }
// });

const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  if (link.pathname === currentPath) {
    link.classList.add('active');
    link.querySelector('.icon').classList.remove('tertiary');
    link.querySelector('.icon').classList.add('primary');
  }
});

