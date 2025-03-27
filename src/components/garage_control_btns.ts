import createElement from '../create/create_element';
import createButton from '../create/create_button';
import clickBtnRace from '../functional/button/click_btn_race';
import clickBtnReset from '../functional/button/click_btn_reset';
import createOneHundredRandomCars from '../functional/car/create_one_hundred_cars';

function createGarageControlBtns(): HTMLElement {
  const btnsContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['cars-control-btns-container'],
  });

  createButton({
    classes: ['btn', 'cars-control-btn', 'btn-color-green'],
    id: 'btn-race',
    text: 'Race',
    onClick: () => clickBtnRace(),
    parent: btnsContainer,
  });

  createButton({
    classes: ['btn', 'cars-control-btn', 'btn-color-red'],
    id: 'btn-reset',
    text: 'Reset',
    disabled: true,
    onClick: () => clickBtnReset(),
    parent: btnsContainer,
  });

  createButton({
    classes: ['btn', 'cars-control-btn', 'btn-color-green'],
    id: 'btn-random-cars',
    text: 'Generate 100 random cars',
    onClick: () => createOneHundredRandomCars(),
    parent: btnsContainer,
  });

  return btnsContainer;
}

export default createGarageControlBtns;
