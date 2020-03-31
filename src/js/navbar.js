const menu = document.getElementsByClassName('navbar__menu')[0];
const menuClass = menu.getAttribute('class');
const body = document.getElementsByTagName('body')[0];
const subnavbar = document.getElementsByClassName('subnavbar')[0];
let isMenuActive = false;

const setSubnavbar = enable => {
  window.scrollTo(0, 0);
  setTimeout(() => menu.blur(), 1000);
  if (enable) {
    menu.setAttribute('class', `${menuClass} is-active`);
    subnavbar.style.bottom = '0';
    body.style.overflowY = 'hidden';
  } else {
    menu.setAttribute('class', menuClass);
    subnavbar.style.bottom = 'calc(100% - 64px)';
    body.style.overflowY = 'initial';
  }
  isMenuActive = !isMenuActive;
}

menu.addEventListener('click', () => isMenuActive ? setSubnavbar(false) : setSubnavbar(true));
// window.addEventListener('resize', () => { if (window.innerWidth > 685) setSubnavbar(false) });
