async function switchCarEngine(id: string): Promise<boolean | undefined> {
  const url: string = `http://127.0.0.1:3000/engine?id=${id}&status=drive`;

  try {
    const response: Response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 500) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log('Error in function switchCarEngine', error);
  }
}

export default switchCarEngine;
