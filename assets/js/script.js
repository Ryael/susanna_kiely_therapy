/* Constants & Configs */

const myNav = document.querySelector("#navigation-bar");
// const mobileNav = document.querySelector("#mobile-nav");
const navMenu = document.querySelector("#navigation-menu");
// const menuToggle = document.querySelector("#nav-toggle");
const menuLinks = navMenu.querySelectorAll(".navigation-link");
const whiteLogo = myNav.querySelector("#navigation-bar-logo-white");
const blackLogo = myNav.querySelector("#navigation-bar-logo-black");
const logoContainer = myNav.querySelector("#logo");
// const activeNavLink = myNav.querySelector(".active");
let isMenuOpen = false;

/* Navigation Bar */

// Sticky navigation bar.
// These changes are toggled whenever the 10px threshold is scrolled past.
window.onload = () => {
  setNavbarTransparency();
};

window.onscroll = () => {
  setNavbarTransparency();
}

function setNavbarTransparency() {
  if (this.scrollY <= 10) {
    setSolidNavbar();
  } else {
    setTransparentNavbar();
  }
}

function setSolidNavbar() {
  myNav.classList.remove("scroll");
  whiteLogo.classList.remove("transparent");
  blackLogo.classList.add("transparent");
  Array.from(menuLinks).forEach(menuLink => menuLink.classList.remove("black"));
}

function setTransparentNavbar() {
  myNav.classList.add("scroll");
  whiteLogo.classList.add("transparent");
  blackLogo.classList.remove("transparent");
  Array.from(menuLinks).forEach(menuLink => menuLink.classList.add("black"));
}
