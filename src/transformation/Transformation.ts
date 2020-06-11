import {IAction} from "../interfaces/IAction";

class Transformation {
  actions: IAction[];

  constructor() {
    this.actions = [];
  }

  /**
   *
   * @param {IAction} action
   */
  addAction(action: IAction) {
    this.actions.push(action);
    return this;
  }

  /**
   * @return {string}
   */
  toString() {
    let str = '';

    this.actions.forEach((action) => {
      str += action.toString();
    });

    return str;
  }
}

export default Transformation;
