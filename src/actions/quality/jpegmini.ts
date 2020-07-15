import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @memberOf Quality
 */
function jpegMini():IQualityAction {
  return new QualityAction('jpegmini');
}

export default jpegMini;
