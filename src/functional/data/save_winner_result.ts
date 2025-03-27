import { IWinnersData } from '../../types/types';
import getWinnersData from '../../api/winners/get_data';
import addNewWinnerToDB from '../../api/winners/add_new_winner_to_db';
import updateWinnerInDB from '../../api/winners/update_winner';

async function saveWinnerResult(id: string, finishTime: number): Promise<void> {
  const winnerData: IWinnersData[] | undefined = await getWinnersData(`/winners`);
  if (winnerData) {
    if (winnerData.length < 1) {
      addNewWinnerToDB(+id, 1, finishTime);
    }
    let wasWinner: boolean = false;

    winnerData.forEach((el) => {
      if (el.id === +id) {
        const newTime: number = el.time > finishTime ? el.time : finishTime;
        const newWins: number = el.wins + 1;
        updateWinnerInDB(+id, newWins, newTime);
        wasWinner = true;
      }
    });

    if (wasWinner === false) {
      addNewWinnerToDB(+id, 1, finishTime);
    }
  }
}

export default saveWinnerResult;
