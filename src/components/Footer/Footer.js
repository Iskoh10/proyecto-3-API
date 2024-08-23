import './Footer.css';

export const createFooter = () => {
  const footer = document.createElement('div');
  footer.classList.add('div_footer', 'flex_container');
  const h3 = document.createElement('h3');
  h3.className = 'flex_container';
  h3.textContent = '© 2024 Pintplash ';
  const p = document.createElement('p');
  p.className = 'flex_container';
  p.textContent = 'Powered by Isco';

  footer.appendChild(h3);
  footer.appendChild(p);

  document.body.appendChild(footer);
};
