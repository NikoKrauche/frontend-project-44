import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (number, stepProgression) => {
  const progressionLength = 10 * stepProgression + number;
  const arr = [];
  for (let i = number; i < progressionLength; i += stepProgression) {
    arr.push(i);
  }
  return arr;
};

const gameProgression = () => {
  const number = getRandomNumber(1, 51);
  const stepProgression = getRandomNumber(1, 5);
  const progression = getProgression(number, stepProgression);
  const getHiddenElement = getRandomNumber(0, progression.length - 1);

  const correctAnswer = String(progression[getHiddenElement]);
  progression[getHiddenElement] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGame = () => {
  startEngine(description, gameProgression);
};

export default startGame;
