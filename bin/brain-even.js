#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser, name } from '../src/cli.js';

console.log(welcomeUser);
const startGameMessage = `${'Answer "yes" if the number is even, otherwise answer "no".'}`;
console.log(startGameMessage);

const lengthArrRandomNum = 3;
const minNumInArr = 1;
const maxNumInArr = 101;
const getRandomInt = [...Array(lengthArrRandomNum)];
for (let i = 0; i < getRandomInt.length; i += 1) {
  getRandomInt[i] = Math.floor(Math.random() * (maxNumInArr - minNumInArr)) + minNumInArr;
}

const userWinMessage = `${'Congratulations, '}${`${name}!`}`;

const gameNumberisEven = (arr = getRandomInt) => {
  let result = '';
  for (let i = 0; i <= arr.length - 1; i += 1) {
    const answerUser = readlineSync.question(`${`${'Question: '}${getRandomInt[i]}`}\nYour answer: `);

    if (((arr[i] % 2 === 0) && answerUser === 'yes') || ((arr[i] % 2 !== 0) && answerUser === 'no')) {
      result = console.log('Correct!');
    } else {
      const correctAnswer = arr[i] % 2 === 0 ? 'yes' : 'no';
      const userLoseMessage = `${`'${answerUser}'`}${'is wrong answer ;(. Correct answer was '}${`'${correctAnswer}'`}.}\n${'Let\'s try again, '}${`${name}!`}`;
      return console.log(userLoseMessage);
    }
    if (i >= arr.length - 1) {
      result = console.log(userWinMessage);
    }
  }
  return result;
};

console.log(gameNumberisEven());
