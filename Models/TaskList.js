"use strict";

import LocalStorage from "../DB/LocalStorage.js";

class TaskList {
  constructor() {
    this._taskList = LocalStorage.getTaskDB() || [];
  }

  get getList() {
    return this._taskList;
  }

  addTask(task) {
    this._taskList.push(task);
    this._taskList = this._taskList.sort((a, b) => a._date - b._date);
    this._taskList = this.createTaskID(this._taskList);
  }

  deleteTask(id) {
    this._taskList.splice(id, 1);
    this._taskList = this.createTaskID(this._taskList);
  }

  taskDone(id) {
    this._taskList[id].done = !this._taskList[id].done;
  }

  createTaskID(list) {
    return list.map((task, index) => {
      task._id = index;
      return task;
    });
  }
}

export default TaskList;
