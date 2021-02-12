/** MODEL CLASS **/
/*
class Task {
  constructor(task, date, done=false) {
    // this._id = id;
    this._task = task;
    this._date = date;
    this._done = done;
  }
  // get id() {
  //   return this._id;
  // }
  get task() {
    return this._task;
  }
  get date() {
    // return new Date(this._date.getTime());
    return this._date;
  }
  get done() {
    return this._done;
  }
  set done(boolean) {
    this._done = boolean;
  }
}
*/

/** MODEL TASKLIST **/
/*
class TaskList {
  constructor() {
    this._taskList = [];
    //Object.freeze(this);
  }
  addTask(task) {
    this._taskList.push(task);
    LocalStorage.refreshDB(taskList.getList);
    TASKS_LIST.innerHTML = refreshView(taskList.getList);
  }
  get getList() {
    return this._taskList;
  }
}
*/
import Task from "./Model/Task.js";
import TaskList from "./Model/TaskList.js"
import LocalStorage from "./DB/LocalStorage.js";
import TaskController from "./Controller/TaskController.js";

window.onload = function() {


var taskList = new TaskList();
 
LocalStorage.getTasksDB().forEach(task => taskList.addTask(task))


/**  MÉTODOS DE VIEW / CONTROLLER (??) **/
let $ = document.querySelector.bind(document);
const TASK_FORM = $("#task_form");
const ADD_TASK = $("#add_task");
const DELETE_TASK = $("#delete_task");
const LIST_TASKS = $("#show_task_list");
const TASKS_LIST = $("#tasks_list");

ADD_TASK.onclick = function(evt) {
  let task = TASK_FORM.task_input.value;
  let date = TASK_FORM.date_input.value;
  console.log("Tarefa adicionada a Lista de Tarefas!!!")


  taskList.addTask(new Task(task, date));

  //TASKS_LIST.innerHTML = refreshView();


};


function refreshView(taskList) {
  if(taskList.length == 0) return null
  template = 
    `
      <ul>
      ${taskList.map(task => {
        return `<li id="${task.id}">${task.task} || ${task.date}<button onclick="deleteTaskView(this)">DELETE</button></li>`
      }).join('')}
      </ul>
    `
  return template
}

function deleteTaskView(button) {
  //button.parentNode.remove();
  deleteTaskDB(button.parentNode.id);
}

function deleteTaskDB(id) {
  //console.log(JSON.parse(localStorage.getItem('tasksDB')))
  var x = LocalStorage.getTasksDB();
  x.splice(id,1)
  console.log(x);
  //console.log(id)
  LocalStorage.refreshDB(x);
  //LocalStorage.getTasksDB().forEach(task => taskList.addTask(task))
  taskList.getList.splice(id,1); //SERÁ QUE VALE A PENA ATUALIZAR O MODEL LIST???

  TASKS_LIST.innerHTML = refreshView(x);
}




/*
class LocalStorage {
  constructor(){

  }

  static getTasksDB() {
    let actualDB = JSON.parse(localStorage.getItem('tasksDB')) || [];
    return actualDB.map((task) => new Task(task._task, task._date, task._done));
  }

  static refreshDB(taskList) {
    var taskListDB = taskList.map((task, index) => {
      task.id = index;
      task.done = Boolean(Math.round(Math.random()*1));
      return task
    })

    //console.log(taskListDB);

    localStorage.setItem('tasksDB', JSON.stringify(taskListDB))
    console.log('Local storage atualizado com sucesso');
  }

  static deleteItemDB(id) {
    let actualTaskListDB = JSON.parse(localStorage.getItem('tasksDB')) || [];
    
    console.log(actualTaskListDB);
  } 

}
*/



}