import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import {isString} from "../../utils/dataStructureUtils";

class SetAction extends Action {
  constructor(name: string, value: number | string) {
    super();
    const qualifierKey = `$${name}`;
    const qualifierValue = isString(value) ? `!${value}!` : value;
    this.addQualifier(new Qualifier(qualifierKey, qualifierValue));
  }
}

export default SetAction;
