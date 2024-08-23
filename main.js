import { createNavegationBar } from './src/components/NavegationBar/NavegationBar';
import {
  createCard,
  createMessageError,
  createMessageNF
} from './src/components/Card/Card';
import { createFooter } from './src/components/Footer/Footer';

import './style.css';

createNavegationBar();

const accesKey = 'lMiIkUnDewtiw_AZ1UtB5klwvpwLPHBeBPl6oLWf2ZQ';
const endPoint = 'https://api.unsplash.com/search/photos';

async function getImages(word) {
  const imgContainer = document.querySelector('.img_container');
  imgContainer.innerHTML = '';
  window.scrollTo(0, 0);

  let imagesList = [];
  try {
    const response = await fetch(
      `${endPoint}?query=${word}&client_id=${accesKey}`
    );
    const jsonResponse = await response.json();
    imagesList = await jsonResponse;
  } catch (error) {
    console.log(error);
  }

  if (imagesList.results.length === 0) {
    createMessageNF();
  } else {
    for (const image of imagesList.results) {
      createCard({
        url: image.urls.small,
        alt: image.alternative_slugs.es,
        name: image.user.name,
        date: image.created_at,
        id: image.id,
        likes: image.likes,
        photos: image.user.total_photos,
        author: image.user.profile_image.large
      });
    }
  }
}

createFooter();

const input = document.querySelector('.search_input');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (input.value != '') {
      getImages(input.value);
      input.value = '';
    } else {
      createMessageError();
    }
  }
});
