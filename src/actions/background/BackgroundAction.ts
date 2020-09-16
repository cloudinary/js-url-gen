import {IAction} from "../../interfaces/IAction";
import Qualifier from "../../qualifiers/Qualifier";
import QualifierValue from "../../qualifiers/QualifierValue";

class BackgroundAction extends Qualifier implements IAction {
  constructor(backgroundType?: string) {
    super('b', new QualifierValue(backgroundType).setDelimiter('_'));
  }

  contrast():this {
    return this.addValue('contrast');

  }
}

export default BackgroundAction;
