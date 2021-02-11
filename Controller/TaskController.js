import Task from "../Model/Task.js";
import TaskList from "../Model/TaskList.js"
import LocalStorageService from "../DB/LocalStorage.js";

class TaskController {
  constructor() {
    this._taskList = new TaskList();
  }

  addTask() {
    let task = new Task("Banana", new Date());
    console.log(task);
    this._taskList.addTask(task);
  }

  /* método totalmente auxiliar, deletar depois */
  logList(){
    console.log(this._taskList.getList);
  }
}

// var taskController = new TaskController();
export default TaskController;
/*
TaskList.getList.forEach((task,index) => {
  console.log(task)
  //localStorage.setItem(index, JSON.stringify(task))
})

LocalStorageService.refreshLocalDB(TaskList.getList);
*/
