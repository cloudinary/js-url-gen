import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";

class StreamingProfileAction extends Action {
  constructor(profile: string|number) {
    super();
    this.addQualifier(new Qualifier('sp', profile));
  }
}

export default StreamingProfileAction;
