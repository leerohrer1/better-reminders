import domains from './hardcoded-data.mjs';
import { changeView } from './main-inquiries-general.mjs';
import {
  programGreeting,
  displayChosenList,
  addSpace,
} from './main-view-general.mjs';

function runProgram() {
  addSpace();
  addSpace();
  programGreeting();
  let userChoice;
  while (userChoice !== 7) {
    userChoice = changeView();
    displayChosenList(userChoice, domains);
    addSpace();
  }
  addSpace();
  console.log('See you next time!');
  addSpace();
}

runProgram();
