import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import * as Flag from "../../values/flag/Flag";
import {AnimatedFormat} from "../../values/animatedFormat/AnimatedFormat";

/**
 * @class ToAnimatedAction
 * @augments Action
 * @description Converts a video to an animated webp or gif.
 * The resulting transformation includes format (f_format) and the animated flag (fl_animated).
 * The flag fl_awebp is added only when an animated webp is requested.
 */
class ToAnimatedAction extends Action {
  constructor(animatedFormat: AnimatedFormat | string) {
    super();
    if (animatedFormat.toString() === 'webp'){
      this.addFlag(Flag.animatedWebP());
    }
    this.addFlag(Flag.animated());
    this.addQualifier(new Qualifier('f', animatedFormat));
  }

  /**
   * @description Sets the time between frames.
   * @param delayValue The time in milliseconds.
   */
  delay(delayValue: number): this {
    this.addQualifier(new Qualifier('dl', delayValue));
    return this;
  }

  /**
   * @description Sets the frequency at which the video is sampled.
   * @param sampling As a string (e.g. '2.3s'), samples one frame every 2.3 seconds.<br>As a number (e.g. 20),
   * samples that many equally spaced frames over the duration of the video.
   */
  sampling(sampling: string|number): this {
    this.addQualifier(new Qualifier('vs', sampling));
    return this;
  }

}
export default ToAnimatedAction;
