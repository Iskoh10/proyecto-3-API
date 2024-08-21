import './SearchBar.css';

export const createSearchBar = (parentNode) => {
  const searchBar = document.createElement('div');
  searchBar.classList.add('search_bar', 'flex_container');

  const img = document.createElement('img');
  img.src = './public/assets/search.svg';
  img.className = 'search_img';

  searchBar.appendChild(img);

  const input = document.createElement('input');
  input.placeholder = 'Buscar';
  input.className = 'search_input';

  searchBar.appendChild(input);
  parentNode.appendChild(searchBar);

  const cancelIcon = document.createElement('img');
  cancelIcon.src = 'public/assets/cancel.svg';
  cancelIcon.classList.add('cancelIcon', 'display_none');

  searchBar.appendChild(cancelIcon);

  input.addEventListener('focus', (e) => {
    const searchImg = document.querySelector('.search_img');
    searchImg.classList.toggle('display_none');

    const cancelIcon = document.querySelector('.cancelIcon');
    cancelIcon.classList.toggle('display_none');
  });

  input.addEventListener('blur', (e) => {
    const searchImg = document.querySelector('.search_img');
    searchImg.classList.toggle('display_none');

    const cancelIcon = document.querySelector('.cancelIcon');
    cancelIcon.classList.toggle('display_none');
    e.target.value = '';
  });

  input.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') e.target.value = '';
  });
};
//! Implementar la funcionalidad de x cuando el elemento no se muestra, no existe */
