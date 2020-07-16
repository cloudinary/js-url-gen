import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @memberOf Quality
 */
function eco():IQualityAction {
  return new QualityAction('auto:eco');
}

export default eco;
