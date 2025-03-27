async function deleteWinnerFromDB(id: string): Promise<void> {
  const url: string = `http://127.0.0.1:3000/winners/${id}`;
  try {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log('Error in function deleteWinnerFromDB', error);
  }
}

export default deleteWinnerFromDB;
