import getRandomNumber from '../getRandomNumber.js';

const findGcd = (x, y) => {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
};

const gameFindGcd = () => {
  const startGameMessage = 'Find the greatest common divisor of given numbers.';
  const firstNum = getRandomNumber(2, 51);
  const secondNum = getRandomNumber(2, 51);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(findGcd(firstNum, secondNum));
  return [startGameMessage, question, correctAnswer];
};

export default gameFindGcd;
