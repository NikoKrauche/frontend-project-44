import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
};

const gameFindGcd = () => {
  const number1 = getRandomNumber(2, 51);
  const number2 = getRandomNumber(2, 51);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(findGcd(number1, number2));
  return [question, correctAnswer];
};

const startGame = () => {
  startEngine(description, gameFindGcd);
};

export default startGame;
