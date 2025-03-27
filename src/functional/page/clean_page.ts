import cleanElement from '../clean/clean_element';

function cleanPage(): void {
  const page: HTMLDivElement | null = document.querySelector('.main');
  if (page) {
    cleanElement(page);
  }
}

export default cleanPage;
