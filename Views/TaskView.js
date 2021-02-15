//"use strict";

import AddAction from "../Helpers/AddAction.js";

class TaskView {

  update(taskList, cb) {
    let deleteTask = cb[0];
    let taskDone = cb[1];
    let element = document.querySelector("#task_list");

    element.innerHTML = `
      <ul>
      ${taskList
        .map((task) => `<li class="${task.done?'teste':''}" data-task-item id="${task.id}">${task.task} || ${task.date}
                        <button data-task-delete>DELETE</button>
                        <button data-task-done>DONE</button></li>`)
        .join("")}
      </ul>
    `;

    AddAction.remove(element, deleteTask);
    AddAction.taskDone(element, taskDone);
  }

}

export default TaskView;
