import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const welcomeUser = `${'Hello, '}${name}!`;
