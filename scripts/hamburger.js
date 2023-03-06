// function toggleMobileMenu (menu) {
//   menu.classList.toggle('open');
// }


const sidebarHeader = document.querySelector('.sidebar-header');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('open');
}

sidebarHeader.addEventListener('click', toggleMobileMenu);