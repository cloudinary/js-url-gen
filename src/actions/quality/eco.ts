import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @description Quality eco.
 * @memberOf Actions.Quality
 */
function eco():IQualityAction {
  return new QualityAction('auto:eco');
}

export default eco;
