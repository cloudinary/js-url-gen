import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IAudioCodecAction} from "../../internal/models/ITranscodeActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @extends SDK.Action
 * @memberOf Actions.Transcode
 * @description Controls the audio codec or removes the audio channel.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/audio_transformations#audio_frequency_control|Audio codec settings}
 * @see Visit {@link Actions.Transcode|Transcode} for an example
 */
class AudioCodecAction extends Action {
  protected _actionModel : IAudioCodecAction = {actionType: 'audioCodec'};
  constructor(codec: string) {
    super();
    this.addQualifier(new Qualifier('ac', codec));
    this._actionModel.audioCodec = codec;
  }

  static fromJson(actionModel: IActionModel): AudioCodecAction {
    const {audioCodec} = (actionModel as IAudioCodecAction);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(audioCodec);

    return result;
  }
}

export default AudioCodecAction;
