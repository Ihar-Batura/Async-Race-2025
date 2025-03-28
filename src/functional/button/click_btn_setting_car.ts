import changeDisabledUpdateCarElements from '../element/change_disabled_update_car_elements';
import saveCarIdInUpdateBtn from './save_car_id_in_update_btn';
import fillUpdateCarInputsInfo from '../info/fill_update_car_inputs_info';

function clickBtnSettingCar(): void {
  const settingBtnsList: NodeListOf<Element> = document.querySelectorAll('.car-item-btn-change');

  if (settingBtnsList.length > 0) {
    settingBtnsList.forEach((btn) => {
      btn.addEventListener('click', function (event: Event) {
        if (!event || !event.target) return;

        const target: EventTarget = event.target;

        if (!(target instanceof HTMLButtonElement)) {
          return;
        }

        const parent: Element | null = target.offsetParent;

        if (!(parent instanceof HTMLDivElement)) {
          return;
        }

        const parentId: string = parent.id;

        changeDisabledUpdateCarElements(false);
        saveCarIdInUpdateBtn(parentId);
        fillUpdateCarInputsInfo(parentId);
      });
    });
  }
}

export default clickBtnSettingCar;
