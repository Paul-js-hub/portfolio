const navLinks = document.querySelector('.menu');
const menuContainer = document.querySelector('.navbar-container');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.fa-times');
const menuIcon = document.querySelector('.fa-bars');

function toggleMenuBar() {
  if (navLinks.classList.contains('show-menu')) {
    navLinks.classList.remove('show-menu', 'nav-links');
    closeIcon.style.display = 'none';
    menuContainer.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    navLinks.classList.add('show-menu', 'nav-links');
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

const projects = [
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    image: 'images/study.jpg',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby'],
    liveLink: 'https://paul-js-hub.github.io/portfolio/',
    github: 'https://github.com/Paul-js-hub/portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    image: 'images/study.jpg',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby'],
    liveLink: 'https://paul-js-hub.github.io/portfolio/',
    github: 'https://github.com/Paul-js-hub/portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    image: 'images/study.jpg',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby'],
    liveLink: 'https://paul-js-hub.github.io/portfolio/',
    github: 'https://github.com/Paul-js-hub/portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    image: 'images/study.jpg',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby'],
    liveLink: 'https://paul-js-hub.github.io/portfolio/',
    github: 'https://github.com/Paul-js-hub/portfolio',
  },
];

const demo = document.getElementById('demo');
demo.innerHTML = projects.reduce((output, project) => (
  `${output
  }
    <div class="test block1">
    <div class="image-container">
      <img
        src="${project.image}"
        alt="project-image"
        class="section4-image"
      />
    </div>
    <div class="flex-column">
      <h2>${project.name}</h2>
      <p>
        ${project.description}
      </p>
      <ul class="flex">
          ${project.technologies.map(
    (x) => `<li class="list-sumbua">${x}</li><span> <img src="images/image3.png" alt="css" /></span>`,
  )}
      </ul>
      <button class="popup-btn" type="button" id="seeproject" data-open ="modal1">See Project</button>
    </div>
  </div>
  `
), '');

const closeButton = document.querySelector('#modal-close');
const btn = document.querySelectorAll('[data-open]');
const overlay = document.querySelector('.popup-overlay');
const demo1 = document.querySelector('#demo1');

btn.forEach((btnx) => {
  btnx.addEventListener('click', () => {
    demo1.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  demo1.style.display = 'none';
  overlay.style.display = 'none';
});

// form validation
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const err = document.querySelector('#err');
err.style.color = 'red';

function checkIfValidEmail(input) {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
}

const errorDisplay = (e) => {
  if (!checkIfValidEmail(email.value)) {
    e.preventDefault();
    err.textContent = 'The email is NOT valid. All letters should be lowercase';
    email.value = '';
  }
};

form.addEventListener('click', errorDisplay);