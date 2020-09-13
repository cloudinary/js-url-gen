import Action from "../Action";
import Param from "../../parameters/Param";

class FPSAction extends Action {
  private from: number;

  constructor(from: number) {
    super();
    this.from = from;
  }

  protected prepareParam(): this {
    this.addParam(new Param('fps', this.from));
    return this;
  }
}

export default FPSAction;
