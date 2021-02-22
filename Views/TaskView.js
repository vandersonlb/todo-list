"use strict";

class TaskView {
  constructor() {
    throw new Error(`Não é possível instanciar ${this.constructor.name}`);
  }
  
  static update(taskList, actions) {
    let container = document.querySelector("main");
    let groups = this.groupDates(taskList);
    container.innerHTML = "";
      
    groups.forEach((date) => {
      
      let card = document.createElement("section");
      card.classList.add("card");
      
      let dateLabel = this.createLabel(date);
      
      card.appendChild(dateLabel);
      
      let list = document.createElement("ul");
      card.appendChild(list);
      
      taskList.forEach((task) => {
        if(date === task.date.toLocaleString('pt-BR', {weekday: 'long', day: 'numeric', month: 'long'})) {
          let item = this.createItem(task, actions);
          list.appendChild(item) ;
        }
      });
      
      container.appendChild(card);
    })

  }

  static createLabel(date) {
    let label = document.createElement("h2");
    label.classList.add("titulo", "titulo_card");
    label.innerText = date;
    
    return label;
  }

  static groupDates(taskList) {
    let filteredList = [];
    
    taskList.filter((task) => {
      let dateString = task.date.toLocaleString('pt-BR', {weekday: 'long', day: 'numeric', month: 'long'});
      if(!filteredList.includes(dateString))
        filteredList.push(dateString)
    })

    return filteredList
  }

  static createItem(task, actions) {
    let deleteAction = actions[0];
    let doneAction = actions[1];

    let li = document.createElement("li");
    li.setAttribute("id", task.id);
    li.classList.add("task_group");

    let labelHour = document.createElement("label");
    labelHour.setAttribute("for", `checkbox${task.id}`);
    labelHour.classList.add("task_item", "hour");
    labelHour.innerText = task.date.toLocaleString('pt-BR', {timeStyle: ('short')});
    li.appendChild(labelHour);
    
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", `checkbox${task.id}`);
    checkbox.classList.add("task_item");
    this.addAction(checkbox, doneAction);
    checkbox.checked = task.done;
    li.appendChild(checkbox);

    let labelTask = document.createElement("label");
    labelTask.setAttribute("for", `checkbox${task.id}`);
    labelTask.classList.add("task_item");
    labelTask.classList.add("text");
    labelTask.innerText = task.name;
    li.appendChild(labelTask);

    let deleteTask = document.createElement("p");
    deleteTask.classList.add("material-icons", "close_btn", "task_item");
    this.addAction(deleteTask, deleteAction);
    deleteTask.innerText = "close";
    li.appendChild(deleteTask);
       
    
    labelHour.classList.toggle("done", task.done);
    labelTask.classList.toggle("done", task.done);

    return li;
  }

  static addAction(element, action) {
    element.addEventListener('click', action);
  }

}

export default TaskView;
