function randomNumber(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max - min));
}

export default randomNumber;
