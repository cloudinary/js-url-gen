import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {DeliveryAction} from "./DeliveryAction.js";
import {IDeliveryQualityModel} from "../../internal/models/IDeliveryActionModel.js";
import {ACTION_TYPE_TO_CHROMA_MAP} from "../../internal/internalConstants.js";


/**
 * @description Controls the quality of the delivered image or video.
 * @memberOf Actions.Delivery
 * @extends {Actions.Delivery.DeliveryAction}
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryQualityAction extends DeliveryAction {
  private qualityValue: string | number;

  /**
   * @param {Qualifiers.Quality} qualityValue a Quality value
   */
  constructor(qualityValue: string | number) {
    super( 'q', qualityValue.toString(), 'level');
    this.qualityValue = qualityValue;
  }

  /**
   * Selet the Chroma sub sampling</br>
   * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#toggling_chroma_subsampling | Toggling chroma subsampling}
   * @param {420 | 444 | number} type The chroma sub sampling type
   */
  chromaSubSampling(type: 420 | 444 | number): this {
    this._actionModel.chromaSubSampling = ACTION_TYPE_TO_CHROMA_MAP[type];
    const qualityWithSubSampling = new QualifierValue([this.qualityValue, type]);
    qualityWithSubSampling.setDelimiter(':');
    // We either have chroma or quantization, but not both
    return this.addQualifier(new Qualifier('q', qualityWithSubSampling));
  }

  /**
   * Controls the final quality by setting a maximum quantization percentage
   * @param {number} val
   */
  quantization(val:number): this {
    this._actionModel.quantization = val;
    const qualityWithQuantization = new QualifierValue([this.qualityValue, `qmax_${val}`]);
    qualityWithQuantization.setDelimiter(':');

    // We either have chroma or quantization, but not both
    return this.addQualifier(new Qualifier('q', qualityWithQuantization));
  }
}

export {DeliveryQualityAction};
