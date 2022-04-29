import Reminder from './reminder-class.mjs';
import Domain from './domain-class.mjs';
import Occurence from './occurence-class.mjs';
import readlineSync from 'readline-sync';

console.log(`Welcome your personalized reminders program!
You can start by looking at your growth domains or the reminders you have set.`);
let start = readlineSync.question(`Please enter where would you want to start:\n`);