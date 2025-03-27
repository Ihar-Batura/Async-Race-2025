function getInputValue(id: string): string {
  const input: HTMLInputElement | null = document.querySelector(`#${id}`);
  let inputValue: string = '';

  if (input) {
    inputValue = input.value;
  }

  return inputValue;
}

export default getInputValue;
