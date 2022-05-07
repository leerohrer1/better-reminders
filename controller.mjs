  // function changeEndingDate(){
  //   const options = ['year', 'month', 'date', 'all'];
  //   const index = readlineSync.keyInSelect(
  //     options,
  //     'Which would you like to change?'
  //   );

  //   if (index === 0) {
  //     const year = readlineSync.prompt('What year?');
  //     this.endingDate.setFullYear(year);
  //   } else if (index === 1) {
  //     const month = readlineSync.prompt('What month?');
  //     this.endingDate.setMonth(month);
  //   } else  if (index === 2) {
  //     const date = readlineSync.prompt('What date?');
  //     this.endingDate.setDate(date);
  //   } else {
  //     const year = readlineSync.prompt('What year?');
  //     this.endingDate.setFullYear(year);

  //     const month = readlineSync.prompt('What month?');
  //     this.endingDate.setMonth(month);

  //     const date = readlineSync.prompt('What date?');
  //     this.endingDate.setDate(date);
  //   }
  //   return this.endingDate;
  // }

  function changeFrequency(newFrequency) {
    const options = ['hourly', 'daily', 'weekly', 'monthly', 'yearly'];
    const index = readlineSync.keyInSelect(
      options,
      'How frequently would you like this reminder to go off?\n'
    );
    console.log(`The frequency has been set to ${options[index]}.`);

    return this.frequency = options[index];
  }

  // function sendReminder() {
  //   let now = new Date();
  //   let reminderTime = this.occurences.firstOccurence;
  //   if (this.frequency === 'hourly') {
  //     while (now === reminderTime) {
  //       console.log(`REMEMBER: ${this.reminderName}`);
  //       // think about how to make it stop by 8 PM
  //       reminderTime.setHours(reminderTime.getHours() + 1);
  //     }
  //   } else if (this.frequency === 'daily') {
  //     while (now === reminderTime) {
  //       console.log(`REMEMBER: ${this.reminderName}`);
  //       reminderTime.setDate(reminderTime.getDate() + 1);
  //     }
  //   } else if (this.frequency === 'weekly') {
  //     while (now === reminderTime) {
  //       console.log(`REMEMBER: ${this.reminderName}`);
  //       reminderTime.setDate(reminderTime.getDate() + 7);
  //     }
  //   } else if (this.frequency === 'monthly') {
  //     while (now === reminderTime) {
  //       console.log(`REMEMBER: ${this.reminderName}`);
  //       reminderTime.setMonth(reminderTime.getMonth() + 1);
  //     }
  //   } else if (this.frequency === 'yearly') {
  //     while (now === reminderTime) {
  //       console.log(`REMEMBER: ${this.reminderName}`);
  //       reminderTime.setFullYear(reminderTime.getFullYear() + 1);
  //     }
  //   }
  // }