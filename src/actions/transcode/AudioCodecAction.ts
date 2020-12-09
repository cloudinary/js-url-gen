import Action from "../../sdk/Action";
import Qualifier from "../../sdk/qualifier/Qualifier";

/**
 * @class AudioCodecAction
 * @augments Action
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
