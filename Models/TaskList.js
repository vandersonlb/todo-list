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
    //console.log("Tarefa adicionada na Lista de Tarefas")
  }
  
  deleteTask(id) {
    this._taskList.splice(id, 1);
    this._taskList = this.refreshList(this._taskList);
    //console.log(`Tarefa ID ${id} removida da Lista de Tarefas`)
  }

  taskDone(id) {
    this._taskList[id].done = !this._taskList[id].done
    //console.log("Status da tarefa modificado")
  }

  refreshList(list) {
    return list.map((task, index) => {
      task._id = index;
      return task;
    });
  }
}

export default TaskList;
