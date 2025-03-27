import createElement from '../create/create_element';
import createLink from '../create/create_link';

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

  createLink({
    href: 'https://github.com/Ihar-Batura',
    classes: ['footer-link'],
    text: 'Ihar Batura',
    target: '_blank',
    parent: wrapper,
  });

  return footer;
}

export default createFooter;
