import Action from "../../sdk/Action";
import Qualifier from "../../sdk/qualifier/Qualifier";

class NamedTransformationAction extends Action {
  constructor(name:string) {
    super();
    this.addQualifier(new Qualifier('t', name));
  }
}

export {NamedTransformationAction};
