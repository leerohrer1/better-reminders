import readlineSync from 'readline-sync';

function changeView() {
  const options = [
    'See the Main Menu',
    'See all growth domains (listed alphabetically)',
    'See all growth domains with the associated Reminders',
    'Add or edit domains',
    'See all reminders (listed alphabetically)',
    'See all reminders with associated frequency (and next occurence)',
    'Add or edit reminders',
    'Exit program',
  ];
  const selection = readlineSync.keyInSelect(
    options,
    'What would you like to see?\n'
  );
  return selection;
}

export { changeView };
