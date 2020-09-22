import {IAction} from "../../interfaces/IAction";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";

class BackgroundAction extends Qualifier implements IAction {
  constructor(backgroundType?: string) {
    super('b', new QualifierValue(backgroundType).setDelimiter('_'));
  }

  contrast():this {
    return this.addValue('contrast');

  }
}

export default BackgroundAction;
