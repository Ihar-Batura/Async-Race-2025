import changeDisabledElementById from '../element/change_element_disable_by_id';
import startCarEngine from '../../api/engine/start_engine';
import changeDisabledChildElement from '../element/change_disabled_child_element';

function clickBtnRace(): void {
  changeDisabledElementById('btn-race', true);

  const carsList: NodeListOf<Element> = document.querySelectorAll('.car-container');

  if (carsList.length > 0) {
    carsList.forEach((car) => {
      startCarEngine(car.id);
      changeDisabledChildElement(car.id, 'car-item-btn-start', true);
      changeDisabledChildElement(car.id, 'car-item-btn-return', false);
    });
  }

  changeDisabledElementById('btn-reset', false);
}

export default clickBtnRace;
