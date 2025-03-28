import whatPageNumber from '../info/what_page_number';
import isPageWinners from '../info/is_page_winners';
import howMatchThereCarsOrWinners from '../info/how_much_there_cars_or_winners';
import changeDisabledElementById from '../element/change_element_disable_by_id';

function stateBtnsPrevAndNext(): void {
  const page: string = whatPageNumber();
  const pageWinners: boolean = isPageWinners();
  let pagesAmount: number;

  if (pageWinners) {
    const pagesWinners: string = howMatchThereCarsOrWinners('winners-cars-amount');
    const pagesWinnersAmount: number = Math.ceil(+pagesWinners / 10);
    pagesAmount = pagesWinnersAmount;
  } else {
    const pagesGarage: string = howMatchThereCarsOrWinners('garage-cars-amount');
    const pagesGarageAmount: number = Math.ceil(+pagesGarage / 7);
    pagesAmount = pagesGarageAmount;
  }

  if (page === '1') {
    changeDisabledElementById('btn-prev', true);
  }
  if (page !== '1') {
    changeDisabledElementById('btn-prev', false);
  }
  if (+page < pagesAmount) {
    changeDisabledElementById('btn-next', false);
  }
  if (+page === pagesAmount) {
    changeDisabledElementById('btn-next', true);
  }
}

export default stateBtnsPrevAndNext;
