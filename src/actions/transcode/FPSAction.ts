import Action from "../Action";
import Param from "../../parameters/Param";

class FPSAction extends Action {

  constructor(from: number) {
    super();
    this.addParam(new Param('fps', from));
  }
}

export default FPSAction;
