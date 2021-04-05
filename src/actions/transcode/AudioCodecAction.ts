import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @extends SDK.Action
 * @memberOf Actions.Transcode
 * @description Controls the audio codec or removes the audio channel.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/audio_transformations#audio_frequency_control | Audio codec settings}
 */
class AudioCodecAction extends Action {
  constructor(codec: string) {
    super();
    this.addQualifier(new Qualifier('ac', codec));
  }
}

export default AudioCodecAction;
