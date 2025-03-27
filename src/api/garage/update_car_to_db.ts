import { ICarData } from '../../types/types';

async function updateCarInDB(carName: string, carColor: string, id: string): Promise<void> {
  const baseUrl: string = `http://127.0.0.1:3000/garage/`;
  const fullUrl: string = `${baseUrl}${id}`;
  const data: ICarData = { name: carName, color: carColor };

  try {
    fetch(fullUrl, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log('Error in function updateCarInDB', error);
  }
}

export default updateCarInDB;
