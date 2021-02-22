"use strict";

import Task from "../Models/Task.js";
import TaskList from "../Models/TaskList.js";
import TaskView from "../Views/TaskView.js";
import AlertView from "../Views/AlertView.js";
import Bind from "../Helpers/Bind.js";
import DateHelper from "../Helpers/DateHelper.js";

class TaskController {
  constructor() {
    this._taskForm = document.querySelector("#task_form");
    this._alert = document.querySelector("#alert");
    this._addTaskButton = document.querySelector("#add_task");

    this._taskList = new Bind(
      new TaskList(),
      TaskView,
      [this.deleteTask, this.taskDone],
      "addTask", "deleteTask", "taskDone"
    );
  }

  addTask() {
    let task = this._taskForm.task_input.value;
    let date = this._taskForm.date_input.value;
    let time = this._taskForm.time_input.value;
    let dateTime = DateHelper.stringToDate(date, time);

    if (dateTime == "Invalid Date") {
      AlertView.update(this._alert, "Data ou hora inválida!");
    } else {
      this._taskList.addTask(new Task(task, dateTime));
      TaskView.update(this._taskList.getList, [this.deleteTask, this.taskDone]);

      this._taskForm.reset();
      this._addTaskButton.disabled = true;
    }
  }

  deleteTask(evt) {
    let id = evt.target.parentNode.id;
    taskController._taskList.deleteTask(id);
  }

  taskDone(evt) {
    let id = evt.target.parentNode.id;
    taskController._taskList.taskDone(id);
  }
}

let taskController = new TaskController();

export function currentInstance() {
  return taskController;
}
