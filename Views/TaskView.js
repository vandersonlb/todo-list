//"use strict";

class TaskView {
  constructor() {
    throw new Error(`Não é possível instanciar ${this.constructor.name}`);
  }

  static update(taskList, actions) {
    let container = document.querySelector("#task_list");
    let list = document.createElement("ul");
    container.innerHTML = "";

    if (taskList.length) {
      taskList.forEach(task => {
        let item = TaskView.createItem(task, actions);
        list.appendChild(item);
      });

      container.appendChild(list);
    }
  }

  static createItem(task, actions) {
    let li = document.createElement("li");
    li.setAttribute("id", task.id);
    li.classList.toggle("teste", task.done);
    li.innerHTML = `${task.name} ||| ${task.date}`;
    li.appendChild(TaskView.createDeleteButton(actions[0]));
    li.appendChild(TaskView.createDoneButton(actions[1]));

    return li;
  }

  static createDeleteButton(action) {
    let button = document.createElement("button");
    button.innerText = "DELETE";
    button.onclick = action;

    return button;
  }

  static createDoneButton(action) {
    let button = document.createElement("button");
    button.innerText = "DONE";
    button.onclick = action;

    return button;
  }
}

export default TaskView;
