import {
  displayRemindersByDomain,
  displayRemindersByTime,
} from './main-view-reminders.mjs';

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
  if (selection === 0) {
    addSpace();
    console.log(`This is the main menu!`);
  } else if (selection === 1) {
    addSpace();
    displayIdsAlphabetically(sortIdsAlphabetically(data), 'Domains');
  } else if (selection === 2) {
    addSpace();
    displayRemindersByDomain(data);
  } else if (selection === 3) {
    addSpace();
    console.log(`This feature is on it's way! Please check again later.`);
  } else if (selection === 4) {
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
  } else if (selection === 5) {
    addSpace();
    displayRemindersByTime(data);
  } else if (selection === 6) {
    addSpace();
    console.log(`This feature is on it's way! Please check again later.`);
  }
}

export { addSpace, programGreeting, sortIdsAlphabetically, displayChosenList };
