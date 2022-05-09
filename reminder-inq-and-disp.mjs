import readlineSync from 'readline-sync';

const inquireAboutReminderView = () => {
  const view =
    readlineSync.question(`Type "d" and hit enter to see reminders listed by their associated domains. 
Type "t" and hit enter to see reminders listed by the time of the reminder.\n`);
  while (view.toLowerCase() !== 'd' && view.toLowerCase() !== 't') {
    start = readlineSync.question(
      `That is not a valid entry. You have to type "d" or "t".\n`
    );
  }
  return view.toLowerCase();
};

const displayRemindersByDomain = (domainsArray) => {
  domainsArray.forEach((domain) => {
    console.log(domain._id.toUpperCase());
    domain._reminders.forEach((reminder) => console.log(reminder.id));
  });
};

const displayRemindersByTime = (domainsArray) => {
  domainsArray
    .reduce((a, c) => {
      a.push(c._reminders);
      return a;
    }, [])
    .flat()
    .sort((a, b) => {
      return a._occurences._firstOccurence - b.occurences._firstOccurence;
    })
    .forEach((reminder) => {
      console.log(
        `${reminder._occurences._firstOccurence.toLocaleString()}: ${
          reminder.id
        }`
      );
    });
};

const changeReminderView = (selection, domainsArray) => {
  if (selection === 'd') {
    displayRemindersByDomain(domainsArray);
  }
  if (selection === 't') {
    displayRemindersByTime(domainsArray);
  }
};

export {
  inquireAboutReminderView,
  displayRemindersByDomain,
  displayRemindersByTime,
  changeReminderView,
};
