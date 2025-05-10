/* Constants & Configs */

const myNav = document.querySelector("#navigation-bar");
const navMenu = document.querySelector("#navigation-menu");
const menuLinks = navMenu.querySelectorAll(".navigation-link");
const colourLogo = myNav.querySelector("#navigation-logo-colour");
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
  colourLogo.classList.remove("black");
  Array.from(menuLinks).forEach(menuLink => menuLink.classList.remove("black"));
}

function setTransparentNavbar() {
  myNav.classList.add("scroll");
  colourLogo.classList.add("black");
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

/* Mobile Navigation */

const app = (() => {
  let body;
  let menu;
  let menuItems;
  let menuLinks

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.mobile-button');
    menuItems = document.querySelectorAll('.mobile-list-item');
    menuLinks = document.querySelectorAll('.mobile-links');

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener('click', () => toggleClass(body, 'mobile-navigation-active'));
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', () => toggleClass(body, 'mobile-navigation-active'));
    });
  };

  const toggleClass = (element, stringClass) => {
    if(element.classList.contains(stringClass))
      element.classList.remove(stringClass);
    else
      element.classList.add(stringClass);
  };

  init();
})();
