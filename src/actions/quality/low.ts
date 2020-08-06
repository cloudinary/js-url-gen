import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @description Quality low
 * @memberOf Actions.Quality
 */
function low():IQualityAction {
  return new QualityAction('auto:low');
}

export default low;
