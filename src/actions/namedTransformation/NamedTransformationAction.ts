import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";

class NamedTransformationAction extends Action {
  constructor(name:string) {
    super();
    this.addQualifier(new Qualifier('t', name));
  }
}

export {NamedTransformationAction};
