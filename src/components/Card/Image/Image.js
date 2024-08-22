import './Image.css';

export const createImg = ({
  url,
  alt,
  parentNode,
  id,
  likes,
  photos,
  author
}) => {
  const divImg = document.createElement('div');
  divImg.className = 'div_img';

  const img = document.createElement('img');
  img.src = url;

  const altMid = alt.replace(id, '');
  const altFixed = altMid.replaceAll('-', ' ');
  console.log(altFixed);
  img.alt = altFixed;

  divImg.appendChild(img);

  // Hover info
  const divLikes = document.createElement('div');
  divLikes.className = 'div_likes';

  const imgHeart = document.createElement('img');
  imgHeart.src = 'public/assets/likes.svg';

  const p = document.createElement('p');
  p.textContent = likes;

  divLikes.appendChild(imgHeart);
  divLikes.appendChild(p);

  const divPhotos = document.createElement('div');
  divPhotos.className = 'div_photos';

  const imgPhotos = document.createElement('img');
  imgPhotos.src = 'public/assets/pics.svg';

  const pPhotos = document.createElement('p');
  pPhotos.textContent = `+${photos}`;

  divPhotos.appendChild(imgPhotos);
  divPhotos.appendChild(pPhotos);

  const divAuthor = document.createElement('div');
  divAuthor.className = 'div_author';

  const imgAuthor = document.createElement('img');
  imgAuthor.src = author;

  divAuthor.appendChild(imgAuthor);

  divImg.appendChild(divPhotos);
  divImg.appendChild(divLikes);
  divImg.appendChild(divAuthor);
  parentNode.appendChild(divImg);
};
