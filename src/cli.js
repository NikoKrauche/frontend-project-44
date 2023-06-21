import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have name? \n');
const welcomeUser = `${'Hello, '}${name}!`;

export default welcomeUser;
