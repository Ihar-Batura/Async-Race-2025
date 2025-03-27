import { ICarData } from '../../types/types';
import cleanElement from '../clean/clean_element';
import createCarItem from '../../components/car_item';

function addCarsToGarageBoxFromDB(arrCarsData: ICarData[]): void {
  const garageCarsBox: HTMLDivElement | null = document.querySelector('.garage-box');
  if (garageCarsBox) {
    cleanElement(garageCarsBox);

    arrCarsData.forEach((carData: ICarData) => {
      const car: HTMLElement = createCarItem({
        id: carData.id,
        name: carData.name,
        color: carData.color,
      });

      garageCarsBox.append(car);
    });
  }
}

export default addCarsToGarageBoxFromDB;
