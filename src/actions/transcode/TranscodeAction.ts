import {IAction} from "../../interfaces/IAction";
import Action from "../Action";
import Param from "../../parameters/Param";

const PARAM_KEY = 'todo:update_this';

class TranscodeAction extends Action implements IAction {
  constructor(transcode?: string) {
    super();
    this.transcode(transcode);
  }

  /**
   * @param {number} degrees rotation in degrees e.g 90, 45, 33
   * @return {RotateAction}
   */
  transcode(transcode: string): this {
    return this.addParam(new Param(PARAM_KEY, transcode));
  }
}

export {TranscodeAction};
export default TranscodeAction;
