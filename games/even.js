import getRandomNum from '../src/getRandomNum.js';

const gameNumberisEven = () => {
  const startGameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = getRandomNum(1, 101);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [startGameMessage, question, correctAnswer];
};

export default gameNumberisEven;
