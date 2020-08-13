import {IAction} from "../../interfaces/IAction";
import Action from "../Action";
import Param from "../../parameters/Param";

const PARAM_KEY = 'a';

import * as RotationModes from '../../params/rotate/Rotate';

class RotateAction extends Action implements IAction {
  constructor(angle?: number) {
    super();
    this.addParam(new Param(PARAM_KEY, angle));
  }

  /**
   * @param rotationMode
   * @return {RotateAction}
   */
  mode(rotationMode: string):this {
    switch (rotationMode) {
      case RotationModes.AUTO_RIGHT:
        return this.addValueToParam(PARAM_KEY, 'auto_right');
      case RotationModes.AUTO_LEFT:
        return this.addValueToParam(PARAM_KEY, 'auto_left');
      case RotationModes.HORIZONTAL_FLIP:
        return this.addValueToParam(PARAM_KEY, 'hflip');
      case RotationModes.IGNORE:
        return this.addValueToParam(PARAM_KEY, 'ignore');
      case RotationModes.VERTICAL_FLIP:
        return this.addValueToParam(PARAM_KEY, 'vflip');
    }
  }

  /**
   * @param {number} degrees rotation in degrees e.g 90, 45, 33
   * @return {RotateAction}
   */
  angle(degrees: number): this {
    return this.addValueToParam(PARAM_KEY, degrees);
  }
}

export {RotateAction};
export default RotateAction;
