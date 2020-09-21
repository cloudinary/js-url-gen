import {IAction} from "../../interfaces/IAction";
import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

const PARAM_KEY = 'trim';

class TrimAction extends Action implements IAction {
  constructor(val?: string) {
    super();
    this.trim(val);
  }

  /**
   * @param {string} val
   * @return {TrimAction}
   */
  trim(val: string): this {
    return this.addQualifier(new Qualifier(PARAM_KEY, val));
  }
}

export {TrimAction};
export default TrimAction;
