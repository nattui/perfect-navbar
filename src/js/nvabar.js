const menu = document.getElementsByClassName('navbar__menu')[0];
const menuClass = menu.getAttribute('class');
let isFullnavbarActive = false;

const setFullnavbar = enable => {
  enable ? menu.setAttribute('class', `${menuClass} is-active`) : menu.setAttribute('class', menuClass);
  isFullnavbarActive = !isFullnavbarActive;
}

menu.addEventListener('click', () => isFullnavbarActive ? setFullnavbar(false) : setFullnavbar(true));
