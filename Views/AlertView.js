"use strict";

class AlertView {
  constructor() {
    throw new Error(`Não é possível instanciar ${this.constructor.name}`);
  }

  static update(element, msg) {
    element.style.display = "flex";
    element.innerHTML = this.createAlert(msg);
    setTimeout(() => (element.style.display = "none"), 2500);
  }

  static createAlert(msg) {
    return `
      <p>${msg}</p>
      <span class="material-icons" onclick="this.parentElement.style.display = 'none'">close</span>
    `;
  }
}

export default AlertView;
