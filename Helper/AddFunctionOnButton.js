import LocalStorage from "../DB/LocalStorage.js";

class AddFunctionOnButton {
  static addFunction(elementHTML) {
    let buttons = elementHTML.querySelectorAll('button');
    buttons.forEach( button => button.addEventListener('click', LocalStorage.deleteTaskDB) )
  }
}

export default AddFunctionOnButton;
