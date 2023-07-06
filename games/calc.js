import getRandomNum from '../src/getRandomNum.js';

const mathOperations = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
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

export default gameCalc;
