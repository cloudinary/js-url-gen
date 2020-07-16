import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @memberOf Quality
 */
function best():IQualityAction {
  return new QualityAction('auto:best');
}

export default best;
