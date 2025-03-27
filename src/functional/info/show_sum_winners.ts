function showSumWinners(sumWinners: number): void {
  const winners: HTMLElement | null = document.querySelector('.winners-cars-amount');

  if (winners) {
    winners.textContent = `Winners ( ${sumWinners} )`;
  }
}

export default showSumWinners;
