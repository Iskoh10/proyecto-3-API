import './Button.css';

export const createMainMenu = (parentNode) => {
  const mainButtons = document.createElement('div');
  mainButtons.classList.add(
    'flex_container',
    'flex_btn_menu',
    'main_button',
    'display_none'
  );

  parentNode.appendChild(mainButtons);
  createButton({ parentNode: mainButtons, text: 'Inicio' });
  createButton({ parentNode: mainButtons, text: 'Explorar' });
  createButton({ parentNode: mainButtons, text: 'Crear' });
};

export const createButton = ({ parentNode, text }) => {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add('button_menu');

  parentNode.appendChild(button);
};
