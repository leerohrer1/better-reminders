import readlineSync from 'readline-sync';

function inputToChangeReminder() {
  const options = ['Reminder text', 'Start date', 'End date', 'Frequency'];
  const index = readlineSync.keyInSelect(
    options,
    'Which would you like to change?\n'
  );
  return options[index];
}

function inputToChangeId() {
  let newId = readlineSync.question('What would you like reminder to say?\n')
  return newId;
}

function inputToChangeStartOrEndDate() {
  const options = ['Year', 'Month', 'Date', 'All'];
  const index = readlineSync.keyInSelect(
    options,
    'Which would you like to change?\n'
  );
  return options[index];
}


function inputToChangeFrequency() {
  const options = ['Hourly', 'Daily', 'Weekly', 'Monthly', 'Yearly'];
  const index = readlineSync.keyInSelect(
    options,
    'How frequently would you like this reminder to go off?\n'
  );

  return options[index];
}



export { inputToChangeId, inputToChangeStartOrEndDate, inputToChangeFrequency, inputToChangeReminder };
