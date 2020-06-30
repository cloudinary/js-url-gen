import Param from './Param';
import ParamValue from "./ParamValue";

class Flag extends Param {
  constructor(flagValue?: ParamValue | ParamValue[] | number | number[] | string | string[]) {
    super('fl', flagValue);
  }
}

export default Flag;