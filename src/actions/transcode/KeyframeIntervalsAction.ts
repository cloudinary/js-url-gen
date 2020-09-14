import Action from "../Action";
import Param from "../../parameters/Param";
import {toFloatAsString} from "../../utils/toFloatAsString";

class KeyframeIntervalsAction extends Action {
  constructor(interval: number) {
    super();
    this.addParam(new Param('ki', toFloatAsString(interval)));
  }
}

export default KeyframeIntervalsAction;
