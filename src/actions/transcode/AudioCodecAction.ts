import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

class AudioCodecAction extends Action {
  constructor(codec: string) {
    super();
    this.addQualifier(new Qualifier('ac', codec));
  }
}

export default AudioCodecAction;
