import getRandomNumber from '../src/getRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const gameNumberisEven = () => {
  const startGameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = getRandomNumber(1, 101);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [startGameMessage, question, correctAnswer];
};

export default gameNumberisEven;
