function saveCarIdInUpdateBtn(id: string): void {
  const btn: HTMLElement | null = document.getElementById('update-car-btn');
  if (btn && btn instanceof HTMLButtonElement) {
    btn.value = id;
  }
}

export default saveCarIdInUpdateBtn;
