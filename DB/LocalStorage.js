//"use strict";

import Task from "../Model/Task.js";
//import TaskView from "../View/TaskView.js";

class LocalStorage {
  constructor(){
    //throw new Error("Não é possível instanciar LocalStorage");
    //this._taskView = new TaskView();
  }

  static getTaskDB() {
    let actualDB = JSON.parse(localStorage.getItem('tasksDB')) || [];
    return actualDB.map((task) => new Task(task._task, task._date, task._id, task._done));
  }

  static refreshDB(taskList) {
    //console.log(_taskView, 6666)
    var taskListDB = taskList.map(task => {
      // task.id = index;
      task.done = Boolean(Math.round(Math.random()*1)); //DDDD EEE LLL EEE TTT AAA RRR
      return task
    })

    localStorage.setItem('tasksDB', JSON.stringify(taskListDB))
    console.log('Local storage atualizado com sucesso');
    //TaskView.refreshView(taskListDB);
  }

  /*
  static deleteTaskDB(evt) {
    var id = evt.target.parentElement.id;
    var x = LocalStorage.getTaskDB();
    x.splice(id,1)
    // console.log(evt.target.parentElement.id);
    console.log(x)
    LocalStorage.refreshDB(x);
    //localStorage.getTasksDB().forEach(task => taskList.addTask(task))
    //taskList.getList.splice(id,1); //SERÁ QUE VALE A PENA ATUALIZAR O MODEL LIST??? //AQUI O MODEL LIST FICA DIFERENTE DO DB NOS IDS

    TaskView.refreshView(x);
  }
  */
}

export default LocalStorage