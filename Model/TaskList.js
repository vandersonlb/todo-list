//"use strict";

import LocalStorage from "../DB/LocalStorage.js";

class TaskList {
  constructor() {
    this._taskList = LocalStorage.getTaskDB() || [];
    //Object.freeze(this);
  }

  get getList() {
    return this._taskList;
  }

  addTask(task) {
    this._taskList.push(task);

    this._taskList = this.refreshList(this._taskList);
    //console.log(this._taskList);

    //this.refreshList(this._taskList);

    //console.log(this._taskList)

    //LocalStorage.refreshDB(this._taskList); // ESSES REFRESHS DEVERÂO IR PARA UM PROXY
    //TASKS_LIST.innerHTML = refreshView(this._taskList); // ESSES REFRESHS DEVERÂO IR PARA UM PROXY
    //console.log(taskController._taskList.getList);
  }

  deleteTask(id) {
    //console.log(8888 + '...' + id)
    //let id = evt.target.parentElement.id;
    //var x = LocalStorage.getTaskDB();

    //console.log(this.getList);
    this._taskList.splice(id, 1);
    this._taskList = this.refreshList(this._taskList);


    //this._taskList.splice(id, 1);
    //this._taskList = this.refreshList(this._taskList);
  }

  refreshList(list) {
    return list.map((task, index) => {
      task._id = index;
      return task;
    });
  }
}

//export var taskList = new TaskList();
export default TaskList;
