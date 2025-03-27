import { ICarData } from '../../types/types';
import isPageWinners from '../info/is_page_winners';
import whatPageNumber from '../info/what_page_number';
import changePageNumber from '../info/change_page_number';
import updateWinnersPage from '../page/update_winners_page';
import stateBtnsPrevAndNext from './state_btns_prev_and_next';
import getGarageData from '../../api/garage/get_data';
import addCarsToGarageBoxFromDB from '../car/add_cars_to_garage_box_from_DB';
import addListenersBtnsOnGaragePage from './add_listeners_btns_on_ garage_page';
import changeDisabledElementById from '../element/change_element_disable_by_id';

async function prevPage(): Promise<void> {
  const pageWinners: boolean = isPageWinners();
  const pageNumber: string = whatPageNumber();

  if (pageWinners) {
    changePageNumber(pageNumber, '-');
    updateWinnersPage('id');
    stateBtnsPrevAndNext();
  } else {
    const data: ICarData[] | undefined = await getGarageData(
      `/garage?_page=${+pageNumber - 1}&_limit=7`
    );
    const nextPageData: ICarData[] = data ?? [];

    addCarsToGarageBoxFromDB(nextPageData);
    addListenersBtnsOnGaragePage();
    changePageNumber(pageNumber, '-');
    stateBtnsPrevAndNext();
    changeDisabledElementById('btn-reset', true);
    changeDisabledElementById('btn-race', false);
  }
}

export default prevPage;
