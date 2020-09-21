import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

class FPSAction extends Action {

  constructor(from: number) {
    super();
    this.addQualifier(new Qualifier('fps', from));
  }
}

export default FPSAction;
