"use strict";

class DateHelper {
  constructor() {
    throw new Error(`Não é possível instanciar ${this.constructor.name}`);
  }

  static stringToDate(date, time) {
    const day = date.split("/")[0] <= 31 ? date.split("/")[0] : undefined ;
    const month = date.split("/")[1] <= 12 ? date.split("/")[1] : undefined;
    const year = date.split("/")[2];
    const hour = time.split(":")[0] <= 23 ? time.split(":")[0] : undefined;
    const minute = time.split(":")[1] <= 59 ? time.split(":")[1] : undefined;

    return new Date(year, month - 1, day, hour, minute);
  }
}

export default DateHelper;
