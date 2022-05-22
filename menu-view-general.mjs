import {
  inputToChangeDomain,
  inputToAddDomain,
  inputToEditDomainOptions,
  inputToGetIdOfDomain,
  inputToSetNewIdOfDomain,
  warningBeforeDomainDeletion,
} from './menu-inquiries-domains.mjs';
import { inputToChangeDescription } from './menu-inquiries-general.mjs';
import {
  displayRemindersByDomain,
  displayRemindersByTime,
} from './menu-view-reminders.mjs';
import { addDomain, getDomainIds } from './update-data.mjs';
import { inputToChangeReminder } from './menu-inquiries-reminders.mjs';

function addSpace() {
  console.log(`\n\n\n\n`);
}

function programGreeting() {
  console.log(`Welcome to your personalized reminders program!\n`);
}

function sortIdsAlphabetically(arrOfObjects) {
  return arrOfObjects
    .reduce((a, c) => {
      a.push(c.id);
      return a;
    }, [])
    .sort((a, b) => {
      return a < b ? -1 : a > b ? 1 : 0;
    });
}

function displayIdsAlphabetically(alphabatizedArrOfIds, type) {
  console.log(`${type.toUpperCase()}:`);
  alphabatizedArrOfIds.forEach((e) => console.log(e));
}

function displayChosenList(selection, data) {
  let input;
  if (selection === 'See the Main Menu') {
    addSpace();
    console.log(`This is the main menu!`);
  } else if (selection === 'See all growth domains (listed alphabetically)') {
    addSpace();
    displayIdsAlphabetically(sortIdsAlphabetically(data), 'Domains');
  } else if (
    selection === 'See all growth domains with the associated Reminders'
  ) {
    addSpace();
    displayRemindersByDomain(data);
  } else if (selection === 'Add or edit domains') {
    addSpace();
    input = inputToChangeDomain();
    if (input === 'Add a domain') {
      addSpace();
      addDomain(inputToAddDomain(), data);
    } else if (input === 'Delete a domain') {
      addSpace();
      console.log(`This feature is on it's way! Please check again later.`);
      // let accepted = warningBeforeDomainDeletion();
      // if (accepted) {
      //   addSpace();
      //   displayIdsAlphabetically(sortIdsAlphabetically(data), 'Domains');
      //   input = inputToGetIdOfDomain();
      //   while (!getDomainIds(data).includes(input)) {
      //     addSpace();
      //     console.log('That does not match one of your current domains.\nPlease enter a domain from the list below.\n')
      //     displayIdsAlphabetically(sortIdsAlphabetically(data), 'Domains');
      //     input = inputToGetIdOfDomain();
      //   }
      //   return data.filter(e => e.id !== input);
      // }
    } else if (input === 'Edit a domain') {
      addSpace();
      input = inputToEditDomainOptions();
      if (input === 'Edit the name of the domain') {
        addSpace();
        displayIdsAlphabetically(sortIdsAlphabetically(data), 'Domains');
        addSpace();
        const oldId = inputToGetIdOfDomain();
        const newId = inputToSetNewIdOfDomain();
        data.filter((e) => e.id === oldId)[0].id = newId;
      } else if ('Edit the domain description') {
        addSpace();
        inputToGetIdOfDomain().description(inputToChangeDescription());
      }
    }
  } else if (selection === 'See all reminders (listed alphabetically)') {
    addSpace();
    displayIdsAlphabetically(
      sortIdsAlphabetically(
        data
          .reduce((a, c) => {
            a.push(c._reminders);
            return a;
          }, [])
          .flat()
      ),
      'Reminders'
    );
  } else if (
    selection ===
    'See all reminders with associated frequency (and next occurence)'
  ) {
    addSpace();
    displayRemindersByTime(data);
  } else if (selection === 'Add or edit reminders') {
    addSpace();
    input = inputToChangeReminder();
    if (input === 'Reminder text') {
      addSpace();
      // START BACK HERE
    }
  }
}

export { addSpace, programGreeting, sortIdsAlphabetically, displayChosenList };
