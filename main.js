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

  const response = await fetch(
    endPoint + '?query=' + word + '&client_id=' + accesKey
  );
  const jsonResponse = await response.json();
  const imagesList = await jsonResponse;

  if (imagesList.results.length === 0) {
    createMessageNF();
  } else {
    console.log(imagesList.results);
    for (const image of imagesList.results) {
      console.log(image.likes);
      console.log(image.urls.small);
      console.log(image.user.name);
      console.log(image.alternative_slugs.es);
      console.log(image.id);
      console.log(image.user.profile_image.large);
      console.log(image.created_at);
      console.log(image.user.total_photos);

      createCard({
        url: image.urls.small,
        alt: image.alternative_slugs.es,
        name: image.user.name,
        date: image.created_at,
        id: image.id
      });
    }
  }
}

createFooter();

//! comprobar funcionalidad keydown
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
