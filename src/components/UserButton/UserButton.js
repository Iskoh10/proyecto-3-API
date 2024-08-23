import './UserButton.css';

export const createUserBox = (parentNode) => {
  const userBox = document.createElement('div');
  userBox.classList.add('user_box');

  const button1 = document.createElement('button');
  button1.className = 'button_only_name';

  const p1 = document.createElement('p');
  p1.textContent = 'I';

  button1.appendChild(p1);
  parentNode.appendChild(button1);

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
    button.classList.add('user_name', 'flex_container');
    button.appendChild(p);
  }

  parentNode.appendChild(button);
}
