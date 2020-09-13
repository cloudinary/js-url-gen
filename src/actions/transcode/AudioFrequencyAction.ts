import Action from "../Action";
import Param from "../../parameters/Param";

class AudioFrequencyAction extends Action {
  private freq: string|number;

  constructor(freq: string|number) {
    super();
    this.freq = freq;
  }

  protected prepareParam(): this {
    this.addParam(new Param('af', this.freq));
    return this;
  }
}

export default AudioFrequencyAction;
