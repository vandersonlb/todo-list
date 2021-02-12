//"use strict";

class Task {
  constructor(task, date, id=0, done=false) {
    this._task = task;
    this._date = date;
    this._id = id;
    this._done = done;
  }

  get task() {
    return this._task;
  }

  get date() {
    return this._date;
  }

  get id() {
    return this._id;
  }

  set id(newID) {
    this._id = newID;
  }

  get done() {
    return this._done;
  }

  set done(boolean) {
    this._done = boolean;
  }
}

export default Task;
