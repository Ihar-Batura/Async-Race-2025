import getInputValue from '../input/get_input_value';
import addCarToDB from '../../api/garage/add_car_in_db';
import cleanInputValue from '../input/clean_input_value';
import updateGaragePage from '../page/updateGaragePage';

function createNewCar(id: string): void {
  const carName: string = getInputValue(id + 'name');
  const carColor: string = getInputValue(id + 'color');

  if (carName.length > 0) {
    addCarToDB(carName, carColor);
    cleanInputValue(id + 'name');
    updateGaragePage();
  }
}

export default createNewCar;
