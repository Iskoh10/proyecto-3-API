import './UserButton.css';

export function createUserButton({ parentNode, url, text }) {
  const button = document.createElement('button');
  button.className = 'user_button, flex_contaner';

  if (url && text === 'notification') {
    const imgNotification = document.createElement('img');

    imgNotification.src = 'public/assets/notification.svg';
    imgNotification.alt = 'Notification';
    imgNotification.classList.add('img_notification', 'display_none');
    button.appendChild(imgNotification);
  } else if (text === 'message') {
    const imgMessage = document.createElement('img');
    imgMessage.src = url;
    imgMessage.alt = 'Message';
    imgMessage.classList.add('img_message', 'display_none');
    button.appendChild(imgMessage);
  } else {
    button.textContent = 'I';
    button.classList.add('user_name');
  }

  parentNode.appendChild(button);
}
