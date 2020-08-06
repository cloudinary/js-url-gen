import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @description Quality jpegmini.
 * @memberOf Actions.Quality
 */
function jpegMini():IQualityAction {
  return new QualityAction('jpegmini');
}

export default jpegMini;
