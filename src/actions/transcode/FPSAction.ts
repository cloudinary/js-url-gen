import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IFPSActionModel, IFPSRangeActionModel} from "../../internal/models/ITranscodeActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import FPSRangeAction from "./FPSRangeAction.js";

/**
 * @extends SDK.Action
 * @memberOf Actions.Transcode
 * @description Controls the FPS (Frames Per Second) to ensure that video (even when optimized)
 * is delivered with
 * an expected FPS level (helps with sync to audio).
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_transformation_reference#video_settings|Video settings}
 * @see Visit {@link Actions.Transcode|Transcode} for an example
 */
class FPSAction extends Action {
  protected _actionModel : IFPSActionModel = {actionType: 'fps'};

  constructor(from: number) {
    super();
    this._actionModel.fps = from;
    this.addQualifier(new Qualifier('fps', from));
  }

  static fromJson(actionModel: IActionModel): FPSAction | FPSRangeAction {
    const {fps} = (actionModel as IFPSActionModel);
    let result;
    if(typeof fps === 'object') {
      //@ts-ignore
      result = new FPSRangeAction(fps.from, fps.to);
    }else {
      result = new this(fps);
    }
    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created

    return result;
  }
}

export default FPSAction;
