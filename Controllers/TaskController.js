"use strict";

import Task from "../Models/Task.js";
import TaskList from "../Models/TaskList.js";
import TaskView from "../Views/TaskView.js";
import Bind from "../Helpers/Bind.js";
import DateHelper from "../Helpers/DateHelper.js";

class TaskController {
  constructor() {
    this._taskForm = document.querySelector("#task_form");
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

    this._taskList.addTask(new Task(task, DateHelper.stringToDate(date, time)));
    TaskView.update(this._taskList.getList, [this.deleteTask, this.taskDone]);

    this._taskForm.reset();
    this._addTaskButton.disabled = true;
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
