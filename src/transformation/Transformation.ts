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
    return this.actions.map((action) => {
      return action.toString();
    }).join('/');
  }
}

export default Transformation;
