export const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const drawNumbers = (): [number, number] => {
  const min = 1;
  const max = 20;

  let number1 = getRandomNumber(min, max);
  let number2 = getRandomNumber(min, max);

  while (number2 === number1) {
    number2 = getRandomNumber(min, max);
  }

  return [number1, number2];
};

export const getWinnerIndex = (winnerIndexes: number[]) =>
  winnerIndexes.length === 1 ? winnerIndexes[0] : null;
