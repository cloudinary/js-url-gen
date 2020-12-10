import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import DeliveryAction from "./DeliveryAction";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description Controls the quality of the delivered image or video.
 * @class QualityAction
 * @augments DeliveryAction
 */
class QualityAction extends DeliveryAction {
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

/**
 * @description Controls the quality of the delivered image or video.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_optimization#how_to_optimize_image_quality | Image quality}
 *  {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#quality_control | Video quality}
 * @memberOf Actions.Delivery
 * @param {string | number} qualityType For a list of supported quality types see {@link Values.qualityTypeValues| quality types} for
 * possible values.
 * @return {DeliveryAction}
 */
function quality(qualityType:string | number) :QualityAction {
  return new QualityAction(qualityType);
}

export default quality;
