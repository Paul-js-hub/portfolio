const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.fa-times');
const menuIcon = document.querySelector('.fa-bars');

function toggleMenuBar() {
  if (navLinks.classList.contains('show-menu')) {
    navLinks.classList.remove('show-menu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    navLinks.classList.add('show-menu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenuBar);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenuBar);
});
