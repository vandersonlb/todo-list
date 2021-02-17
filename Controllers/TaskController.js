//"use strict";

import Task from "../Models/Task.js";
import TaskList from "../Models/TaskList.js";
// import LocalStorage from "../DB/LocalStorage.js";
import TaskView from "../Views/TaskView.js";
// import ProxyFactory from "../Services/ProxyFactory.js";
import Bind from "../Helpers/Bind.js";
import DateHelper from "../Helpers/DateHelper.js";

class TaskController {
  constructor() {
    this._taskForm = document.querySelector("#task_form");
    this._addTaskButton = document.querySelector("#add_task");

    this._taskList = new Bind(
      new TaskList(),
      TaskView,
      [this.deleteTask, this.taskDone],
      "createTaskID", "taskDone"
    );

  }

  addTask() {
    let task = this._taskForm.task_input.value;
    let date = this._taskForm.date_input.value;
    let time = this._taskForm.time_input.value;
    
    DateHelper.stringToDate(date, time);

    this._taskList.addTask(new Task(task, DateHelper.stringToDate(date, time)));
    TaskView.update(this._taskList.getList, [this.deleteTask, this.taskDone]);
    //this._taskView.refreshView(this._taskListContainer, this._taskList.getList, [this.deleteTask, this.taskDone]);
    //LocalStorage.refreshDB(this._taskList.getList); //TALVEZ AQUI VAI TER Q ENTRAR NO PROXY

    /*
    if(task && date) {
      this._taskList.addTask(new Task(task, date));
      console.log('Tarefa incluída na Lista de Tarefas com sucesso!!!')
      console.log(this._taskList.getList);

      LocalStorage.refreshDB(this._taskList.getList); //TALVEZ AQUI VAI TER Q ENTRAR NO PROXY
      TaskView.refreshView(this._taskList.getList, this._taskListContainer); //TALVEZ AQUI VAI TER Q ENTRAR NO PROXY

    } else {
      console.log('Preencher todos os campos!!!')
    }
    */

  //  this._taskForm.reset();
    
  }

  deleteTask(evt) {
    let id = evt.target.parentNode.id;
    taskController._taskList.deleteTask(id);
    //taskController._taskView.update(taskController._taskList.getList, [taskController.deleteTask, taskController.taskDone]);
    //console.log(id)
  }

  taskDone(evt) {
    let id = evt.target.parentNode.id;
    taskController._taskList.taskDone(id);
    // taskController._taskView.refreshView(taskController._taskListContainer, taskController._taskList.getList, [taskController.deleteTask, taskController.taskDone])
    // LocalStorage.refreshDB(taskController._taskList.getList);
  }
}

let taskController = new TaskController();

export function currentInstance() {
  return taskController;
}
