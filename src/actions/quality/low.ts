import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @memberOf Quality
 */
function low():IQualityAction {
  return new QualityAction('auto:low');
}

export default low;
