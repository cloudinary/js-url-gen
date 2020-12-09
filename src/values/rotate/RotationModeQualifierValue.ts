import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @doc
 * @memberOf Values.RotationMode
 * @extend {SDK.QualifierValue}
 */
class RotationModeQualifierValue extends QualifierValue {
  private readonly val: string;

  constructor(val: string) {
    super();
    this.val = val;
  }

  toString(): string {
    return this.val;
  }
}


export {RotationModeQualifierValue};
