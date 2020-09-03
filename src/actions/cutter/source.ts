import ImageSource from "../../params/sources/ImageSource";
import CutterAction from "./CutterAction";

/**
 *
 * @param {ImageSource} source
 */
function source(source: ImageSource): CutterAction {
  return new CutterAction(source);
}

export default source;
