function showSumCarsInGarage(sumCars: number): void {
  const carsInGarage: HTMLElement | null = document.querySelector('.garage-cars-amount');

  if (carsInGarage) {
    carsInGarage.textContent = `Cars in the garage (${sumCars})`;
  }
}

export default showSumCarsInGarage;
