import './Image.css';

export const createImg = ({ url, alt, parentNode, id }) => {
  const divImg = document.createElement('div');
  divImg.className = 'div_img';

  const img = document.createElement('img');
  img.src = url;

  const altMid = alt.replace(id, '');
  const altFixed = altMid.replaceAll('-', ' ');
  console.log(altFixed);
  img.alt = altFixed;

  divImg.appendChild(img);
  parentNode.appendChild(divImg);
};
