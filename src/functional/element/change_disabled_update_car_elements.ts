import changeDisabledElementById from './change_element_disable_by_id';

function changeDisabledUpdateCarElements(action: boolean): void {
  changeDisabledElementById('update-car-name', action);
  changeDisabledElementById('update-car-color', action);
  changeDisabledElementById('update-car-btn', action);
}

export default changeDisabledUpdateCarElements;
