import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @class FPSRangeAction
 * @augments Action
 * @description Controls the range of acceptable FPS (Frames Per Second) to ensure that video (even when optimized)
 * is delivered with
 * an expected FPS level (helps with sync to audio).
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_transformation_reference#video_settings | Video settings}
 */
class FPSRangeAction extends Action {
  private from: number;
  private to: number;

  constructor(from: number, to?: number) {
    super();
    this.from = from;
    this.to = to;
  }


  protected prepareQualifiers(): this {
    let qualifierValue;
    if(this.from && this.to) {
      qualifierValue = new QualifierValue(`${this.from}-${this.to}`);
    }else {
      qualifierValue = new QualifierValue(`${this.from}-`);
    }
    this.addQualifier(new Qualifier('fps', qualifierValue));
    return this;
  }
}

export default FPSRangeAction;
