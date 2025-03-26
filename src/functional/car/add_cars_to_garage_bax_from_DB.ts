import { ICarsData } from '../../types/types';
import { garageCarsBox } from '../../elements/elements';
import cleanElement from '../clean/clean_element';
import createCarItem from '../../components/car_item';

function addCarsToGarageBoxFromDB(arrCarsData: ICarsData[]): void {
  cleanElement(garageCarsBox);

  arrCarsData.forEach((carData: ICarsData) => {
    const car = createCarItem({
      id: carData.id,
      name: carData.name,
      color: carData.color,
    });
    garageCarsBox.append(car);
  });
}

export default addCarsToGarageBoxFromDB;
