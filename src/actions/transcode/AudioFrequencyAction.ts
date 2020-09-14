import Action from "../Action";
import Param from "../../parameters/Param";

class AudioFrequencyAction extends Action {
  constructor(freq: string|number) {
    super();
    this.addParam(new Param('af', freq));
  }
}

export default AudioFrequencyAction;
