import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";

class FPSAction extends Action {

  constructor(from: number) {
    super();
    this.addQualifier(new Qualifier('fps', from));
  }
}

export default FPSAction;
