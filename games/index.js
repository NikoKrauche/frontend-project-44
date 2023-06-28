import readlineSync from 'readline-sync';
import { welcomeUser, name } from '../src/cli.js';

console.log(welcomeUser);
const startGameMessageEven = `${'Answer "yes" if the number is even, otherwise answer "no".'}`;
const startGameMessageCalc = `${'What is the result of the expression?'}`;
const startGameMassageGcd = `${'Find the greatest common divisor of given numbers.'}`;
const userWinMessage = `${'Congratulations, '}${`${name}!`}`;

const maxRoundsGame = 3;
const minNumInArr = 50;
const maxNumInArr = 101;
const getRandomIntArr01 = [...Array(maxRoundsGame)];
for (let i = 0; i < getRandomIntArr01.length; i += 1) {
  getRandomIntArr01[i] = Math.floor(Math.random() * (maxNumInArr - minNumInArr)) + minNumInArr;
}

const getRandomIntArr02 = [...Array(maxRoundsGame)];
for (let i = 0; i < getRandomIntArr02.length; i += 1) {
  getRandomIntArr02[i] = Math.floor(Math.random() * (maxNumInArr - minNumInArr)) + minNumInArr;
}

export const gameNumberisEven = (arr = getRandomIntArr01) => {
  console.log(startGameMessageEven);
  let result = '';

  for (let i = 0; i <= arr.length - 1; i += 1) {
    const answerUser = readlineSync.question(`${`${'Question: '}${getRandomIntArr01[i]}`}\nYour answer: `);

    if (((arr[i] % 2 === 0) && answerUser === 'yes') || ((arr[i] % 2 !== 0) && answerUser === 'no')) {
      console.log('Correct!');
    } else {
      const correctAnswer = arr[i] % 2 === 0 ? 'yes' : 'no';
      const userLoseMessage = `${`'${answerUser}'`} ${'is wrong answer ;(. Correct answer was '}${`'${correctAnswer}'`}.}\n${'Let\'s try again, '}${`${name}!`}`;
      return userLoseMessage;
    }
    if (i >= arr.length - 1) {
      result = userWinMessage;
    }
  }
  return result;
};

export const gameCalc = (arr01 = getRandomIntArr01) => {
  console.log(startGameMessageCalc);
  let result = '';
  const operator = ['+', '-', '*'];
  const sum = (a, b) => a + b;
  const subtraction = (a, b) => a - b;
  const multiplication = (a, b) => a * b;
  const mathOperations = [sum, subtraction, multiplication];

  for (let i = 0; i <= arr01.length - 1; i += 1) {
    const answerUser = readlineSync.question(`${`${'Question: '}${getRandomIntArr01[i]} ${operator[i]} ${getRandomIntArr02[i]}`}\nYour answer: `);

    if ((mathOperations[i](getRandomIntArr01[i], getRandomIntArr02[i])) === +(answerUser)) {
      console.log('Correct!');
    } else {
      const correctAnswer = mathOperations[i](getRandomIntArr01[i], getRandomIntArr02[i]);
      const userLoseMessage = `${`'${answerUser}'`} ${'is wrong answer ;(. Correct answer was '}${`'${correctAnswer}'`}.}\n${'Let\'s try again, '}${`${name}!`}`;
      return userLoseMessage;
    }
    if (i >= arr01.length - 1) {
      result = userWinMessage;
    }
  }
  return result;
};

const gcd = (x, y) => {
  // eslint-disable-next-line no-param-reassign
  while (y !== 0) y = x % (x = y);
  return x;
};

export const gameFindGcd = (arr = getRandomIntArr01) => {
  console.log(startGameMassageGcd);
  let result = '';

  for (let i = 0; i <= arr.length - 1; i += 1) {
    const answerUser = readlineSync.question(`${`${'Question: '}${getRandomIntArr01[i]} ${getRandomIntArr02[i]}`}\nYour answer: `);

    if ((gcd(getRandomIntArr01[i], getRandomIntArr02[i])) === +(answerUser)) {
      console.log('Correct!');
    } else {
      const correctAnswer = gcd(getRandomIntArr01[i], getRandomIntArr02[i]);
      const userLoseMessage = `${`'${answerUser}'`} ${'is wrong answer ;(. Correct answer was '}${`'${correctAnswer}'`}.}\n${'Let\'s try again, '}${`${name}!`}`;
      return userLoseMessage;
    }
    if (i >= arr.length - 1) {
      result = userWinMessage;
    }
  }
  return result;
};
