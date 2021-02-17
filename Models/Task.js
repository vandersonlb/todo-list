//"use strict";

class Task {
  constructor(name, date, id, done = false) {
    this._name = name;
    this._date = date;
    // this._time = time;
    this._id = id;
    this._done = done;
  }

  get name() { return this._name; }

  get date() { return this._date; }

  // get time() { return this._time; }

  get id() { return this._id; }

  set id(newID) { this._id = newID; }

  get done() { return this._done; }

  set done(boolean) { this._done = boolean; }
}

export default Task;
