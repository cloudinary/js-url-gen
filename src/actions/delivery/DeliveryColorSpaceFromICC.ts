import {Action} from "../../internal/Action";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../internal/qualifier/Qualifier";


/**
 * @description Specifies the ICC profile to use for the color space.
 * @memberOf Actions.Delivery
 * @extends {SDK.Action}
 */
class DeliveryColorSpaceFromICC extends Action {
  constructor(publicId: string) {
    super();
    const qualifierValue = new QualifierValue(['icc', publicId]).setDelimiter(':');
    this.addQualifier(new Qualifier('cs', qualifierValue));
  }
}

export {DeliveryColorSpaceFromICC};
