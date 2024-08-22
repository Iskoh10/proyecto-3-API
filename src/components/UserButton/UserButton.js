import './UserButton.css';

export const createUserBox = (parentNode) => {
  const userBox = document.createElement('div');
  userBox.classList.add('user_box');

  parentNode.appendChild(userBox);

  createUserButton({
    parentNode: userBox,
    url: 'public/assets/notification.svg',
    text: 'notification'
  });
  createUserButton({
    parentNode: userBox,
    url: 'public/assets/message.svg',
    text: 'message'
  });

  createUserButton({ parentNode: userBox });
};

export function createUserButton({ parentNode, url, text }) {
  const button = document.createElement('button');
  button.className = 'user_button';

  if (url && text === 'notification') {
    const imgNotification = document.createElement('img');
    imgNotification.src = 'public/assets/notification.svg';
    imgNotification.alt = 'Notification';
    imgNotification.classList.add('img_notification');
    button.appendChild(imgNotification);
  } else if (text === 'message') {
    const imgMessage = document.createElement('img');
    imgMessage.src = url;
    imgMessage.alt = 'Message';
    imgMessage.classList.add('img_message');
    button.appendChild(imgMessage);
  } else {
    const p = document.createElement('p');
    p.textContent = 'I';
    button.classList.add('user_name');
    button.appendChild(p);
  }

  parentNode.appendChild(button);
}

//! Cambiar botonera de 3 por 1 button user en vez de ocultar 2 de ellos, ocultar la botonera de 3 y mostrar solo la de 1.
