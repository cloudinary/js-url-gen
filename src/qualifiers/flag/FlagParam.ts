import Qualifier from "../Qualifier";
import QualifierValue from "../QualifierValue";

/**
 * @description Defines flags that you can use to alter the default transformation behavior.
 * @namespace Flag
 * @memberOf Params
 */
class Flag extends Qualifier {
  constructor(flagType?: QualifierValue | QualifierValue[] | number | number[] | string | string[], flagValue?: string) {
    let qualifierValue;
    if(flagValue) {
      qualifierValue = new QualifierValue([flagType, `${flagValue}`]).setDelimiter(':');
    }else {
      qualifierValue = flagType;
    }
    super('fl', qualifierValue);
  }
}

export default Flag;
