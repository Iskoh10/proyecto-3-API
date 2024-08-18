import './UserButton.css';

export function createUserButton(parentNode) {
  const button = document.createElement('button');
  button.className = 'user_button';
  button.textContent = 'I';
  parentNode.appendChild(button);
}
