import getRandomNum from '../src/getRandomNum.js';

const isPrime = (firstNum) => {
  for (let i = 2; i < firstNum; i += 1) {
    if (firstNum % i === 0) return false;
  }
  return true;
};

const gamePrime = () => {
  const startGameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const firstNum = getRandomNum(2, 51);

  const question = firstNum;
  const correctAnswer = isPrime(firstNum) ? 'yes' : 'no';
  return [startGameMessage, question, correctAnswer];
};

export default gamePrime;
