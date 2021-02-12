//"use strict";

import LocalStorage from "../DB/LocalStorage.js";

class TaskList {
  constructor() {
    this._taskList = LocalStorage.getTaskDB() || [];
    //Object.freeze(this);
  }

  addTask(task) {
    this._taskList.push(task);
    //LocalStorage.refreshDB(this._taskList); // ESSES REFRESHS DEVERÂO IR PARA UM PROXY
    //TASKS_LIST.innerHTML = refreshView(this._taskList); // ESSES REFRESHS DEVERÂO IR PARA UM PROXY
  }

  get getList() {
    return this._taskList;
  }
}

//export var taskList = new TaskList();
export default TaskList;