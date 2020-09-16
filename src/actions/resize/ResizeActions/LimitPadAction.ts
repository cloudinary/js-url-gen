import ResizeSimpleAction from "./ResizeSimpleAction";
import Qualifier from "../../../qualifiers/Qualifier";
import {toFloatAsString} from "../../../utils/toFloatAsString";


class LimitPadAction extends ResizeSimpleAction {
  aspectRatio(ratio:number|string): this {
    // toFloatAsString is used to ensure 1 turns into 1.0
    return this.addQualifier(new Qualifier('ar', toFloatAsString(ratio)));
  }
}

/**
 * @memberOf Actions.Resize
 * @description
 * Same as the Pad::pad mode but only if the original image is larger than the given limit (width and height),</br>
 * in which case the image is scaled down to fill the given width and height while retaining the original aspect ratio and with all of the original image visible.
 * @param {number|string} width
 * @param {number|string} height
 */
export default function limitPad(width?: string|number, height?: string|number) :LimitPadAction {
  return new LimitPadAction('lpad', width, height);
}
