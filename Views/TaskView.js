"use strict";

class TaskView {
  constructor() {
    throw new Error(`Não é possível instanciar ${this.constructor.name}`);
  }
  
  static update(taskList, actions) {
    const container = document.querySelector("main");
    const groups = this.groupDates(taskList);
    container.innerHTML = "";
      
    groups.forEach((date) => {
      
      const card = document.createElement("section");
      card.classList.add("card");
      
      const dateLabel = this.createLabel(date);
      
      card.appendChild(dateLabel);
      
      const list = document.createElement("ul");
      card.appendChild(list);
      
      taskList.forEach((task) => {
        if(date === task.date.toLocaleString('pt-BR', {weekday: 'long', day: 'numeric', month: 'long'})) {
          const item = this.createItem(task, actions);
          list.appendChild(item) ;
        }
      });
      
      container.appendChild(card);
    })

  }

  static createLabel(date) {
    const label = document.createElement("h2");
    label.classList.add("titulo", "titulo_card");
    label.innerText = date;
    
    return label;
  }

  static groupDates(taskList) {
    const filteredList = [];
    
    taskList.filter((task) => {
      const dateString = task.date.toLocaleString('pt-BR', {weekday: 'long', day: 'numeric', month: 'long'});
      if(!filteredList.includes(dateString))
        filteredList.push(dateString)
    })

    return filteredList.reverse();
  }

  static createItem(task, actions) {
    const deleteAction = actions[0];
    const doneAction = actions[1];

    const li = document.createElement("li");
    li.setAttribute("id", task.id);
    li.classList.add("task_group");

    const labelHour = document.createElement("label");
    labelHour.setAttribute("for", `checkbox${task.id}`);
    labelHour.classList.add("task_item", "hour");
    labelHour.innerText = task.date.toLocaleString('pt-BR', {timeStyle: ('short')});
    li.appendChild(labelHour);
    
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", `checkbox${task.id}`);
    checkbox.classList.add("task_item");
    this.addAction(checkbox, doneAction);
    checkbox.checked = task.done;
    li.appendChild(checkbox);

    const labelTask = document.createElement("label");
    labelTask.setAttribute("for", `checkbox${task.id}`);
    labelTask.classList.add("task_item");
    labelTask.classList.add("text");
    labelTask.innerText = task.name;
    li.appendChild(labelTask);

    const deleteTask = document.createElement("p");
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
