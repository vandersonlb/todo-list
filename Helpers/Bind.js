//"use strict";

import ProxyFactory from "./ProxyFactory.js";
import LocalStorage from "../DB/LocalStorage.js";

export class Bind {
  constructor(model, view, actions, ...props) {
    let proxy = ProxyFactory.create(model, props, function () {
      view.update(model.getList, actions);
      LocalStorage.refreshDB(model.getList);
    });

    view.update(model.getList, actions);

    return proxy;
  }
}

export default Bind;
