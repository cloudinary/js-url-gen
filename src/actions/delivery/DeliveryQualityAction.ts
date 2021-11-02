import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {DeliveryAction} from "./DeliveryAction.js";
import {IDeliveryQualityModel} from "../../internal/models/IDeliveryActionModel.js";
import {CHROMA_VALUE_TO_CHROMA_MODEL_ENUM, CHROMA_MODEL_ENUM_TO_CHROMA_VALUE} from "../../internal/internalConstants.js";
import {IActionModel} from "../../internal/models/IActionModel.js";


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
  }

  /**
   * Selet the Chroma sub sampling</br>
   * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#toggling_chroma_subsampling | Toggling chroma subsampling}
   * @param {420 | 444 | number} type The chroma sub sampling type
   */
  chromaSubSampling(type: 420 | 444 | number): this {
    this._actionModel.chromaSubSampling = CHROMA_VALUE_TO_CHROMA_MODEL_ENUM[type];
    const qualityWithSubSampling = new QualifierValue([this._actionModel.level, type]);
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
    const qualityWithQuantization = new QualifierValue([this._actionModel.level, `qmax_${val}`]).setDelimiter(':');

    // We either have chroma or quantization, but not both
    return this.addQualifier(new Qualifier('q', qualityWithQuantization));
  }

  static fromJson(actionModel: IActionModel): DeliveryQualityAction {
    const {level, chromaSubSampling, quantization} = (actionModel as IDeliveryQualityModel);
    const result = new this(level);

    if (chromaSubSampling){
      //Turn strings like 'CHROMA_420' to 420
      const chromaValue = CHROMA_MODEL_ENUM_TO_CHROMA_VALUE[chromaSubSampling.toUpperCase()];
      chromaValue && result.chromaSubSampling(+chromaValue);
    }

    quantization && result.quantization(quantization);

    return result;
  }
}

export {DeliveryQualityAction};
