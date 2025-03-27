import { ICarData } from '../../types/types';

async function addCarToDB(carName: string, carColor: string): Promise<void> {
  const url: string = 'http://127.0.0.1:3000/garage';
  const data: ICarData = { name: carName, color: carColor };

  try {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log('Error in function addCarToDB', error);
  }
}

export default addCarToDB;
