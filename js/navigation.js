function initializeNavigation() {
  const menuButton = document.querySelectorAll('.menu-button');
  const menuOverlay = document.querySelector('.menu-overlay');
  const menuPanel = document.querySelector('.menu-panel');

  function toggleMenu() {
    menuOverlay.classList.toggle('open');
    menuPanel.classList.toggle('open');
    menuButton.forEach(btn => {
      btn.classList.toggle('open');
    });
  }

  menuButton.forEach(btn => btn.addEventListener('click', toggleMenu));
  menuOverlay.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initializeNavigation);
