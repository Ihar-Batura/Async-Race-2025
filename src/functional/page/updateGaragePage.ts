import { ICarData } from '../../types/types';
import whatPageNumber from '../info/what_page_number';
import getGarageData from '../../api/garage/get_data';
import addCarsToGarageBoxFromDB from '../car/add_cars_to_garage_box_from_DB';
import showSumCarsInGarage from '../info/show_sum_cars_in_garage';
import stateBtnsPrevAndNext from '../button/state_btns_prev_and_next';
import addListenersBtnsOnGaragePage from '../button/add_listeners_btns_on_ garage_page';

async function updateGaragePage(): Promise<void> {
  const pageNumber: string = whatPageNumber();
  const pageData: ICarData[] | undefined = await getGarageData(
    `/garage?_page=${pageNumber}&_limit=7`
  );

  const garageThisPageData: ICarData[] = pageData ?? [];

  const garageData: ICarData[] | undefined = await getGarageData('/garage');
  const allGarageData: ICarData[] = garageData ?? [];
  const carsInGarage: number = allGarageData.length > 0 ? allGarageData.length : 0;

  addCarsToGarageBoxFromDB(garageThisPageData);
  showSumCarsInGarage(carsInGarage);
  stateBtnsPrevAndNext();
  addListenersBtnsOnGaragePage();
}

export default updateGaragePage;
