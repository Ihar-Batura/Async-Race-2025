import startCarEngine from '../../api/engine/start_engine';
import changeDisabledChildElement from '../element/change_disabled_child_element';

function clickBtnStartOneCar(): void {
  const startBtnsList: NodeListOf<Element> = document.querySelectorAll('.car-item-btn-start');

  if (startBtnsList.length > 0) {
    startBtnsList.forEach((btn) => {
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

        startCarEngine(parentId);

        btn.setAttribute('disabled', 'true');
        changeDisabledChildElement(parentId, 'car-item-btn-return', false);
      });
    });
  }
}

export default clickBtnStartOneCar;
