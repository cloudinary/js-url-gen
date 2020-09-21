import ResizeSimpleAction from "./ResizeSimpleAction";
import Qualifier from "../../../qualifiers/Qualifier";
import {toFloatAsString} from "../../../utils/toFloatAsString";
import {GravityParam} from "../../../qualifiers/gravity/Gravity";

class ThumbResizeAction extends ResizeSimpleAction {
  aspectRatio(ratio:number|string): this {
    // toFloatAsString is used to ensure 1 turns into 1.0
    return this.addQualifier(new Qualifier('ar', toFloatAsString(ratio)));
  }

  gravity(gravity:GravityParam): this {
    return this.addQualifier(gravity);
  }
}

/**
 * @memberOf Actions.Resize
 * @description
 * The thumb cropping mode is specifically used for creating image thumbnails from either face or custom coordinates,</br>
 * and must always be accompanied by the gravity parameter set to one of the face detection or custom values.
 * @param {number|string} width
 * @param {number|string} height
 */
export default function thumb(width?: string|number, height?: string|number) :ThumbResizeAction {
  return new ThumbResizeAction('thumb', width, height);
}
