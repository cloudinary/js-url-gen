import {ImageSource} from "../../values/sources/sourceTypes/ImageSource";
import CutterAction from "./CutterAction";

/**
 *
 * @description Trims pixels according to the transparency levels of a given overlay image.
 * @memberOf Actions.Cutter
 * @param {ImageSource} source
 * @return {CutterAction}
 */
function source(source: ImageSource): CutterAction {
  return new CutterAction(source);
}

export default source;
