import getRandomNum from '../src/getRandomNum.js';

const gcd = (x, y) => {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
};

const gameFindGcd = () => {
  const startGameMessage = 'Find the greatest common divisor of given numbers.';
  const firstNum = getRandomNum(2, 51);
  const secondNum = getRandomNum(2, 51);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(gcd(firstNum, secondNum));
  return [startGameMessage, question, correctAnswer];
};

export default gameFindGcd;
