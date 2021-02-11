"use strict";

class Task {
  constructor(task, date) {
    // this._id = id;
    this._task = task;
    this._date = date;
    this._done = false;
  }
  // get id() {
  //   return this._id;
  // }
  get task() {
    return this._task;
  }
  get date() {
    return new Date(this._date.getTime());
  }
  get done() {
    return this._done;
  }
  set done(boolean) {
    this._done = boolean;
  }
}

export default Task;
