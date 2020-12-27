import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {DeliveryAction} from "./DeliveryAction";

/**
 * @description Controls the quality of the delivered image or video.
 * @memberOf Actions.Delivery
 * @extends {Actions.Delivery.DeliveryAction}
 */
class DeliveryQualityAction extends DeliveryAction {
  private qualityValue: string | number;
  constructor(qualityValue: string | number) {
    super( 'q', qualityValue.toString());
    this.qualityValue = qualityValue;
  }

  chromaSubSampling(type: 420 | 444 | number): this {
    const qualityWithSubSampling = new QualifierValue([this.qualityValue, type]);
    qualityWithSubSampling.setDelimiter(':');

    // We either have chroma or quantization, but not both
    return this.addQualifier(new Qualifier('q', qualityWithSubSampling));
  }

  quantization(val:number) {
    const qualityWithQuantization = new QualifierValue([this.qualityValue, `qmax_${val}`]);
    qualityWithQuantization.setDelimiter(':');

    // We either have chroma or quantization, but not both
    return this.addQualifier(new Qualifier('q', qualityWithQuantization));
  }
}

export {DeliveryQualityAction};
