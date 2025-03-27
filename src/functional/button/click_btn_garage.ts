import cleanPage from '../page/clean_page';
import changePage from '../page/change_page';
import updateGaragePage from '../page/updateGaragePage';

function clickBtnGarage(): void {
  const btnWinners: HTMLButtonElement | null = document.querySelector('.winners-btn');
  const btnGarage: HTMLButtonElement | null = document.querySelector('.garage-btn');

  if (btnWinners && btnGarage) {
    btnWinners.classList.remove('active');
    btnGarage.classList.add('active');
  }

  cleanPage();
  changePage('garage');
  updateGaragePage();
}

export default clickBtnGarage;
