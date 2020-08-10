import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @description Sets the quality level.
 * @memberOf Actions.Quality
 */
function level(qualityLevel: number):IQualityAction {
  return new QualityAction(qualityLevel.toString());
}

export default level;
