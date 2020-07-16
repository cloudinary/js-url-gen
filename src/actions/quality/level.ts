import QualityAction from "./QualityAction";
import {IQualityAction} from "./IQualityAction";


/**
 * @memberOf Quality
 */
function level(qualityLevell: number):IQualityAction {
  return new QualityAction(qualityLevell.toString());
}

export default level;
