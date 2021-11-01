import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";

/**
 * @memberOf Qualifiers.Format
 * @extends {SDK.QualifierValue}
 */
class FormatQualifier extends QualifierValue {
  val: string;
  constructor(val: string) {
    super(val);
    this.val = val;
  }

  getValue(): string{
    return this.val;
  }
}

export {FormatQualifier};
