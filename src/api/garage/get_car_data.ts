import { ICarData } from '../../types/types';

async function getCarData(id: string): Promise<ICarData | undefined> {
  const url: string = `http://127.0.0.1:3000/garage/${id}`;

  try {
    const response: Response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: ICarData = await response.json();
    return data;
  } catch (error) {
    console.log('Error in function getCarData', error);
  }
}

export default getCarData;
