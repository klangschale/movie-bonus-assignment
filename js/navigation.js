function initializeNavigation() {
  const menuButtons = document.querySelectorAll('.menu-button');
  const menuOverlay = document.querySelector('.menu-overlay');
  const menuPanel = document.querySelector('.menu-panel');
  
  function toggleMenu() {
    menuOverlay.classList.toggle('open');
    menuPanel.classList.toggle('open');
    menuButtons.forEach(btn => {
      btn.classList.toggle('open');
    });
  }

  const topMenuButton = menuButtons[0];

  function handleScroll() {
    if (window.scrollY > 50) {
      topMenuButton.classList.add('scrolled');
    } else {
      topMenuButton.classList.remove('scrolled');
    }
  }

  menuButtons.forEach(btn => btn.addEventListener('click', toggleMenu));
  menuOverlay.addEventListener('click', toggleMenu);
  window.addEventListener('scroll', handleScroll);
}

document.addEventListener('DOMContentLoaded', initializeNavigation);
