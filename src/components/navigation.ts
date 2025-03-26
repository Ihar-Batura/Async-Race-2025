import createElement from '../create/create_element';
import createButton from '../create/create_button';

function createPageNavigation(): HTMLElement {
  const navigation: HTMLElement = createElement({ tag: 'div', classes: ['navigation'] });

  createButton({
    text: 'Prev',
    classes: ['btn', 'navigation-btn', 'prev-btn'],
    id: 'btn-prev',
    disabled: true,
    //onClick: () => prevPage(),
    parent: navigation,
  });

  createElement({
    tag: 'div',
    text: '1',
    classes: ['page-number'],
    parent: navigation,
  });

  createButton({
    text: 'Next',
    classes: ['btn', 'navigation-btn', 'next-btn'],
    disabled: true,
    id: 'btn-next',
    //onClick: () => nextPage(),
    parent: navigation,
  });

  return navigation;
}

export default createPageNavigation;
