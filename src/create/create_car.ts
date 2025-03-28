import createElement from './create_element';
import createSvgElement from './create_svg';

function createCar(color: string): HTMLElement {
  const car: HTMLElement = createElement({
    tag: 'div',
    classes: ['car'],
  });

  car.style.color = color;

  const carSvg: SVGSVGElement = createSvgElement();
  car.append(carSvg);

  return car;
}

export default createCar;
