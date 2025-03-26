import createElement from '../create/create_element';

export const carsAmountElement = createElement({
  tag: 'h3',
  text: 'Cars in the garage (0)',
  classes: ['garage-cars-amount'],
});

export const garageCarsBox = createElement({ tag: 'div', classes: ['garage-box'] });
