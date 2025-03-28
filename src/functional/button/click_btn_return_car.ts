import changeDisabledChildElement from '../element/change_disabled_child_element';

function clickBtnReturnCar(): void {
  const returnBtnsList: NodeListOf<Element> = document.querySelectorAll('.car-item-btn-return');

  if (returnBtnsList.length > 0) {
    returnBtnsList.forEach((btn) => {
      btn.addEventListener('click', function (event: Event) {
        if (!event || !event.target) return;

        const target: EventTarget = event.target;

        if (!(target instanceof HTMLButtonElement)) {
          return;
        }

        const parent: Element | null = target.offsetParent;

        if (!(parent instanceof HTMLDivElement)) {
          return;
        }

        const parentId: string = parent.id;

        btn.setAttribute('disabled', 'true');
        changeDisabledChildElement(parentId, 'car-item-btn-start', false);
      });
    });
  }
}

export default clickBtnReturnCar;
