import {
  createBurgerMenu,
  createDropDown
} from '/src/components/BurgerMenu/BurgerMenu';
import { createMainMenu } from '/src/components/Button/Button';
import { createSearchBar } from '/src/components/SearchBar/SearchBar';
import { createUserBox } from '/src/components/UserButton/UserButton';
import './NavegationBar.css';

export const createNavegationBar = () => {
  const navContainer = document.createElement('header');
  navContainer.classList.add(
    'navegation_bar',
    'flex_container',
    'flex_nav_bar'
  );

  const divLogo = document.createElement('div');
  divLogo.className = 'logo_container';

  divLogo.addEventListener('click', () => window.location.reload());

  const logo = document.createElement('img');
  logo.src = 'assets/pintplash_icon.svg';
  logo.className = 'logo_container';
  divLogo.appendChild(logo);
  navContainer.appendChild(divLogo);

  createBurgerMenu(navContainer);

  createMainMenu(navContainer);

  createDropDown(navContainer);

  createSearchBar(navContainer);

  createUserBox(navContainer);

  document.body.appendChild(navContainer);
};
