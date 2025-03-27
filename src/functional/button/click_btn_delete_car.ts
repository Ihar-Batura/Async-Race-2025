import deleteCarFromDB from '../../api/garage/delete_car';
import deleteWinnerFromDB from '../../api/winners/delete_winner';

function clickBtnDeleteCar(): void {
  const deleteBtnsList: NodeListOf<Element> = document.querySelectorAll('.car-item-btn-delete');

  if (deleteBtnsList.length > 0) {
    deleteBtnsList.forEach((btn) => {
      btn.addEventListener('click', function (event: Event) {
        if (!event || !event.target) return;

        const target: EventTarget = event.target;

        if (!(target instanceof HTMLButtonElement)) {
          return;
        }

        const parent = target.offsetParent;

        if (!(parent instanceof HTMLDivElement)) {
          return;
        }

        const parentId: string = parent.id;

        deleteCarFromDB(parentId);
        deleteWinnerFromDB(parentId);
      });
    });
  }
}

export default clickBtnDeleteCar;
