import createElement from '../create/create_element';

function createFooter(): HTMLElement {
  const footer: HTMLElement = createElement({ tag: 'footer', classes: ['footer'] });

  const wrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper'],
    parent: footer,
  });

  createElement({
    tag: 'p',
    classes: ['footer-year'],
    text: '© 2025',
    parent: wrapper,
  });

  const link: HTMLElement = createElement({
    classes: ['footer-link'],
    text: 'Ihar Batura',
    parent: wrapper,
  });

  link.setAttribute('href', 'https://github.com/Ihar-Batura');
  link.setAttribute('target', '_blank');

  return footer;
}

export default createFooter;
