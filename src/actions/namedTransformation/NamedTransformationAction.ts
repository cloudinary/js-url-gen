import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

class NamedTransformationAction extends Action {
  constructor(name:string) {
    super();
    this.addQualifier(new Qualifier('t', name));
  }
}

export {NamedTransformationAction};
