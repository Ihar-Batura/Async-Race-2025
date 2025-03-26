import { ICarsData } from '../types/types';
import createElement from '../create/create_element';
import createCarItemBtns from './car_item_btns';
import createCar from '../create/create_car';

function createCarItem({ name, color, id }: ICarsData): HTMLElement {
  const carContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['car-container'],
    id: `${id}`,
  });

  const carManageBtns: HTMLElement = createCarItemBtns();

  createElement({
    tag: 'p',
    text: name,
    classes: ['car-name'],
    parent: carManageBtns,
  });

  const car: HTMLElement = createCar(color);

  createElement({
    tag: 'div',
    classes: ['finish-img'],
    parent: carContainer,
  });

  carContainer.append(carManageBtns, car);

  return carContainer;
}

export default createCarItem;
