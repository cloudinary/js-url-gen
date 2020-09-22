import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import {toFloatAsString} from "../../utils/toFloatAsString";

class KeyframeIntervalsAction extends Action {
  constructor(interval: number) {
    super();
    this.addQualifier(new Qualifier('ki', toFloatAsString(interval)));
  }
}

export default KeyframeIntervalsAction;
