import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @description Quality auto.
 * @memberOf Actions.Quality
 */
function auto():IQualityAction {
  return new QualityAction('auto');
}

export default auto;
