function cleanInputValue(id: string): void {
  const input: HTMLElement | null = document.getElementById(`${id}`);

  if (input instanceof HTMLInputElement) {
    input.value = '';
  }
}

export default cleanInputValue;
