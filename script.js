const menuBtn = document.getElementById('menu-btn');

const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {

  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });

});