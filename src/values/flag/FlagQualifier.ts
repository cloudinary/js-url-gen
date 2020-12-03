import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @memberOf Values.Flag
 * @extends {SDK.Qualifier}
 * @description the FlagQualifier class
 */
class FlagQualifier extends Qualifier {
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

export {FlagQualifier};
