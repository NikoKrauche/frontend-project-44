import readlineSync from 'readline-sync';
import { welcomeUser, name } from './cli.js';

const maxRoundsGame = 3;

const gameEngine = (game) => {
  console.log(welcomeUser);

  for (let i = 0; i < maxRoundsGame; i += 1) {
    const [startGameMessage, question, correctAnswer] = game();
    console.log(startGameMessage);
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
