//"use strict";

import Task from "../Models/Task.js";

class LocalStorage {
  constructor() {
    throw new Error(`Não é possível instanciar ${this.constructor.name}`);
  }

  static getTaskDB() {
    let actualDB = JSON.parse(localStorage.getItem("tasksDB")) || [];
    return actualDB.map((task) => new Task(task._task, task._date, task._id, task._done));
  }

  static refreshDB(taskList) {
    localStorage.setItem("tasksDB", JSON.stringify(taskList));
    //console.log("Local storage atualizado com sucesso");
  }
}

export default LocalStorage;
