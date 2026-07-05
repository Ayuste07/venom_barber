const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
  // Le pone o le quita la clase active a la cortina del menú
  navMenu.classList.toggle('active');
  // Le pone o le quita la clase active al botón (para que haga la animación de la X)
  menuBtn.classList.toggle('active');
});

// Opcional: Cierra el menú automáticamente si el usuario hace clic en un enlace
const navLinks = document.querySelectorAll('.lista-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuBtn.classList.remove('active');
  });
});