import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (number, step, length) => {
  const progressionLength = length * step + number;
  const arr = [];
  for (let i = number; i < progressionLength; i += step) {
    arr.push(i);
  }
  return arr;
};

const gerenerateRound = () => {
  const number = getRandomNumber(1, 51);
  const stepProgression = getRandomNumber(1, 5);
  const progressionLength = 10;
  const progression = getProgression(number, stepProgression, progressionLength);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);

  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const startGame = () => {
  startEngine(description, gerenerateRound);
};

export default startGame;
