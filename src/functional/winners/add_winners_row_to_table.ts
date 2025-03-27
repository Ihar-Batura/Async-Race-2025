import { IWinnersData, ICarData } from '../../types/types';
import getCarData from '../../api/garage/get_car_data';
import createTableBodyRow from '../../components/table_body_row';

async function addWinnersRowToTable(pageNumber: string, arrWinners: IWinnersData[]): Promise<void> {
  const tableBody: HTMLElement | null = document.querySelector('.table-body');
  const startRowNumber: number = +pageNumber > 1 ? (+pageNumber - 1) * 10 + 1 : +pageNumber;

  for (let i = 0; i < arrWinners.length; i += 1) {
    const carId: number | undefined = arrWinners[i].id;

    const carInfo: ICarData | undefined = await getCarData(`${carId}`);
    if (carInfo) {
      const rowNumber: number = startRowNumber + i;
      const wins: number = arrWinners[i].wins;
      const time: number = arrWinners[i].time;

      const carColor: string = carInfo.color;
      const carName: string = carInfo.name;

      const newRow = createTableBodyRow(
        `${rowNumber}`,
        `${carColor}`,
        `${carName}`,
        `${wins}`,
        `${time}`
      );

      if (tableBody) {
        tableBody.append(newRow);
      }
    }
  }
}

export default addWinnersRowToTable;
