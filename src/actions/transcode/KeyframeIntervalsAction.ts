import Action from "../Action";
import Param from "../../parameters/Param";
import {toFloatAsString} from "../../utils/toFloatAsString";

class KeyframeIntervalsAction extends Action {
  private interval: number;

  constructor(interval: number) {
    super();
    this.interval = interval;
  }

  protected prepareParam(): this {
    this.addParam(new Param('ki', toFloatAsString(this.interval)));
    return this;
  }
}

export default KeyframeIntervalsAction;
