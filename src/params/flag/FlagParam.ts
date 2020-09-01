import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";

/**
 * @description Defines flags that you can use to alter the default transformation behavior.
 * @namespace Flag
 * @memberOf Params
 */
class Flag extends Param {
  constructor(flagType?: ParamValue | ParamValue[] | number | number[] | string | string[], flagValue?: string) {
    let paramValue;
    if(flagValue) {
      paramValue = new ParamValue([flagType, `${flagValue}`]).setDelimiter(':');
    }else {
      paramValue = flagType;
    }
    super('fl', paramValue);
  }
}

export default Flag;
