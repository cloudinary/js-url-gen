import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @augments Action
 * @description Controls audio sample frequency.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/audio_transformations#audio_codec_settings | Audio frequency control}
 */
class AudioFrequencyAction extends Action {
  constructor(freq: string|number) {
    super();
    this.addQualifier(new Qualifier('af', freq));
  }
}

export default AudioFrequencyAction;
