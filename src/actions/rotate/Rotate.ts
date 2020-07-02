import horizontalFlip from "./horizontalFlip";
import verticalFlip from "./verticalFlip";
import angle from "./angle";
import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";
const HORIZONTAL_FLIP = 'hflip';
const VERTICAL_FLIP = 'vflip';
const PARAM_KEY = 'a';

class Rotate extends Action implements IAction {
  constructor(angle?: number) {
    super();
    this.addParam(new Param(PARAM_KEY, angle));
  }

  /**
   * @return {Rotate}
   */
  horizontalFlip(): Rotate {
    return this.addValue(HORIZONTAL_FLIP);
  }

  /**
   * @return {Rotate}
   */
  verticalFlip(): Rotate {
    return this.addValue(VERTICAL_FLIP);
  }

  /**
   * @return {Rotate}
   */
  angle(value: number): Rotate {
    return this.addValue(value);
  }

  private addValue(value?: number | string): Rotate {
    if (value != null) {
      this.params.get(PARAM_KEY).addValue(value);
    }
    return this;
  }
}

export {angle, horizontalFlip, verticalFlip};
export default Rotate;
