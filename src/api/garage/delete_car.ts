import updateGaragePage from '../../functional/page/updateGaragePage';

async function deleteCarFromDB(id: string): Promise<void> {
  const url: string = `http://127.0.0.1:3000/garage/${id}`;

  try {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    updateGaragePage();
  } catch (error) {
    console.log('Error in function deleteCarFromDB', error);
  }
}

export default deleteCarFromDB;
