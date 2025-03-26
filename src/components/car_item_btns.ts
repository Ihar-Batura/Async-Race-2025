import createElement from '../create/create_element';
import createButton from '../create/create_button';

function createCarItemBtns(): HTMLElement {
  const carItemBtnsContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['car-item-btns-container'],
  });

  createButton({
    classes: ['car-item-btn', 'car-item-btn-start'],
    parent: carItemBtnsContainer,
  });
  createButton({
    classes: ['car-item-btn', 'car-item-btn-return'],
    disabled: true,
    parent: carItemBtnsContainer,
  });
  createButton({
    classes: ['car-item-btn', 'car-item-btn-change'],
    parent: carItemBtnsContainer,
  });
  createButton({
    classes: ['car-item-btn', 'car-item-btn-delete'],
    parent: carItemBtnsContainer,
  });

  return carItemBtnsContainer;
}

export default createCarItemBtns;
