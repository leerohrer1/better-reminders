
function displayRemindersByDomain(domainsArray) {
  domainsArray.forEach((domain) => {
    console.log(domain._id.toUpperCase());
    domain._reminders.forEach((reminder) => console.log(reminder.id));
  });
}

function displayRemindersByTime(domainsArray) {
  domainsArray
    .reduce((a, c) => {
      a.push(...c._reminders);
      return a;
    }, [])
    .sort((a, b) => {
      return a._occurences._firstOccurence - b.occurences._firstOccurence;
    })
    .forEach((reminder) => {
      console.log(
        `${reminder._occurences._firstOccurence.toLocaleString()}, ${reminder._occurences._frequency}: ${
          reminder.id
        }`
      );
    });
}

function updateReminderView(selection, domainsArray) {
  if (selection === 'd') {
    displayRemindersByDomain(domainsArray);
  }
  if (selection === 't') {
    displayRemindersByTime(domainsArray);
  }
}

function sendReminder() {
  let now = new Date();
  let reminderTime = this.occurences.firstOccurence;
  if (this.frequency === 'hourly') {
    while (now === reminderTime) {
      console.log(`REMEMBER: ${this.reminderName}`);
      // think about how to make it stop by 8 PM
      reminderTime.setHours(reminderTime.getHours() + 1);
    }
  } else if (this.frequency === 'daily') {
    while (now === reminderTime) {
      console.log(`REMEMBER: ${this.reminderName}`);
      reminderTime.setDate(reminderTime.getDate() + 1);
    }
  } else if (this.frequency === 'weekly') {
    while (now === reminderTime) {
      console.log(`REMEMBER: ${this.reminderName}`);
      reminderTime.setDate(reminderTime.getDate() + 7);
    }
  } else if (this.frequency === 'monthly') {
    while (now === reminderTime) {
      console.log(`REMEMBER: ${this.reminderName}`);
      reminderTime.setMonth(reminderTime.getMonth() + 1);
    }
  } else if (this.frequency === 'yearly') {
    while (now === reminderTime) {
      console.log(`REMEMBER: ${this.reminderName}`);
      reminderTime.setFullYear(reminderTime.getFullYear() + 1);
    }
  }
}

export {
  displayRemindersByDomain,
  displayRemindersByTime,
  updateReminderView,
  sendReminder,
};
