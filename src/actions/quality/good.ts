import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @description Quality good.
 * @memberOf Actions.Quality
 */
function good():IQualityAction {
  return new QualityAction('auto:good');
}

export default good;
