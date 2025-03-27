import createElement from '../create/create_element';
import createGarageControlsContainer from '../components/garage_controls_container';
import createPageNavigation from '../components/navigation';

function createGaragePage(): HTMLElement {
  const garage: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
  });

  const control: HTMLElement = createGarageControlsContainer();
  const carsAmount: HTMLElement = createElement({
    tag: 'h3',
    text: '',
    classes: ['garage-cars-amount'],
  });

  const navigation: HTMLElement = createPageNavigation();
  const box: HTMLElement = createElement({ tag: 'div', classes: ['garage-box'] });

  garage.append(control, carsAmount, navigation, box);

  return garage;
}

export default createGaragePage;
