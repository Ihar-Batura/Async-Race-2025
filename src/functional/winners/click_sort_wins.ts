import updateWinnersPage from '../page/update_winners_page';

export default function clickSortOnWins(): void {
  const btnSortWins: Element | null = document.querySelector('.table-wins');

  if (btnSortWins) {
    btnSortWins.addEventListener('click', sortWins);
  }
}

function sortWins(): void {
  const btnSortWins: Element | null = document.querySelector('.table-wins');
  const btnSortTime: Element | null = document.querySelector('.table-record');

  if (btnSortWins && btnSortTime) {
    if (!btnSortWins.classList.value.includes('sort-wins-asd')) {
      updateWinnersPage(`wins&_order=ASC`);
      btnSortWins.classList.add('sort-wins-asd');
      btnSortWins.classList.remove('sort-wins-desc');
      btnSortTime.classList.remove('sort-time-asd');
      btnSortTime.classList.remove('sort-time-desc');
    } else {
      updateWinnersPage(`wins&_order=DESC`);
      btnSortWins.classList.add('sort-wins-desc');
      btnSortWins.classList.remove('sort-wins-asd');
      btnSortTime.classList.remove('sort-time-asd');
      btnSortTime.classList.remove('sort-time-desc');
    }
  }
}
