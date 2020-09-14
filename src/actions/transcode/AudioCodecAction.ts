import Action from "../Action";
import Param from "../../parameters/Param";

class AudioCodecAction extends Action {
  constructor(codec: string) {
    super();
    this.addParam(new Param('ac', codec));
  }
}

export default AudioCodecAction;
