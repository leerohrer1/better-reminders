import readlineSync from 'readline-sync';

const inquireAboutListViewOptions = () => {
  let start =
    readlineSync.question(`You can start by looking at your growth domains or the reminders you have set.
  For domains, type "d" and hit enter. For reminders, type "r" and hit enter.\n`);
  while (start.toLowerCase() !== 'd' && start.toLowerCase() !== 'r') {
    start = readlineSync.question(
      `That is not a valid entry. For domains, type "d" and hit enter. For reminders, type "r" and hit enter.\n`
    );
  }
  return start.toLowerCase();
};

export default inquireAboutListViewOptions;
