import {currentInstance} from "../../Controllers/TaskController.js"

var taskController = currentInstance();

taskController._addTaskButton.onclick = function() { taskController.addTask() }
taskController._showTaskListButton.onclick = () => { 
  console.log(taskController._taskList.getList)
  
  // var list = taskController._taskList.getList;
  // var sorted = list.sort((a,b) => a._date - b._date );

}
