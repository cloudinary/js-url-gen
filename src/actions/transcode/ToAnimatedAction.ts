import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import Flag from "../../values/flag/Flag";

/**
 * @class ToAnimatedAction
 * @augments Action
 * @@doc
 * @description Converts a video to an animated webp or gif.
 * The resulted transformation will include format (f_format) and animated flag (fl_animated).
 * The flag fl_awebp is added only when an animated webp is desired.
 */
class ToAnimatedAction extends Action {
  constructor(animatedFormat: string) {
    super();
    if (animatedFormat === 'webp'){
      this.addFlag(Flag.animatedWebP());
    }
    this.addFlag(Flag.animated());
    this.addQualifier(new Qualifier('f', animatedFormat));
  }

  /**
   * @@doc
   * @description not defined
   * @param delayValue
   */
  delay(delayValue: number): this {
    this.addQualifier(new Qualifier('dl', delayValue));
    return this;
  }

  /**
   * @@doc
   * @description The value represents the number of frames to be extracted from the movie. If a string, in
   * the format of ‘2s’, it will sample every 2 seconds
   * @param sampling
   */
  sampling(sampling: string|number): this {
    this.addQualifier(new Qualifier('vs', sampling));
    return this;
  }

}
export default ToAnimatedAction;
