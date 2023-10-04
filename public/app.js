import Swup from 'https://unpkg.com/swup@4?module';
import SwupProgressPlugin from 'https://unpkg.com/@swup/progress-plugin@3?module';
import SwupBodyClassPlugin from 'https://unpkg.com/@swup/body-class-plugin@3?module';
import SwupOverlayTheme from 'https://unpkg.com/@swup/overlay-theme@2?module';


function setActiveMenuItem() {
  const menuItems = document.querySelectorAll('.nav-link');
  const currentUrl = window.location.pathname;

  menuItems.forEach((menuItem) => {
    const menuItemUrl = menuItem.getAttribute('href');

    if (currentUrl === menuItemUrl) {
      menuItem.classList.add('active');
    } else {
      menuItem.classList.remove('active');
    }
  });
}

const swup = new Swup({
  containers: ["#main-content"],
  plugins: [
    new SwupProgressPlugin({
      transition: 500,
      delay: 0,
      initialValue: 0.25,
      finishAnimation: true
      }),
    new SwupBodyClassPlugin(),
    new SwupOverlayTheme({
        direction: 'to-top'
      })
    ],
});

function init() {
    if (document.querySelector('#vanta-animation')) {
        VANTA.DOTS({
            el: "#vanta-animation",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            size: 3.00,
            color2: 0xfafafa,
            backgroundColor: 0xfafafa
          })
    }
    setActiveMenuItem();
}

if (document.readyState === 'complete') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', () => init());
}

swup.hooks.on('page:view', () => init());

