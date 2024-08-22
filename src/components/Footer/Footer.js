import './Footer.css';

export const createFooter = () => {
  const footer = document.createElement('div');
  footer.className = 'div_footer';
  const h3 = document.createElement('h3');
  h3.textContent = '© 2024 Pintplash ';
  const p = document.createElement('p');
  p.textContent = 'Powered by Isco';

  footer.appendChild(h3);
  footer.appendChild(p);

  document.body.appendChild(footer);
};
