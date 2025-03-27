import createElement from '../create/create_element';
import createGaragePage from '../pages/garage';

function createMain(): HTMLElement {
  const main: HTMLElement = createElement({ tag: 'main', classes: ['main'] });
  const garage: HTMLElement = createGaragePage();
  main.append(garage);

  return main;
}

export default createMain;
