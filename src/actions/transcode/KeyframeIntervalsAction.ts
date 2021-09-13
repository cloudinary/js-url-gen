import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {toFloatAsString} from "../../internal/utils/toFloatAsString.js";

/**
 * @extends SDK.Action
 * @memberOf Actions.Transcode
 * @description Controls the keyframe interval of the delivered video.
 * @see Visit {@link Actions.Transcode|Transcode} for an example
 */
class KeyframeIntervalsAction extends Action {
  constructor(interval: number | string) {
    super();
    this.addQualifier(new Qualifier('ki', toFloatAsString(interval)));
  }
}

export default KeyframeIntervalsAction;
