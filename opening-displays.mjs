import domains from './hardcoded-data.mjs';
import {
  inquireAboutReminderView,
  displayRemindersByDomain,
  changeReminderView,
} from './reminder-inq-and-disp.mjs';
import { changeDomainView, inquireAboutDomainView } from './domain-inq-and-disp.mjs';

const programGreeting = () => {
  console.log(`Welcome to your personalized reminders program!\n`);
};

const sortIdsAlphabetically = (arrOfObjects) => {
  return arrOfObjects
    .reduce((a, c) => {
      a.push(c.id);
      return a;
    }, [])
    .sort((a, b) => {
      return a < b ? -1 : a > b ? 1 : 0;
    });
};

const displayIdsAlphabetically = (alphabatizedArrOfIds, type) => {
  console.log(`${type.toUpperCase()}:`);
  alphabatizedArrOfIds.forEach((e) => console.log(e));
};

const displayChosenList = (selection) => {
  if (selection === 'd')
    displayIdsAlphabetically(sortIdsAlphabetically(domains), 'Domains');
    console.log(`\n\n\n\n\n\n\n\n`);
    changeDomainView(inquireAboutDomainView(), domains);
  if (selection === 'r')
    displayIdsAlphabetically(
      sortIdsAlphabetically(
        domains
          .reduce((a, c) => {
            a.push(c._reminders);
            return a;
          }, [])
          .flat()
      ),
      'Reminders'
    );
  console.log(`\n\n\n\n\n\n\n\n`);
  changeReminderView(inquireAboutReminderView(), domains);
};

export { programGreeting, displayChosenList };
