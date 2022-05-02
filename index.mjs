import Reminder from './reminder-class.mjs';
import Domain from './domain-class.mjs';
import Occurence from './occurence-class.mjs';
import readlineSync from 'readline-sync';
import { join } from 'path';

const programGreeting = () => {
  console.log(`Welcome to your personalized reminders program!

You can start by looking at your growth domains or the reminders you have set.
For domains, type "d" and hit enter. For reminders, type "r" and hit enter.\n`);
}

const startProgram = () => {
  let start = readlineSync.question(`Please enter where you want to start:\n`);
  while (start.toLowerCase() !== 'd' && start.toLowerCase() !== 'r') {
    start = readlineSync.question(
      `That is not a valid entry. For domains, type "d" and hit enter. For reminders, type "r" and hit enter.\n`
    );
  }
  return start.toLowerCase();
};

const showMenu = (menuChoice) => {
  if (menuChoice === 'd') console.log('Domains:');
  if (menuChoice === 'r') console.log('Reminders:');
};

programGreeting();
showMenu(startProgram());
