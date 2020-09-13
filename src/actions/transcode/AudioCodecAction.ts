import Action from "../Action";
import Param from "../../parameters/Param";

class AudioCodecAction extends Action {
  private codec: string;

  constructor(codec: string) {
    super();
    this.codec = codec;
  }

  protected prepareParam(): this {
    this.addParam(new Param('ac', this.codec));
    return this;
  }
}

export default AudioCodecAction;
