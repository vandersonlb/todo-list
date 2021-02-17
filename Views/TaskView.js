//"use strict";

class TaskView {
  constructor() {
    throw new Error(`Não é possível instanciar ${this.constructor.name}`);
  }

  static update(taskList, actions) {
    let container = document.querySelector("#task_list");
    let list = document.createElement("ul");
    let group = this.groupDates(taskList);
    container.innerHTML = "";

    group.forEach((date) => {
      let dateLabel = this.createLabel(date);
      list.appendChild(dateLabel);
      taskList.forEach((task) => {
        if(date === task.date.toLocaleString('pt-BR', {dateStyle: ('long')})) {
          let item = this.createItem(task, actions);
          list.appendChild(item);
        }
      });
    })

    container.appendChild(list);
  }

  static createLabel(date) {
    let label = document.createElement("h3");
    label.innerText = date;
    
    return label;
  }

  static groupDates(taskList) {
    let filteredList = [];
    
    taskList.filter((task) => {
      let dateString = task.date.toLocaleString('pt-BR', {dateStyle: ('long')})
      if(!filteredList.includes(dateString))
        filteredList.push(dateString)
    })

    return filteredList
  }

  static createItem(task, actions) {
    let li = document.createElement("li");
    li.setAttribute("id", task.id);
    li.classList.toggle("teste", task.done);
    li.innerHTML = `${task.date.toLocaleString('pt-BR', {timeStyle: ('short')})} ||| ${task.name}`;
    li.appendChild(this.createDeleteButton(actions[0]));
    li.appendChild(this.createDoneButton(actions[1]));

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
