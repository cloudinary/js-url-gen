import Param from "../parameters/Param";
import {Flag} from "../params/flag/Flag";
import {IAction} from "../interfaces/IAction";
import {mapToSortedArray} from "../utils/dataStructureUtils";

class Action implements IAction {
  // We're using map, to overwrite existing keys. for example:
  // addParam(w_100).addParam(w_200) should result in w_200. and not w_100,w_200
  params: Map<string, Param> = new Map();
  delimiter = ','; // {param}{delimiter}{param} for example: `${'w_100'}${','}${'c_fill'}`
  protected prepareParam():void {}

  toString(): string {
    this.prepareParam();
    return mapToSortedArray(this.params).join(this.delimiter);
  }

  addParam(parameter: Param): this {
    this.params.set(parameter.key, parameter);
    return this;
  }

  addFlag(flag: Flag): this {
    const existingFlag = this.params.get('fl_');
    flag.paramValue.setDelimiter('.');

    if (existingFlag){
      existingFlag.addValue(flag.paramValue);
    } else {
      this.params.set('fl_', flag);
    }

    return this;
  }

  protected addValueToParam(paramKey: string, paramValue: unknown): this{
    this.params.get(paramKey).addValue(paramValue);

    return this;
  }
}

export default Action;
