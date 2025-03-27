import { IWinnersData } from '../../types/types';
import cleanTableBody from '../winners/clean_table_body';
import whatPageNumber from '../info/what_page_number';
import getWinnersData from '../../api/winners/get_data';
import showSumWinners from '../info/show_sum_winners';
import addWinnersRowToTable from '../winners/add_winners_row_to_table';
import stateBtnsPrevAndNext from '../button/state_btns_prev_and_next';
import clickSortOnWins from '../winners/click_sort_wins';
import clickSortOnTime from '../winners/click_sort_time';

async function updateWinnersPage(sort: string): Promise<void> {
  cleanTableBody();
  const pageNumber: string = whatPageNumber();
  const data: IWinnersData[] | undefined = await getWinnersData(
    `/winners?_page=${pageNumber}&_limit=10&_sort=${sort}`
  );
  const winnersPageData: IWinnersData[] = data ?? [];

  const fullData = await getWinnersData('/winners');
  const winnersData: IWinnersData[] = fullData ?? [];

  const winnersValue: number = winnersData.length > 0 ? winnersData.length : 0;
  showSumWinners(winnersValue);
  addWinnersRowToTable(pageNumber, winnersPageData);
  stateBtnsPrevAndNext();
  clickSortOnWins();
  clickSortOnTime();
}

export default updateWinnersPage;
