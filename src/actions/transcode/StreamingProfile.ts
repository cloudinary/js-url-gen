import Action from "../Action";
import Param from "../../parameters/Param";

class StreamingProfileAction extends Action {
  constructor(profile: string|number) {
    super();
    this.addParam(new Param('sp', profile));
  }
}

export default StreamingProfileAction;
