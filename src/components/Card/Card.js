import { createImg } from '/src/components/Card/Image/Image';
import { createBottomBox } from '/src/components/Card/BottomBox/BottomBox';

import './Card.css';

/* Hacer la funcionalidad del zoom? */

const imgContainer = document.createElement('div');
imgContainer.className = 'img_container';
document.body.appendChild(imgContainer);

export const createCard = ({ url, alt, name, date, id }) => {
  const divCard = document.createElement('div');
  divCard.className = 'div_card';

  createImg({ url, alt, parentNode: divCard, id });
  createBottomBox({ name, date, parentNode: divCard });

  imgContainer.appendChild(divCard);
};
