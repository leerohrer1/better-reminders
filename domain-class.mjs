import Reminder from './reminder-class.mjs';

class Domain {
  constructor(id) {
    this._id = id;
    this._description = '';
    this._reminders = [];
  }

  get id() {
    return this._id;
  }

  set id(newId) {
    return (this._id = newId);
  }

  get description() {
    return this._description;
  }

  set description(descriptionDetails) {
    return (this._description = descriptionDetails);
  }

  addReminder(id, startYear, startMonth, startDate, startHour, startMinute) {
    return this._reminders.push(
      new Reminder(id, startYear, startMonth, startDate, startHour, startMinute)
    );
  }

  deleteReminder(id) {
    return (this._reminders = this._reminders.filter((e) => e.id !== id));
  }
}

export default Domain;
