import createElement from '../create/create_element';
import createSvgElement from '../create/create_svg';

function createTableBodyRow(
  numberRow: string,
  carColor: string,
  carName: string,
  wins: string,
  timeRecord: string
): HTMLElement {
  const row: HTMLElement = createElement({ tag: 'tr', classes: ['table-body-row'] });

  const tdNumber: HTMLElement = createElement({
    tag: 'td',
    classes: ['table-cell'],
    text: numberRow,
  });

  const tdCarContainer: HTMLElement = createElement({ tag: 'td', classes: ['table-cell'] });
  const carIconContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['table-car'],
    parent: tdCarContainer,
  });

  carIconContainer.style.color = carColor;
  const svgCar: SVGSVGElement = createSvgElement();
  carIconContainer.append(svgCar);

  const tdCarName: HTMLElement = createElement({
    tag: 'td',
    classes: ['table-cell'],
    text: carName,
  });
  const tdWins: HTMLElement = createElement({
    tag: 'td',
    classes: ['table-cell'],
    text: wins,
  });
  const tdRecord: HTMLElement = createElement({
    tag: 'td',
    classes: ['table-cell'],
    text: timeRecord,
  });

  row.append(tdNumber, tdCarContainer, tdCarName, tdWins, tdRecord);

  return row;
}

export default createTableBodyRow;
