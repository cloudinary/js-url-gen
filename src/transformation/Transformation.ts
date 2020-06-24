import {IAction} from "../interfaces/IAction";

class Transformation {
  actions: IAction[];

  constructor() {
    this.actions = [];
  }

  /**
   * @param {IAction} action
   */
  addAction(action: IAction): this {
    this.actions.push(action);
    return this;
  }

  /**
   * @return {string}
   */
  toString(): string {
    let str = '';

    this.actions.forEach((action) => {
      str += action.toString();
    });

    return str;
  }
}

export default Transformation;
