import Reminder from './reminder-class.mjs';
import Domain from './domain-class.mjs';
import Occurence from './occurence-class.mjs';
import readlineSync from 'readline-sync';

console.log(`Welcome to your personalized reminders program!

You can start by looking at your growth domains or the reminders you have set.
For domains, type "d" and hit enter. For reminders, type "r" and hit enter.
`);
let start = readlineSync.question(`Please enter where would you want to start:\n`);