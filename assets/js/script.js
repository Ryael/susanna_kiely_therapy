/* Constants & Configs */

const myNav = document.querySelector("#navigation-bar");
// const mobileNav = document.querySelector("#mobile-nav");
const navMenu = document.querySelector("#navigation-menu");
// const menuToggle = document.querySelector("#nav-toggle");
const menuLinks = navMenu.querySelectorAll(".navigation-link");
const whiteLogo = myNav.querySelector("#navigation-bar-logo-white");
const blackLogo = myNav.querySelector("#navigation-bar-logo-black");
const logoContainer = myNav.querySelector("#logo");
const activeNavLink = myNav.querySelector(".active");
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

/* Scroll Tracker */

// Get all sections that have an ID defined.
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll.
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  // Get current scroll position.
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 85;
    sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it.
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as a selector.
    */

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("#navigation-menu a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("#navigation-menu a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
