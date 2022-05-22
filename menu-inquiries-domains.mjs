import readlineSync from 'readline-sync';

function inputToChangeDomain() {
  const options = ['Add a domain', 'Delete a domain', 'Edit a domain'];
  const index = readlineSync.keyInSelect(
    options,
    'Would you like to add, delete, or edit a growth domain?\n'
  );
  return options[index];
}

function inputToAddDomain() {
  return readlineSync.question(
    'What would you like the new growth domain to say?\n'
  );
}

function inputToEditDomainOptions() {
  const options = [
    'Edit the name of the domain',
    'Edit the domain description',
  ];
  const index = readlineSync.keyInSelect(
    options,
    'Would you like to edit the name of the growth domain or edit the description?\n'
  );
  return options[index];
}

function inputToGetIdOfDomain() {
  return readlineSync.question(
    'What is the name of the growth domain? You have to type it exactly.\n'
  );
}

function inputToSetNewIdOfDomain() {
  return readlineSync.question('What would you like the domain to say now?\n');
}

function warningBeforeDomainDeletion() {
  return readlineSync.keyInYNStrict(
    `Deleting a domain will delete all of its associated reminders.\nThis cannot be undone. Are you sure you wish to continue?\n`
  );
}

export {
  inputToChangeDomain,
  inputToAddDomain,
  inputToEditDomainOptions,
  inputToGetIdOfDomain,
  inputToSetNewIdOfDomain,
  warningBeforeDomainDeletion
};
