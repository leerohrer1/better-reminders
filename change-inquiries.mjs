const changeEndDateForReminder = () => {
  const options = ['year', 'month', 'date', 'all'];
  const index = readlineSync.keyInSelect(
    options,
    'Which would you like to change?'
  );

  if (index === 0) {
    const year = readlineSync.prompt('What year?');
    this.endingDate.setFullYear(year);
  } else if (index === 1) {
    const month = readlineSync.prompt('What month?');
    this.endingDate.setMonth(month);
  } else if (index === 2) {
    const date = readlineSync.prompt('What date?');
    this.endingDate.setDate(date);
  } else {
    const year = readlineSync.prompt('What year?');
    this.endingDate.setFullYear(year);

    const month = readlineSync.prompt('What month?');
    this.endingDate.setMonth(month);

    const date = readlineSync.prompt('What date?');
    this.endingDate.setDate(date);
  }
  return this.endingDate;
};

const changeFrequencyOfReminder = () => {
  const options = ['hourly', 'daily', 'weekly', 'monthly', 'yearly'];
  const index = readlineSync.keyInSelect(
    options,
    'How frequently would you like this reminder to go off?\n'
  );
  console.log(`The frequency has been set to ${options[index]}.`);

  return (this.frequency = options[index]);
};

export { changeEndDateForReminder, changeFrequencyOfReminder };
