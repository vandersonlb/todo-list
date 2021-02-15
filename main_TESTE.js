import {currentInstance} from "./Controller/TaskController.js"

var taskController = currentInstance();
//console.log(taskController)

taskController._addTaskButton.onclick = function() { taskController.addTask() }
taskController._showTaskListButton.onclick = () => { console.log(taskController._taskList.getList) }  


