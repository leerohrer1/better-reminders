import domains from './hardcoded-data.mjs';
import { inputToChangeView } from './menu-inquiries-general.mjs';
import {
  programGreeting,
  displayChosenList,
  addSpace,
} from './menu-view-general.mjs';

function runProgram() {
  addSpace();
  addSpace();
  programGreeting();
  let userChoice;
  while (userChoice !== 'Exit program') {
    userChoice = inputToChangeView();
    displayChosenList(userChoice, domains);
    addSpace();
  }
  addSpace();
  console.log('See you next time!');
  addSpace();
}

runProgram();
