import Reminder from './reminder-class.mjs';
import readlineSync from 'readline-sync';
import Occurence from './occurence-class.mjs';

class Domain {
  constructor(domainName) {
    this._domainName = domainName;
    this._description = '';
    this._reminders = [];
  }

  get domainName() {
    return this._domainName;
  }

  set domainName(newDomainName) {
    return (this._domainName = newDomainName);
  }

  get description() {
    return this._description;
  }

  set description(descriptionDetails) {
    return (this._description = descriptionDetails);
  }

  addReminder(
    reminderName,
    startYear,
    startMonth,
    startDate,
    startHour,
    startMinute
  ) {
    return this._reminders.push(
      new Reminder(
        reminderName,
        startYear,
        startMonth,
        startDate,
        startHour,
        startMinute
      )
    );
  }

  deleteReminder(reminderName) {
    return this._reminders = this._reminders.filter((e) => e.reminderName !== reminderName)
  }
}

export default Domain;
