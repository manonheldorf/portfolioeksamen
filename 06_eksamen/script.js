

  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');

    // Function to toggle the burger menu
    function toggleMenu() {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
    }

    // Function to close the menu
    function closeMenu() {
      burger.classList.remove('active');
      nav.classList.remove('active');
    }

    // Add click event listener to the burger icon
    burger.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click from propagating to document
      toggleMenu();
    });

    // Add click event listener to the document
    document.addEventListener('click', (event) => {
      const isClickInsideBurger = burger.contains(event.target);
      const isClickInsideNav = nav.contains(event.target);

      // Close the menu if the click is outside the burger and nav
      if (!isClickInsideBurger && !isClickInsideNav) {
        closeMenu();
      }
    });
  });

