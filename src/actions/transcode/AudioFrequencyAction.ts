import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

/**
 * @class AudioFrequencyAction
 * @description Controls audio sample frequency.
 */
class AudioFrequencyAction extends Action {
  constructor(freq: string|number) {
    super();
    this.addQualifier(new Qualifier('af', freq));
  }
}

export default AudioFrequencyAction;
