import { createSearchBar } from '/src/components/SearchBar/SearchBar';
import { createUserButton } from '/src/components/UserButton/UserButton';
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

  const logo = document.createElement('img');
  logo.src = 'assets/pintplash_icon.svg';
  logo.className = 'logo_container';
  divLogo.appendChild(logo);
  navContainer.appendChild(divLogo);

  createSearchBar(navContainer);

  createUserButton({
    parentNode: navContainer,
    url: 'public/assets/notification.svg',
    text: 'notification'
  });

  createUserButton({
    parentNode: navContainer,
    url: 'public/assets/message.svg',
    text: 'message'
  });

  createUserButton({ parentNode: navContainer });

  document.body.appendChild(navContainer);
};
