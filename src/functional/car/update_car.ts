import getInputValue from '../input/get_input_value';
import updateCarInDB from '../../api/garage/update_car_to_db';
import changeDisabledUpdateCarElements from '../element/change_disabled_update_car_elements';
import updateGaragePage from '../page/updateGaragePage';

function updateCar(): void {
  const newCarName: string = getInputValue('update-car-name');
  const newCarColor: string = getInputValue('update-car-color');
  const btnUpdateCar: HTMLElement | null = document.getElementById('update-car-btn');

  if (btnUpdateCar && btnUpdateCar instanceof HTMLButtonElement) {
    const carId: string = btnUpdateCar.value;

    updateCarInDB(newCarName, newCarColor, carId);
    changeDisabledUpdateCarElements(true);
    updateGaragePage();
  }
}

export default updateCar;
