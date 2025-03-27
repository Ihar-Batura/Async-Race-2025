import changeDisabledElementById from '../element/change_element_disable_by_id';
import deleteFasterCar from '../info/delete_faster_car';
import changeDisabledChildElement from '../element/change_disabled_child_element';

function clickBtnReset(): void {
  changeDisabledElementById('btn-reset', true);
  changeDisabledElementById('btn-race', false);
  deleteFasterCar();

  const carsList: NodeListOf<Element> = document.querySelectorAll('.car-container');

  if (carsList.length > 0) {
    carsList.forEach((car) => {
      changeDisabledChildElement(car.id, 'car-item-btn-start', false);
      changeDisabledChildElement(car.id, 'car-item-btn-return', true);
    });
  }
}

export default clickBtnReset;
