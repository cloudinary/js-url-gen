import Action from "../Action";
import Param from "../../parameters/Param";

class StreamingProfileAction extends Action {
  private profile: string|number;

  constructor(profile: string|number) {
    super();
    this.profile = profile;
  }

  protected prepareParam(): this {
    this.addParam(new Param('sp', this.profile));
    return this;
  }
}

export default StreamingProfileAction;
