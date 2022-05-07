import Occurence from './occurence-class.mjs';

class Reminder {
  constructor(
    reminderName,
    startYear,
    startMonth,
    startDate,
    startHour,
    startMinute
  ) {
    this._reminderName = reminderName;
    this._description = '';
    this._occurences = new Occurence(
      startYear,
      startMonth,
      startDate,
      startHour,
      startMinute
    );
  }

  get reminderName() {
    return this._reminderName;
  }

  set reminderName(newReminderName) {
    return (this._reminderName = newReminderName);
  }

  get description() {
    return this._description;
  }

  set description(descriptionDetails) {
    return (this._description = descriptionDetails);
  }

  get occurences() {
    return this._occurences;
  }

  changeOccurences(startYear, startMonth, startDate, startHour, startMinute) {
    return (this._occurences = new Occurence(
      startYear,
      startMonth,
      startDate,
      startHour,
      startMinute
    ));
  }
}

export default Reminder;
