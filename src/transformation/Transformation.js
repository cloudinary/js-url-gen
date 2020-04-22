class Transformation {
  constructor() {
    /** @type {IAction[]} */
    this.actions = [];
  }

  /**
   * @param {IAction} action
   */
  addAction(action) {
    this.actions.push(action);
    return this;
  }

  /**
   * @return {string}
   */
  toString() {
    let str = '';

    this.actions.forEach((action) => {
      str += action.toString()
    });

    return str;
  }
}

export default Transformation;
