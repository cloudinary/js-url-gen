import horizontalFlip from "./horizontalFlip";
import verticalFlip from "./verticalFlip";
import angle from "./angle";
import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";
const HORIZONTAL_FLIP = 'hflip';
const VERTICAL_FLIP = 'vflip';

class Rotate extends Action implements IAction {
  readonly angleParamValue: ParamValue ;

  constructor(angle?: number) {
    super();
    this.angleParamValue = new ParamValue(angle);
    this.addParam(new Param('a', this.angleParamValue));
  }

  /**
   * @return {Rotate}
   */
  horizontalFlip(): Rotate {
    this.angleParamValue.addValue(HORIZONTAL_FLIP);
    return this;
  }

  /**
   * @return {Rotate}
   */
  verticalFlip(): Rotate {
    this.angleParamValue.addValue(VERTICAL_FLIP);
    return this;
  }

  /**
   * @return {Rotate}
   */
  angle(value: number): Rotate {
    this.angleParamValue.addValue(value);
    return this;
  }
}

export {angle, horizontalFlip, verticalFlip};
export default Rotate;
