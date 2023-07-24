import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (x, y, operators) => {
  switch (operators) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator or operands: '${x}, ${y}, ${operators}'!`);
  }
};

const gerenerateRound = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 26);
  const number2 = getRandomNumber(1, 11);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = String(calculate(number1, number2, randomOperator));
  return [question, answer];
};

const startGame = () => {
  startEngine(description, gerenerateRound);
};

export default startGame;
