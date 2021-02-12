//"use strict";

import Task from "../Model/Task.js";
import TaskList from "../Model/TaskList.js";
import LocalStorage from "../DB/LocalStorage.js";
import TaskView from "../View/TaskView.js";

class TaskController {
  constructor() {
    this._taskForm = document.querySelector("#task_form");
    this._addTaskButton = document.querySelector("#add_task");
    this._deleteTaskButton = document.querySelector("#delete_task");
    this._taskListContainer = document.querySelector('#task_list'); //É NECESSARIO????

    this._showTaskListButton = document.querySelector('#show_task_list'); //DESNECESSARIO TOTAL!!!!

    this._taskList = new TaskList();
    this._taskView = new TaskView(); //É NECESSÁRIO????
    this._localStorage = new LocalStorage(); //É NECESSÁRIO????
 
    TaskView.refreshView(this._taskList.getList); //TALVEZ AQUI VAI TER Q ENTRAR NO PROXY

  }

  addTask(){
    let task = this._taskForm.task_input.value;
    let date = this._taskForm.date_input.value; //AQUI TEM Q FAZER O DATE HELPER
    //console.log(this._taskListContainer)

    if(task && date) {
      this._taskList.addTask(new Task(task, date));
      console.log('Tarefa incluída na Lista de Tarefas com sucesso!!!')
      console.log(this._taskList.getList);

      LocalStorage.refreshDB(this._taskList.getList); //TALVEZ AQUI VAI TER Q ENTRAR NO PROXY
      TaskView.refreshView(this._taskList.getList, this._taskListContainer); //TALVEZ AQUI VAI TER Q ENTRAR NO PROXY

    } else {
      console.log('Preencher todos os campos!!!')
    }
  }

}

export default TaskController;