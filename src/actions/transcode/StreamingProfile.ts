import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

/**
 * @class StreamingProfileAction
 * @augments Action
 * @description The predefined streaming profiles.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#predefined_streaming_profiles | Predefined streaming profiles}
 */
class StreamingProfileAction extends Action {
  constructor(profile: string|number) {
    super();
    this.addQualifier(new Qualifier('sp', profile));
  }
}

export default StreamingProfileAction;
