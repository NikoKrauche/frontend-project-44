import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games! May I have name? ');
export const welcomeUser = `${'Hello, '}${name}!`;
