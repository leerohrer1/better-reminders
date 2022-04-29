//how will user see the "Set Reminder" option?
// how can I make sure the constructor params are in correct format
class Reminder {
  constructor(reminderName) {
    this.reminderName = reminderName;
    this.description = "";
    this.times;
    this.continueUntilDate;
    this.relatedDomains = [];
  }

  get reminderName() {
    return this.reminderName;
  }

   /**
   * @param {string} newReminderName
   */
  set setReminderName(newReminderName) {
    if (
      typeof newReminderName === "string" ||
      newReminderName instanceof String
    ) {
      return (this.reminderName = newReminderName);
    } else {
      return `${newReminderName} is not a string. Please enter a string.`;
    }
  }

  /**
   * @param {string} descriptionDetails
   */
  set description(descriptionDetails) {
    if (
      typeof descriptionDetails === "string" ||
      descriptionDetails instanceof String
    ) {
      return (this.description = descriptionDetails);
    } else {
      return `${descriptionDetails} is not a string. Please enter a string.`;
    }
  }

  addReminderTime(newReminderTime) {
    return this.times.push(newReminderTime);
  }

  deleteReminderTime(reminderTimeToDelete) {
    return this.times.splice(this.times.indexOf(reminderTimeToDelete), 1);
  }

  logReminderDetails() {
    console.log(`This reminder is called: "${this.reminderName}" and is decribed as "${this.description}." 
    The reminder is set for ${this.times}. The reminder will continue until ${this.continueUntilDate}.) 
    The associated domains are ${this.relatedDomains}.`);
  }
}

export default Reminder;
