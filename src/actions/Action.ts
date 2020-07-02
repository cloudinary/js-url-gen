import Param from "../parameters/Param";
import Flag from "../parameters/Flag";
import {IAction} from "../interfaces/IAction";
import {sortMapByKey} from "../utils/dataStructureUtils";

class Action implements IAction {
  // We're using map, to overwrite existing keys. for example:
  // addParam(w_100).addParam(w_200) should result in w_200. and not w_100,w_200
  params: Map<string, Param> = new Map();
  delimiter = ','; // {param}{delimiter}{param} for example: `${'w_100'}${','}${'c_fill'}`

  toString(): string {
    return sortMapByKey(this.params).join(this.delimiter);
  }

  addParam(parameter: Param): this {
    this.params.set(parameter.key, parameter);
    return this;
  }

  addFlag(flag: Flag): this {
    const existingFlag = this.params.get('fl_');
    if (existingFlag) {
      existingFlag.addValue(flag.paramValue);
    } else {
      this.params.set('fl_', flag);
    }

    return this;
  }
}

export default Action;
