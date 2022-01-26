import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {IBitRateActionModel} from "../../internal/models/ITranscodeActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @extends SDK.Action
 * @memberOf Actions.Transcode
 * @description  Defines the video bitrate in bits per second.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#bitrate_control|Bitrate control}
 * @see Visit {@link Actions.Transcode|Transcode} for an example
 */
class BitRateAction extends Action {
  private bitRate: string|number;
  private isConstant = false;
  protected _actionModel : IBitRateActionModel = {actionType: 'bitRate'}

  constructor(bitRate: string|number) {
    super();
    this.bitRate = bitRate;
    this._actionModel.bitRate = bitRate;
  }
  /**
   * @description video plays with a constant bitrate (CBR).
   */
  constant(): this {
    this.isConstant = true;
    this._actionModel.constant = true;
    return this;
  }

  protected prepareQualifiers(): this {
    let qualifierValue;
    if(this.isConstant) {
      qualifierValue = new QualifierValue([this.bitRate, 'constant']).setDelimiter(':');
    }else {
      qualifierValue = new QualifierValue(this.bitRate);
    }
    this.addQualifier(new Qualifier('br', qualifierValue));
    return this;
  }

  static fromJson(actionModel: IActionModel): BitRateAction {
    const {bitRate, constant} = (actionModel as IBitRateActionModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(bitRate);
    constant && result.constant();

    return result;
  }
}

export default BitRateAction;
