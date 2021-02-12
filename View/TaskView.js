//"use strict";

import LocalStorage from "../DB/LocalStorage.js";
import AddFunctionOnButton from "../Helper/AddFunctionOnButton.js";

class TaskView {
  constructor() {
    //this.teste = function() { alert(777) };
    this._localStorage = new LocalStorage();
    this._taskListContainer = document.querySelector('#task_list');
  }

  static refreshView(taskList) {
    //console.log(this._localStorage);
    //console.log(taskList);
    //if (taskList.length == 0) return null; //É MESMO NECESSÁRIO???

    document.querySelector('#task_list').innerHTML = `
      <ul>
      ${taskList
        .map((task) => {
          return `<li id="${task.id}">${task.task} || ${task.date}<button>DELETE</button></li>`;
        })
        .join("")}
      </ul>
    `;

    //this.addFunctionButton(elementHTML);
    // console.log(LocalStorage.getTaskDB(), 666)
    //TaskView.addFunctionButton()
    AddFunctionOnButton.addFunction(document.querySelector('#task_list'))
  }

}

export default TaskView;
