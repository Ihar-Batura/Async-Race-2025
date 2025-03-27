import { ICarData } from '../types/types';
import createHeader from '../components/header';
import createMain from '../components/main';
import createFooter from '../components/footer';
import getGarageData from '../api/garage/get_data';
import showSumCarsInGarage from '../functional/info/show_sum_cars_in_garage';
import addCarsToGarageBoxFromDB from '../functional/car/add_cars_to_garage_box_from_DB';
import addListenersBtnsOnGaragePage from '../functional/button/add_listeners_btns_on_ garage_page';
import stateBtnsPrevAndNext from '../functional/button/state_btns_prev_and_next';

async function createHomePage(): Promise<void> {
  const body: HTMLBodyElement | null = document.querySelector('body');

  if (body) {
    const header: HTMLElement = createHeader();
    const main: HTMLElement = createMain();
    const footer: HTMLElement = createFooter();
    body.append(header, main, footer);
  }
  const garagePath: string = '/garage';
  const data: ICarData[] | undefined = await getGarageData(garagePath);
  const garageData: ICarData[] = data ?? [];

  showSumCarsInGarage(garageData.length);

  const garagePathFirstPage: string = '/garage?_page=1&_limit=7';
  const dataFirstPage: ICarData[] | undefined = await getGarageData(garagePathFirstPage);
  const garageDataFirstPage: ICarData[] = dataFirstPage ?? [];

  addCarsToGarageBoxFromDB(garageDataFirstPage);
  addListenersBtnsOnGaragePage();
  stateBtnsPrevAndNext();
}

export default createHomePage;
