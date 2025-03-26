import { carsAmountElement } from '../../elements/elements';

function showSumCarsInGarage(sumCars: number): void {
  carsAmountElement.textContent = `Cars in the garage (${sumCars})`;
}

export default showSumCarsInGarage;
