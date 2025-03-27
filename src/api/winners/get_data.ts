import { IWinnersData } from '../../types/types';

async function getWinnersData(url: string): Promise<IWinnersData[] | undefined> {
  const fullUrl: string = `http://127.0.0.1:3000${url}`;

  try {
    const response: Response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: IWinnersData[] = await response.json();

    return data;
  } catch (error) {
    console.log('Error in function getWinnersData', error);
  }
}

export default getWinnersData;
