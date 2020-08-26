import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";

class BackgroundAction extends Param implements IAction {
  constructor(backgroundType?: string) {
    super('b', new ParamValue(backgroundType).setDelimiter('_'));
  }

  contrast():this {
    return this.addValue('contrast');

  }
}

export default BackgroundAction;
