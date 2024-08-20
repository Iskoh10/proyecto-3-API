import './SvgMenu.css';

export const createSvg = (parentNode) => {
  const divSvg = document.createElement('div');
  divSvg.className = 'div_svg';
  const svg = document.createElement('svg');
  svg.attributes.viewBox = '0 0 40 40';

  const pathOne = document.createElement('path');
  pathOne.id = 'one';
  pathOne.setAttribute('d', 'M 5 10 H 35');

  const pathTwo = document.createElement('path');
  pathTwo.id = 'two';
  pathTwo.setAttribute('d', 'M 5 20 H 35');

  const pathThree = document.createElement('path');
  pathThree.id = 'three';
  pathThree.setAttribute('d', 'M 5 30 H 35');

  svg.appendChild(pathOne);
  svg.appendChild(pathTwo);
  svg.appendChild(pathThree);

  divSvg.appendChild(svg);

  parentNode.appendChild(divSvg);
};
