import './UserButton.css';

export const createUserBox = (parentNode) => {
  const userBox = document.createElement('div');
  userBox.classList.add('user_box', 'flex_container', 'display_none');

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
};

export function createUserButton({ parentNode, url, text }) {
  const button = document.createElement('button');
  button.className = 'user_button, flex_contaner';

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
    button.textContent = 'I';
    button.classList.add('user_name');
  }

  parentNode.appendChild(button);
}
