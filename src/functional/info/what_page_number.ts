function whatPageNumber(): string {
  const pageNumber: HTMLDivElement | null = document.querySelector('.page-number');

  if (pageNumber && pageNumber.textContent) {
    return pageNumber.textContent;
  }

  return '1';
}

export default whatPageNumber;
