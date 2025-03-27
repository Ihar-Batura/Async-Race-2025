import { IEngineData } from '../../types/types';
import makeCarMove from '../../functional/car/make_car_move';

async function startCarEngine(id: string): Promise<void> {
  const url: string = `http://127.0.0.1:3000/engine?id=${id}&status=started`;

  try {
    const response: Response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: IEngineData = await response.json();
    const time: number = Math.trunc(data.distance / data.velocity);

    makeCarMove(id, time);
  } catch (error) {
    console.log('Error in function startCarEngine', error);
  }
}

export default startCarEngine;
