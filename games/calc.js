import getRandomNum from '../src/getRandomNum.js';
import startEngine from '../src/index.js';

const mathOperations = (x, operator, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return null;
  }
};

const gameCalc = () => {
  const startGameMessage = 'What is the result of the expression?';
  const operator = ['+', '-', '*'];
  const firstNum = getRandomNum(1, 26);
  const secondNum = getRandomNum(1, 11);
  const randomOperator = operator[getRandomNum(0, operator.length - 1)];
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  const correctAnswer = String(mathOperations(firstNum, randomOperator, secondNum));
  return [startGameMessage, question, correctAnswer];
};

const startGame = () => {
  startEngine(gameCalc);
};

export default startGame;
