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

  input.addEventListener('focus', () => {
    const searchImg = document.querySelector('.search_img');
    searchImg.classList.toggle('display_none');
  });

  input.addEventListener('blur', () => {
    const searchImg = document.querySelector('.search_img');
    searchImg.classList.toggle('display_none');
  });

  searchBar.appendChild(input);

  parentNode.appendChild(searchBar);
};
