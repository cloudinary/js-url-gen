import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IAudioFrequencyActionModel} from "../../internal/models/ITranscodeActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @extends SDK.Action
 * @memberOf Actions.Transcode
 * @description Controls audio sample frequency.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/audio_transformations#audio_codec_settings|Audio frequency control}
 * @see Visit {@link Actions.Transcode|Transcode} for an example
 */
class AudioFrequencyAction extends Action {
  protected _actionModel : IAudioFrequencyActionModel = {actionType: 'audioFrequency'};
  constructor(freq: string|number) {
    super();
    this.addQualifier(new Qualifier('af', freq));
    this._actionModel.audioFrequencyType = freq as string;
  }

  static fromJson(actionModel: IActionModel): AudioFrequencyAction {
    const {audioFrequencyType} = (actionModel as IAudioFrequencyActionModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(audioFrequencyType.replace('freq', ''));

    return result;
  }
}

export default AudioFrequencyAction;
