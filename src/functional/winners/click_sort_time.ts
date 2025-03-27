import updateWinnersPage from '../page/update_winners_page';

export default function clickSortOnTime(): void {
  const btnSortTime: Element | null = document.querySelector('.table-record');

  if (btnSortTime) {
    btnSortTime.addEventListener('click', sortWins);
  }
}

function sortWins(): void {
  const btnSortTime: Element | null = document.querySelector('.table-record');
  const btnSortWins: Element | null = document.querySelector('.table-wins');

  if (btnSortTime && btnSortWins) {
    if (!btnSortTime.classList.value.includes('sort-time-asd')) {
      updateWinnersPage(`time&_order=ASC`);
      btnSortTime.classList.add('sort-time-asd');
      btnSortTime.classList.remove('sort-time-desc');
      btnSortWins.classList.remove('sort-wins-asd');
      btnSortWins.classList.remove('sort-wins-desc');
    } else {
      updateWinnersPage(`time&_order=DESC`);
      btnSortTime.classList.add('sort-time-desc');
      btnSortTime.classList.remove('sort-time-asd');
      btnSortWins.classList.remove('sort-wins-asd');
      btnSortWins.classList.remove('sort-wins-desc');
    }
  }
}
