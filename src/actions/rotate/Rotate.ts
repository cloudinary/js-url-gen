import horizontalFlip from "./horizontalFlip";
import verticalFlip from "./verticalFlip";
import angle from "./angle";
import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";

class Rotate extends Action implements IAction {
  constructor(angle?: number) {
    super();
    this.addParam(new Param('a', angle));
  }

  /**
   * @return {Rotate}
   */
  horizontalFlip(): Rotate {
    this.params.get('a').addValue('hflip');
    return this;
  }

  /**
   * @return {Rotate}
   */
  verticalFlip(): Rotate {
    this.params.get('a').addValue('vflip');
    return this;
  }

  /**
   * @return {Rotate}
   */
  angle(value: number): Rotate {
    if (typeof value !== 'undefined') {
      this.params.get('a').addValue(value);
    }
    return this;
  }
}

export {angle, horizontalFlip, verticalFlip};
export default Rotate;
