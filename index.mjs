import inquireAboutListViewOptions from './opening-inquiry.mjs'
import {programGreeting, displayChosenList} from './opening-displays.mjs'

console.log(`\n\n\n\n\n\n\n\n`)
programGreeting();
displayChosenList(inquireAboutListViewOptions());
console.log(`\n\n\n\n\n\n\n\n`)