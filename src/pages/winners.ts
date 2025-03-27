import createElement from '../create/create_element';
import createPageNavigation from '../components/navigation';
import createTableHead from '../components/table_head';

function createWinnersPage(): HTMLElement {
  const winners: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
  });

  const winnersAmount: HTMLElement = createElement({
    tag: 'h3',
    text: '',
    classes: ['winners-cars-amount'],
  });

  const navigation: HTMLElement = createPageNavigation();
  const winnersTable: HTMLElement = createElement({
    tag: 'table',
    classes: ['winners-table'],
  });

  const tableHead: HTMLElement = createTableHead();
  winnersTable.append(tableHead);

  createElement({
    tag: 'tbody',
    classes: ['table-body'],
    parent: winnersTable,
  });

  winners.append(winnersAmount, navigation, winnersTable);

  return winners;
}

export default createWinnersPage;
