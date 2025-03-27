import createElement from '../../create/create_element';
import saveWinnerResult from '../data/save_winner_result';

function showFasterCar(id: string, time: number): void {
  const finishTime: number = +(time / 1000).toFixed(2);
  const carElement: HTMLElement | null = document.getElementById(`${id}`);
  const garageBox: HTMLElement | null = document.querySelector('.garage-box');
  const btnRace: HTMLElement | null = document.getElementById('btn-race');

  if (garageBox && carElement) {
    const carName: HTMLElement | null = carElement.querySelector('.car-name');

    const winner: HTMLElement | null = document.getElementById('winner-car');

    if (btnRace && btnRace.hasAttribute('disabled')) {
      if (!winner && carName) {
        createElement({
          tag: 'div',
          id: 'winner-car',
          text: `Winner: ${carName.textContent} ${finishTime}s`,
          parent: garageBox,
        });

        saveWinnerResult(id, finishTime);
      }
    }
  }
}

export default showFasterCar;
