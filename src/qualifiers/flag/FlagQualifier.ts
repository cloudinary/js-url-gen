import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";

/**
 * @memberOf Qualifiers.Flag
 * @extends {SDK.Qualifier}
 * @description the FlagQualifier class
 */
class FlagQualifier extends Qualifier {
  flagValue : FlagQualifier | string;
  constructor(flagType?: QualifierValue | QualifierValue[] | number | number[] | string | string[], flagValue?: FlagQualifier | string) {
    let qualifierValue;
    if(flagValue) {
      qualifierValue = new QualifierValue([flagType, `${flagValue}`]).setDelimiter(':');
    }else {
      qualifierValue = flagType;
    }
    super('fl', qualifierValue);
    this.flagValue = flagValue;
  }

  toString(): string {
    return super.toString().replace(/\./, '%2E');
  }

  getFlagValue(): string{
    return this.flagValue as string;
  }
}

export {FlagQualifier};
