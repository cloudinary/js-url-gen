import ResizeSimpleAction from "./ResizeSimpleAction";
import {GravityQualifier} from "../../values/gravity/GravityQualifier";

/**
 * @description Defines a scaling resize action.
 * @augments ResizeSimpleAction
 */
class ScaleAction extends ResizeSimpleAction {
  /**
   * @description Changes the aspect ratio of an image while retaining all important content and avoiding unnatural
   * distortions.
   * @return {this}
   */
  liquidRescaling(): this {
    return this.addQualifier(new GravityQualifier('liquid'));
  }
}


export {ScaleAction};
