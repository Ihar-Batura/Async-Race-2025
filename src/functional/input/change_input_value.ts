function changeInputValue(id: string, value: string): void {
  const input: HTMLElement | null = document.getElementById(`${id}`);

  if (input && input instanceof HTMLInputElement) {
    input.value = value;
  }
}

export default changeInputValue;
