import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @class BitRateAction
 * @augments Action
 * @description  Defines the video bitrate in bits per second.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#bitrate_control | Bitrate control}
 */
class BitRateAction extends Action {
  private bitRate: string|number;
  private isConstant = false;

  constructor(bitRate: string|number) {
    super();
    this.bitRate = bitRate;
  }
  /**
   * @description video plays with a constant bitrate (CBR).
   */
  constant(): this {
    this.isConstant = true;
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
}

export default BitRateAction;
