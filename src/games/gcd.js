import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
};

const gameFindGcd = () => {
  const firstNum = getRandomNumber(2, 51);
  const secondNum = getRandomNumber(2, 51);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(findGcd(firstNum, secondNum));
  return [question, correctAnswer];
};

const startGame = () => {
  startEngine(description, gameFindGcd);
};

export default startGame;
