// import LocalStorage from "../DB/LocalStorage.js";
// import TaskController from "../Controller/TaskController.js"

import {currentInstance} from "../Controller/TaskController.js";


class AddFunctionOnButton {
  constructor() {
    //this._taskController = currentInstance();
  }

  static addFunction(elementHTML) {
    console.log('HAHAAH')
    console.log(TaskController.deleteTask)
    //console.log(this._taskController)
    //let buttons = elementHTML.querySelectorAll('button');
    //buttons.forEach( button => button.addEventListener('click', LocalStorage.deleteTaskDB) )
    //buttons.forEach( button => button.addEventListener('click', TaskController.deleteTask) )
  }
}

export default AddFunctionOnButton;
