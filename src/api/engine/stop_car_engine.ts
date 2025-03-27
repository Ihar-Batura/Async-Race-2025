import { IEngineData } from '../../types/types';

async function stopCarEngine(id: string): Promise<number | undefined> {
  const url: string = `http://127.0.0.1:3000/engine?id=${id}&status=stopped`;

  try {
    const response: Response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: IEngineData = await response.json();

    return data.velocity;
  } catch (error) {
    console.log('Error in function stopCarEngine', error);
  }
}

export default stopCarEngine;
