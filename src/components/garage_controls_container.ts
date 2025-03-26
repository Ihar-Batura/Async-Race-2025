import createElement from '../create/create_element';
import createControlCarCreateUpdate from './garage_control_car_create_or_update';
import createGarageControlBtns from './garage_control_btns';

function createGarageControlsContainer(): HTMLElement {
  const controlContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['garage-control'],
  });

  const createCar: HTMLElement = createControlCarCreateUpdate({
    placeholderText: 'Car name',
    disabled: false,
    text: 'Create car',
    id: 'create-car-',
  });

  const updateCar: HTMLElement = createControlCarCreateUpdate({
    placeholderText: 'Change car name',
    disabled: true,
    text: 'Update car',
    id: 'update-car-',
  });

  const btnsContainer: HTMLElement = createGarageControlBtns();

  controlContainer.append(createCar, updateCar, btnsContainer);

  return controlContainer;
}

export default createGarageControlsContainer;
