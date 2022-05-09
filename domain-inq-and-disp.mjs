import readlineSync from 'readline-sync';
import { displayRemindersByDomain } from './reminder-inq-and-disp.mjs';

const inquireAboutDomainView = () => {
  const view = readlineSync.question(
    `If you would like to see the reminders associated with these domains, type "r" and hit enter.\n`
  );
  while (view.toLowerCase() !== 'r') {
    start = readlineSync.question(
      `That is not a valid entry. You have to type "r".\n`
    );
  }
  return view.toLowerCase();
};

const changeDomainView = (selection, domainsArray) => {
  if (selection === 'r') displayRemindersByDomain(domainsArray);
};

export { inquireAboutDomainView, changeDomainView };
