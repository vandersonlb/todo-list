"use strict";

class DateHelper {
  constructor() {
    throw new Error(`Não é possível instanciar ${this.constructor.name}`);
  }

  static stringToDate(date, time) {
    let day = date.split("/")[0];
    let month = date.split("/")[1];
    let year = date.split("/")[2];
    let hour = time.split(":")[0];
    let minute = time.split(":")[1];

    return new Date(year, month - 1, day, hour, minute);
  }
}

export default DateHelper;
