import Param from "../parameters/Param";
import Flag from "../parameters/Flag";
import {IAction} from "../interfaces/IAction";

class Action implements IAction {
  // We're using map, to overwrite existing keys. for example:
  // addParam(w_100).addParam(w_200) should result in w_200. and not w_100,w_200
  params: Map<string, Param> = new Map();
  delimiter = ','; // {param}{delimiter}{param} for example: `${'w_100'}${','}${'c_fill'}`

  getSortedParams(): Param[] {
    return (Array.from(this.params.values()) as Param[]).sort((param1, param2) => {
      // No need to check for equality because params is a map.
      // Also, returning 0 will be unreachable code that will break code coverage.
      return (param1.key > param2.key) ? 1 : -1;
    });
  }

  toString(): string {
    return this.getSortedParams().join(this.delimiter);
  }

  addParam(parameter: Param): this {
    this.params.set(parameter.key, parameter);
    return this;
  }

  addFlag(flag: Flag): this {
    const existingFlag = this.params.get('fl_');
    if (existingFlag){
      existingFlag.addValue(flag.paramValue);
    } else{
      this.params.set('fl_', flag);
    }

    return this;
  }
}

export default Action;
