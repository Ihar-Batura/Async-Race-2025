import { IControlCarCreateUpdate } from '../types/types';
import createElement from '../create/create_element';
import createInput from '../create/create_input';
import createButton from '../create/create_button';
import isValidInput from '../functional/input/check_is_valid_input';
import createNewCar from '../functional/car/create_new_car';
import updateCar from '../functional/car/update_car';

function createControlCarCreateUpdate({
  placeholderText,
  disabled,
  text,
  id,
}: IControlCarCreateUpdate): HTMLElement {
  const carsControl: HTMLElement = createElement({ tag: 'div', classes: ['cars-control'] });
  const isCreateBtn: boolean = text === 'Create car';

  createInput({
    type: 'text',
    classes: ['cars-control-name'],
    id: id + 'name',
    placeholder: placeholderText,
    disabled: disabled,
    onInput: () => isValidInput(`${id}name`),
    parent: carsControl,
  });

  createInput({
    type: 'color',
    classes: ['cars-control-color'],
    id: id + 'color',
    disabled: disabled,
    value: '#4327D3',
    parent: carsControl,
  });

  createButton({
    text: text,
    classes: ['btn', 'cars-control-btn', 'btn-color-green'],
    id: id + 'btn',
    disabled: disabled,
    onClick: () => (isCreateBtn ? createNewCar(id) : updateCar()),
    parent: carsControl,
  });

  return carsControl;
}

export default createControlCarCreateUpdate;
