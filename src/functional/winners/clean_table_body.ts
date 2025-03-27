import cleanElement from '../clean/clean_element';

function cleanTableBody(): void {
  const tableBody: HTMLElement | null = document.querySelector('.table-body');
  if (tableBody) {
    cleanElement(tableBody);
  }
}

export default cleanTableBody;
