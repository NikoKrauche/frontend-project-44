import getRandomNum from '../src/getRandomNum.js';

const getProgression = (firstNum, stepProgression) => {
  const progressionLength = 10 * stepProgression + firstNum;
  const arr = [];
  for (let i = firstNum; i < progressionLength; i += stepProgression) {
    arr.push(i);
  }
  return arr;
};

const gameProgression = () => {
  const startGameMessage = 'What number is missing in the progression?';
  const firstNum = getRandomNum(1, 51);
  const stepProgression = getRandomNum(1, 5);
  const progression = getProgression(firstNum, stepProgression);
  const getHiddenElement = getRandomNum(0, progression.length - 1);

  const correctAnswer = String(progression[getHiddenElement]);
  progression[getHiddenElement] = '..';
  const question = progression.join(' ');

  return [startGameMessage, question, correctAnswer];
};

export default gameProgression;
