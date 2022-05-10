const navLinks = document.querySelector('.menu');
const menuContainer = document.querySelector('.navbar-container');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.fa-times');
const menuIcon = document.querySelector('.fa-bars');

function toggleMenuBar() {
  if (navLinks.classList.contains('show-menu')) {
    navLinks.classList.remove('show-menu','nav-links');
    closeIcon.style.display = 'none';
    menuContainer.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    navLinks.classList.add('show-menu','nav-links');
    closeIcon.style.display = 'block';
    menuContainer.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenuBar);
closeIcon.addEventListener('click', toggleMenuBar);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenuBar);
});
