import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @memberOf Quality
 */
function good():IQualityAction {
  return new QualityAction('auto:good');
}

export default good;
