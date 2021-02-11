"use strict";

class TaskList {
  constructor() {
    this._taskList = [];
    Object.freeze(this);
  }
  addTask(task) {
    this._taskList.push(task);
  }
  get getList() {
    return [...this._taskList];
  }
}

//export var taskList = new TaskList();
export default TaskList;
