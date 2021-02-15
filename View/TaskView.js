//"use strict";

class TaskView {

  refreshView(element, taskList, cb) {
    element.innerHTML = `
      <ul>
      ${taskList
        .map((task) => `<li id="${task.id}">${task.task} || ${task.date} <button>DELETE</button></li>`)
        .join("")}
      </ul>
    `;

    this.addOnclickFunction(element, cb);
  }

  addOnclickFunction(element, cb) {
    let buttons = element.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", (evt) => cb(evt.target.parentNode.id));
    });
  }
}

export default TaskView;
