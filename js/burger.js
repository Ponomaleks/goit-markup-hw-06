(() => {
  const menuBtn = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-burger-menu]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');

  menuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    menu.classList.toggle('is-open');
  }
})();
