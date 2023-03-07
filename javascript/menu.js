// get all links in the navbar
const links = document.querySelectorAll('.navbar-links a');

// add click event listener to each link
links.forEach(link => {
  link.addEventListener('click', () => {
    // hide the navbar when a link is clicked
    const navbarToggle = document.querySelector('.navbar-toggle');
    navbarToggle.classList.remove('active');
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.style.display = 'none';
  });
});

// toggle the navbar on click
const navbarToggle = document.querySelector('.navbar-toggle');
navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  const navbarLinks = document.querySelector('.navbar-links');
  navbarLinks.style.display = navbarToggle.classList.contains('active') ? 'flex' : 'none';
});

