import './BottomBox.css';

export const createBottomBox = ({ name, date, parentNode }) => {
  const divBottomBox = document.createElement('div');
  divBottomBox.className = 'div_bottom_box';

  const pName = document.createElement('p');
  pName.textContent = name;

  const pDate = document.createElement('p');

  const dateDay = date.substring(8, 10);
  const dateMonth = date.substring(5, 7);
  const dateYear = date.substring(0, 4);

  const dateFixed = `${dateDay}/${dateMonth}/${dateYear}`;
  pDate.textContent = dateFixed;

  divBottomBox.appendChild(pName);
  divBottomBox.appendChild(pDate);

  parentNode.appendChild(divBottomBox);
};
