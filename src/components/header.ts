import createElement from '../create/create_element';
import createButton from '../create/create_button';

function createHeader(): HTMLElement {
  const header: HTMLElement = createElement({ tag: 'header', classes: ['header'] });
  const wrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper'],
    parent: header,
  });

  createElement({
    tag: 'h1',
    classes: ['logo'],
    text: 'Async race',
    parent: wrapper,
  });

  const btnsContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['btn-container'],
    parent: wrapper,
  });

  createButton({
    classes: ['btn', 'garage-btn', 'active'],
    text: 'Garage',
    //onClick: () => clickBtnGarage(),
    parent: btnsContainer,
  });

  createButton({
    classes: ['btn', 'winners-btn'],
    text: 'Winners',
    //onClick: () => clickBtnWinners(),
    parent: btnsContainer,
  });

  return header;
}

export default createHeader;
