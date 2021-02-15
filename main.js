import {currentInstance} from "./Controllers/TaskController.js"
//import ProxyFactory from "./Proxys/ProxyFactory.js";

// import AddAction from "./Helper/AddAction.js"
// import LocalStorage from "./DB/LocalStorage.js"

var taskController = currentInstance();
//console.log(taskController)

taskController._addTaskButton.onclick = function() { taskController.addTask() }
taskController._showTaskListButton.onclick = () => { console.log(taskController._taskList.getList) }


// var x = new LocalStorage();



