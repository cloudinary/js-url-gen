import {IAction} from "../../interfaces/IAction";
import Action from "../Action";
import Param from "../../parameters/Param";

const PARAM_KEY = 'trim';

class TrimAction extends Action implements IAction {
  constructor(param?: string) {
    super();
    this.trim(param);
  }

  /**
   * @param {string} param
   * @return {TrimAction}
   */
  trim(param: string): this {
    return this.addParam(new Param(PARAM_KEY, param));
  }
}

export {TrimAction};
export default TrimAction;
