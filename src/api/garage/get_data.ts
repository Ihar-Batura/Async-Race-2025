import { ICarData } from '../../types/types';

async function getGarageData(url: string): Promise<ICarData[] | undefined> {
  const baseUrl: string = 'http://127.0.0.1:3000';
  const fullUrl: string = `${baseUrl}${url}`;

  try {
    const response: Response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: ICarData[] = await response.json();
    return data;
  } catch (error) {
    console.log('Error in function getGarageData', error);
  }
}

export default getGarageData;
