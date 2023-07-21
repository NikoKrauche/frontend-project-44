import readlineSync from 'readline-sync';
import { welcomeUser, name } from './cli.js';

const roundsCount = 3;

const startEngine = (description, gerenerateRound) => {
  console.log(welcomeUser);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = gerenerateRound();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser !== correctAnswer) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startEngine;
