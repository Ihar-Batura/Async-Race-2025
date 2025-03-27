import randomNumber from '../info/get_random_number';
import convertRgbToHex from '../info/convert_rgb_to_hex';
import addCarToDB from '../../api/garage/add_car_in_db';
import updateGaragePage from '../page/updateGaragePage';

const arrCarNames: string[] = [
  'Chevrolet',
  'Land Rover',
  'Buick',
  'Tesla',
  'Toyota',
  'Bugatti',
  'Volvo',
  'Volkswagen',
  'BMW',
  'Maserati',
  'Lexus',
  'Infiniti',
  'Jaguar',
  'Suzuki',
  'Bentley',
  'Mazda',
  'Subaru',
  'Cadillac',
  'Škoda',
  'Jeep',
  'SAAB',
  'Rolls-Royce',
  'Hyundai',
  'SEAT',
  'Hummer',
  'Ford',
  'Peugeot',
  'DAF',
  'Renault',
  'Porsche',
  'Ferrari',
  'Honda',
  'Dacia',
  'Ford',
  'Packard',
  'Opel',
  'Mitsubishi',
  'Nissan',
  'Citroën',
];

const arrCarModels: string[] = [
  'E38',
  'M5',
  'X1',
  'G70',
  'i7',
  'i8',
  'CX-60',
  'MX-30',
  'RX-7',
  'BT-50',
  'CX-80',
  'S40',
  'S90',
  'F88',
  'L340',
  'LV120',
  'EM90',
  '960',
  '700',
  'VS5',
  'Tiguan',
  'Touareg',
  'LT',
  'Golf',
  'XL1',
  'Rapid',
  'Superb',
  'Fabia',
  'Kaptur',
  'Sandero',
  'Scénic',
  'Duster',
  '911',
  '959',
  'GT',
  'Panamera',
  'Cayenne',
  'Vectra',
  'Zafira',
];

function createOneHundredRandomCars(): void {
  for (let i = 0; i < 100; i += 1) {
    const randomNameNumber: number = randomNumber(0, 38);
    const randomModelNumber: number = randomNumber(0, 38);
    const firstRandomColor: number = randomNumber(0, 255);
    const secondRandomColor: number = randomNumber(0, 255);
    const thirdRandomColor: number = randomNumber(0, 255);
    const carName: string = `${arrCarNames[randomNameNumber]} ${arrCarModels[randomModelNumber]}`;
    const color: string = convertRgbToHex(
      `rgb(${firstRandomColor}, ${secondRandomColor}, ${thirdRandomColor})`
    );

    addCarToDB(carName, color);
  }

  updateGaragePage();
}

export default createOneHundredRandomCars;
