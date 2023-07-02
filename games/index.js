import readlineSync from 'readline-sync';
import { welcomeUser, name } from '../src/cli.js';

console.log(welcomeUser);
const startGameMessageEven = `${'Answer "yes" if the number is even, otherwise answer "no".'}`;
const startGameMessageCalc = `${'What is the result of the expression?'}`;
const startGameMassageGcd = `${'Find the greatest common divisor of given numbers.'}`;
const startGameProgression = `${'What number is missing in the progression?'}`;
const startGameIsPrime = `${'Answer "yes" if given number is prime. Otherwise answer "no".'}`;
const userWinMessage = `${'Congratulations, '}${`${name}!`}`;

const maxRoundsGame = 3;
const minNumInArr = 1;
const maxNumInArr = 101;
const getRandomNum = [...Array(maxRoundsGame * maxRoundsGame)];
for (let i = 0; i < getRandomNum.length; i += 1) {
  getRandomNum[i] = Math.floor(Math.random() * (maxNumInArr - minNumInArr)) + minNumInArr;
}

export const gameNumberisEven = () => {
  console.log(startGameMessageEven);
  let result = '';

  for (let i = 0; i <= maxRoundsGame - 1; i += 1) {
    const answerUser = readlineSync.question(`${`${'Question: '}${getRandomNum[i]}`}\nYour answer: `);

    if (((getRandomNum[i] % 2 === 0) && answerUser === 'yes') || ((getRandomNum[i] % 2 !== 0) && answerUser === 'no')) {
      console.log('Correct!');
    } else {
      const correctAnswer = getRandomNum[i] % 2 === 0 ? 'yes' : 'no';
      const userLoseMessage = `${`'${answerUser}'`} ${'is wrong answer ;(. Correct answer was '}${`'${correctAnswer}'`}.}\n${'Let\'s try again, '}${`${name}!`}`;
      return userLoseMessage;
    }
    if (i >= maxRoundsGame - 1) {
      result = userWinMessage;
    }
  }
  return result;
};

export const gameCalc = () => {
  console.log(startGameMessageCalc);
  let result = '';
  const operator = ['+', '-', '*'];
  const sum = (a, b) => a + b;
  const subtraction = (a, b) => a - b;
  const multiplication = (a, b) => a * b;
  const mathOperations = [sum, subtraction, multiplication];

  for (let i = 0; i <= maxRoundsGame - 1; i += 1) {
    const answerUser = readlineSync.question(`${`${'Question: '}${getRandomNum[i]} ${operator[i]} ${getRandomNum[i + maxRoundsGame]}`}\nYour answer: `);

    if ((mathOperations[i](getRandomNum[i], getRandomNum[i + maxRoundsGame])) === +(answerUser)) {
      console.log('Correct!');
    } else {
      const correctAnswer = mathOperations[i](getRandomNum[i], getRandomNum[i + maxRoundsGame]);
      const userLoseMessage = `${`'${answerUser}'`} ${'is wrong answer ;(. Correct answer was '}${`'${correctAnswer}'`}.}\n${'Let\'s try again, '}${`${name}!`}`;
      return userLoseMessage;
    }
    if (i >= maxRoundsGame - 1) {
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

export const gameFindGcd = () => {
  console.log(startGameMassageGcd);
  let result = '';

  for (let i = 0; i <= maxRoundsGame - 1; i += 1) {
    const answerUser = readlineSync.question(`${`${'Question: '}${getRandomNum[i]} ${getRandomNum[i + maxRoundsGame]}`}\nYour answer: `);

    if ((gcd(getRandomNum[i], getRandomNum[i + maxRoundsGame])) === +(answerUser)) {
      console.log('Correct!');
    } else {
      const correctAnswer = gcd(getRandomNum[i], getRandomNum[i + maxRoundsGame]);
      const userLoseMessage = `${`'${answerUser}'`} ${'is wrong answer ;(. Correct answer was '}${`'${correctAnswer}'`}.}\n${'Let\'s try again, '}${`${name}!`}`;
      return userLoseMessage;
    }
    if (i >= maxRoundsGame - 1) {
      result = userWinMessage;
    }
  }
  return result;
};

const progressionLength = 10;
const arrHidenElement = [...Array(maxRoundsGame)];
for (let i = 0; i < arrHidenElement.length; i += 1) {
  arrHidenElement[i] = Math.floor(Math.random() * ((progressionLength - 1) - 1) + 1);
}

export const gameProgression = () => {
  console.log(startGameProgression);
  let result = '';

  for (let i = 0; i <= maxRoundsGame - 1; i += 1) {
    let arrProgression = [];
    const progression = () => {
      const getProgressStep = Math.floor(Math.random() * (5 - 1)) + 1;
      for (let j = 0; j < getProgressStep * progressionLength; j += getProgressStep) {
        arrProgression.push(getRandomNum[i] + j);
      }
      return arrProgression;
    };
    progression();
    const arrWithHiddenElement = [...arrProgression];
    arrWithHiddenElement[arrHidenElement[i]] = '..';

    const answerUser = readlineSync.question(`${`${'Question: '}${arrWithHiddenElement.join(' ')}`}\nYour answer: `);

    if (arrProgression[arrHidenElement[i]] === +(answerUser)) {
      console.log('Correct!');
      arrProgression = [];
    } else {
      const correctAnswer = arrProgression[arrHidenElement[i]];
      const userLoseMessage = `${`'${answerUser}'`} ${'is wrong answer ;(. Correct answer was '}${`'${correctAnswer}'`}.}\n${'Let\'s try again, '}${`${name}!`}`;
      return userLoseMessage;
    }
    if (i >= maxRoundsGame - 1) {
      result = userWinMessage;
    }
  }
  return result;
};

export const gameIsPrime = () => {
  console.log(startGameIsPrime);
  let result = '';

  for (let i = 0; i <= maxRoundsGame - 1; i += 1) {
    const isPrime = (num) => {
      for (let j = 2; j < num; j += 1) {
        if (num % j === 0) return false;
      }
      return num !== 1;
    };

    const answerUser = readlineSync.question(`${`${'Question: '}${getRandomNum[i]}`}\nYour answer: `);

    if ((isPrime(getRandomNum[i]) && answerUser === 'yes') || (!isPrime(getRandomNum[i]) && answerUser === 'no')) {
      console.log('Correct!');
    } else {
      const correctAnswer = isPrime(getRandomNum[i]) ? 'yes' : 'no';
      const userLoseMessage = `${`'${answerUser}'`} ${'is wrong answer ;(. Correct answer was '}${`'${correctAnswer}'`}.}\n${'Let\'s try again, '}${`${name}!`}`;
      return userLoseMessage;
    }
    if (i >= maxRoundsGame - 1) {
      result = userWinMessage;
    }
  }
  return result;
};
