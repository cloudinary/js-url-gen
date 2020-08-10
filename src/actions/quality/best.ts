import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @description Quality best.
 * @memberOf Actions.Quality
 */
function best():IQualityAction {
  return new QualityAction('auto:best');
}

export default best;
