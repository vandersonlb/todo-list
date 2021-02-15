//"use strict";

import Task from "../Models/Task.js";
import TaskList from "../Models/TaskList.js";
import LocalStorage from "../DB/LocalStorage.js";
import TaskView from "../Views/TaskView.js";
import ProxyFactory from "../Services/ProxyFactory.js"
//import Bind from "../Helpers/Bind.js"

class TaskController {
  constructor() {
    this._taskForm = document.querySelector("#task_form");
    this._addTaskButton = document.querySelector("#add_task");
    //this._deleteTaskButton = document.querySelector("#delete_task");
    this._taskListContainer = document.querySelector("#task_list"); //É NECESSARIO????

    // this._self = this;
    //this._taskDone = document.querySelector("#task_done");

    this._showTaskListButton = document.querySelector("#show_task_list"); //DESNECESSARIO TOTAL!!!!

    this._taskView = new TaskView(); //É NECESSÁRIO????

    //this._taskList = new TaskList();
    
    this._taskList = ProxyFactory.create(
      new TaskList(),
      ["refreshList", "taskDone"],
      function () {
        taskController._taskView.update(taskController._taskList.getList, [taskController.deleteTask, taskController.taskDone])
        LocalStorage.refreshDB(taskController._taskList.getList);
      }
    );
    

    /*
    this._taskList = new Bind(
      new TaskList(),
      new TaskView(),
      //[taskController.deleteTask, taskController.taskDone],
      ["refreshList", "taskDone"]
    );
    */

    this._taskView.update(this._taskList.getList, [this.deleteTask, this.taskDone]); //TALVEZ AQUI VAI TER Q ENTRAR NO PROXY
  }

  addTask() {
    let task = this._taskForm.task_input.value;
    let date = this._taskForm.date_input.value; //AQUI TEM Q FAZER O DATE HELPER
    //console.log(this._taskListContainer)

    this._taskList.addTask(new Task(task, date));
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
  }

  deleteTask(id) {
    //console.log(taskController._taskList.getList)
    taskController._taskList.deleteTask(id)
    // taskController._taskView.refreshView(taskController._taskListContainer, taskController._taskList.getList, [taskController.deleteTask, taskController.taskDone])
    // LocalStorage.refreshDB(taskController._taskList.getList);
  }

  taskDone(id) {
    taskController._taskList.taskDone(id);
    // taskController._taskView.refreshView(taskController._taskListContainer, taskController._taskList.getList, [taskController.deleteTask, taskController.taskDone])
    // LocalStorage.refreshDB(taskController._taskList.getList);


  }
}

let taskController = new TaskController();

export function currentInstance() {
    return taskController;
}