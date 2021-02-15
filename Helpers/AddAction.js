//"use strict";

class AddAction {
  constructor() {
    throw new Error(`Não é possível instanciar ${this.constructor.name}`);
  }

  static remove(element, deleteTask) {
    let buttons = element.querySelectorAll("[data-task-delete]");
    buttons.forEach((button) =>
      button.addEventListener("click", (evt) =>
        deleteTask(evt.target.parentNode.id)
      )
    );
  }

  static taskDone(element, taskDone, checkTask) {
    let buttons = element.querySelectorAll("[data-task-done]");
    buttons.forEach((button) => {
      button.addEventListener("click", (evt) =>
        taskDone(evt.target.parentNode.id)
      );
    });
  }
}

export default AddAction;
