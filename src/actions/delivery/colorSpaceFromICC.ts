import {Action} from "../../internal/Action";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description Specifies the ICC profile to use for the color space.
 * @augments Action
 */
class ColorSpaceFromICC extends Action {
  constructor(publicId: string) {
    super();
    const qualifierValue = new QualifierValue(['icc', publicId]).setDelimiter(':');
    this.addQualifier(new Qualifier('cs', qualifierValue));
  }
}
/**
 * @description Specifies the ICC profile to use for the color space.
 * The ICC file must be uploaded to your account as a raw, authenticated file.
 * @memberOf Actions.Delivery
 * @param {string} publicId The public ID (including the file extension) of the ICC profile that defines the
 * color space.
 * @return {ColorSpaceFromICC}
 */
function colorSpaceFromICC(publicId:string) :ColorSpaceFromICC {
  return new ColorSpaceFromICC(publicId);
}

export default colorSpaceFromICC;
