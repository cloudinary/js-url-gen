import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";
import QualifierValue from "../../qualifiers/QualifierValue";

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
 */
function colorSpaceFromICC(publicId:string) :ColorSpaceFromICC {
  return new ColorSpaceFromICC(publicId);
}

export default colorSpaceFromICC;
