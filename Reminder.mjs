import Occurence from './Occurence.mjs';

class Reminder {
  constructor(id, startYear, startMonth, startDate, startHour, startMinute) {
    this._id = id;
    this._description = '';
    this._occurences = new Occurence(
      startYear,
      startMonth,
      startDate,
      startHour,
      startMinute
    );
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