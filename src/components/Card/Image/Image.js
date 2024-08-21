import './Image.css';

const navContainer = document.querySelector('.navegation_bar');
const imgContainer = document.createElement('div');
imgContainer.className = 'img_container';
document.body.appendChild(imgContainer);

export const createImg = ({ url, alt }) => {
  const divImg = document.createElement('div');
  divImg.className = 'div_img';

  const img = document.createElement('img');
  img.src = url;
  img.alt = alt;

  divImg.appendChild(img);
  imgContainer.appendChild(divImg);
};
