import { currentInstance } from "../../Controllers/TaskController.js";

var taskController = currentInstance();

taskController._addTaskButton.onclick = function (evt) {
  evt.preventDefault();
  taskController.addTask();
};
