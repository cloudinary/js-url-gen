/**
 * Rotates or flips an image or video by the specified number of degrees, or automatically (images only) according to its orientation or available metadata.
 * @memberOf Actions
 * @namespace Rotate
 */


import horizontalFlip from "./horizontalFlip";
import verticalFlip from "./verticalFlip";
import angle from "./angle";

import {IAction} from "../../interfaces/IAction";
import Action from "../Action";
import Param from "../../parameters/Param";

const HORIZONTAL_FLIP = 'hflip';
const VERTICAL_FLIP = 'vflip';
const PARAM_KEY = 'a';


class RotateAction extends Action implements IAction {
  constructor(angle?: number) {
    super();
    this.addParam(new Param(PARAM_KEY, angle));
  }

  /**
   * @return {Rotate}
   */
  horizontalFlip(): this {
    return this.addValueToParam(PARAM_KEY, HORIZONTAL_FLIP);
  }

  /**
   * @return {Rotate}
   */
  verticalFlip(): this {
    return this.addValueToParam(PARAM_KEY, VERTICAL_FLIP);
  }

  /**
   * @return {Rotate}
   */
  angle(value: number): this {
    return this.addValueToParam(PARAM_KEY, value);
  }
}

export {angle, horizontalFlip, verticalFlip, RotateAction};
export default {angle, horizontalFlip, verticalFlip, RotateAction};
