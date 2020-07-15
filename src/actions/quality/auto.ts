import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @memberOf Quality
 */
function auto():IQualityAction {
  return new QualityAction('auto');
}

export default auto;
