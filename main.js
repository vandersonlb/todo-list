import TaskController from "./Controller/TaskController.js"

window.onload = function() {
  let button = document.querySelector('button');
  let mostra = document.querySelector('#mostra');
  
  let taskController = new TaskController();
  
  button.onclick = function() {
    console.log(taskController);
    taskController.addTask();
  }

  mostra.onclick = function() {
    taskController.logaLista();
  }
}