import ResizeSimpleAction from "./ResizeSimpleAction";
import Qualifier from "../../../qualifier/Qualifier";
import {toFloatAsString} from "../../../utils/toFloatAsString";


class ImaggaCropAction extends ResizeSimpleAction {

}

/**
 * @memberOf Actions.Resize
 * @description
 * Extracts a region of the given width and height out of the original image.
 * @param {number|string} width
 * @param {number|string} height
 */
function imaggaCrop(width?: number|string, height?: number|string) :ImaggaCropAction {
  return new ImaggaCropAction('imagga_crop', width, height);
}

export default imaggaCrop;
