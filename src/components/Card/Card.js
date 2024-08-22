import { createImg } from '/src/components/Card/Image/Image';
import { createBottomBox } from '/src/components/Card/BottomBox/BottomBox';

import './Card.css';

const imgContainer = document.createElement('div');
imgContainer.classList.add('img_container', 'home');
const pHomeMessage = document.createElement('p');
pHomeMessage.textContent =
  "Hi!, I'm your gallery, search for a word and press the enter key! :)";
imgContainer.appendChild(pHomeMessage);
document.body.appendChild(imgContainer);

export const createMessageError = () => {
  imgContainer.innerHTML = '';
  imgContainer.classList.add('home');
  const pErrorMessage = document.createElement('p');
  pErrorMessage.className = 'p_error_m';
  pErrorMessage.textContent = 'My cute friend, search something! :)';

  imgContainer.appendChild(pErrorMessage);
};

export const createMessageNF = () => {
  imgContainer.innerHTML = '';
  imgContainer.classList.add('home');
  const pMessageNF = document.createElement('p');
  pMessageNF.className = 'p_m_nf';
  pMessageNF.textContent = `I'm sorry, No images found :(`;

  imgContainer.appendChild(pMessageNF);
};

export const createCard = ({
  url,
  alt,
  name,
  date,
  id,
  likes,
  photos,
  author
}) => {
  imgContainer.classList.remove('home');
  const divCard = document.createElement('div');
  divCard.className = 'div_card';

  createImg({ url, alt, parentNode: divCard, id, likes, photos, author });
  createBottomBox({ name, date, parentNode: divCard });

  imgContainer.appendChild(divCard);
};
