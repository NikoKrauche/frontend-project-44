import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (x, y, operator) => {
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

const gerenerateRound = () => {
  const operator = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 26);
  const number2 = getRandomNumber(1, 11);
  const randomOperator = operator[getRandomNumber(0, operator.length - 1)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, randomOperator));
  return [question, correctAnswer];
};

const startGame = () => {
  startEngine(description, gerenerateRound);
};

export default startGame;
