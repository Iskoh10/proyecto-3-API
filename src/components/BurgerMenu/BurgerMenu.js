import './BurgerMenu.css';

export const createBurgerMenu = (parentNode) => {
  const divMenu = document.createElement('div');
  divMenu.classList.add('div_menu', 'flex_container');

  divMenu.addEventListener('click', () => {
    const menu = document.querySelector('.div_menu');
    menu.classList.toggle('open');

    const dropDown = document.querySelector('.dp_content');
    dropDown.classList.toggle('display_none');
  });

  const barMenu = document.createElement('div');
  barMenu.className = 'bar_menu';

  divMenu.appendChild(barMenu);

  parentNode.appendChild(divMenu);
};

export const createDropDown = (parentNode) => {
  const dropDownContent = document.createElement('div');
  dropDownContent.classList.add('dp_content', 'display_none');

  const ul = document.createElement('ul');
  const liInicio = document.createElement('li');
  liInicio.className = 'li_inicio';
  liInicio.textContent = 'Inicio';

  const liExplorar = document.createElement('li');
  liExplorar.className = 'li_explorar';
  liExplorar.textContent = 'Explorar';

  const liCrear = document.createElement('li');
  liCrear.className = 'li_Crear';
  liCrear.textContent = 'Crear';

  ul.appendChild(liInicio);
  ul.appendChild(liExplorar);
  ul.appendChild(liCrear);
  dropDownContent.appendChild(ul);

  parentNode.appendChild(dropDownContent);
};
