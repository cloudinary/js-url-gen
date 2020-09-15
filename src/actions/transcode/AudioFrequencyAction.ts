import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";

class AudioFrequencyAction extends Action {
  constructor(freq: string|number) {
    super();
    this.addQualifier(new Qualifier('af', freq));
  }
}

export default AudioFrequencyAction;
