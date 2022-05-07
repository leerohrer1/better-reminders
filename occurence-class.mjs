import Reminder from './reminder-class.mjs';
import readlineSync from 'readline-sync';

class Occurence {
  constructor(startYear, startMonth, startDate, startHour, startMinute) {
    this._firstOccurence = new Date(
      startYear,
      startMonth - 1,
      startDate,
      startHour,
      startMinute
    );
    this._endingDate = new Date(
      startYear + 10,
      startMonth - 1,
      startDate,
      startHour,
      startMinute
    );
    this._frequency = 'daily';
  }

  get firstOccurence() {
    return this._firstOccurence;
  }

  changeFirstOccurence(
    startYear,
    startMonth,
    startDate,
    startHour,
    startMinute
  ) {
    return (this._firstOccurence = new Date(
      startYear,
      startMonth - 1,
      startDate,
      startHour,
      startMinute
    ));
  }

  get endingDate() {
    return this._endingDate;
  }

  changeEndingDate(endYear, endMonth, endDate) {
    return (this.endingDate = new Date(endYear, endMonth - 1, endDate));
  }

  get frequency() {
    return this._frequency;
  }

  set frequency(newFrequency) {
    return (this._frequency = newFrequency);
  }
}

export default Occurence;
