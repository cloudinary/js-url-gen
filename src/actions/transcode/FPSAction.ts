import {IAction} from "../../interfaces/IAction";
import Action from "../Action";
import Param from "../../parameters/Param";

const PARAM_KEY = 'fps';

class FPSAction extends Action implements IAction {
  constructor(fps?: string) {
    super();
    this.fps(fps);
  }

  /**
   * @param {number} degrees rotation in degrees e.g 90, 45, 33
   * @return {RotateAction}
   */
  fps(fps: string): this {
    return this.addParam(new Param(PARAM_KEY, fps));
  }
}

export {FPSAction};
export default FPSAction;
