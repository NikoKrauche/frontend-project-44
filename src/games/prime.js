import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const gerenerateRound = () => {
  const question = getRandomNumber(1, 51);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  startEngine(description, gerenerateRound);
};

export default startGame;
