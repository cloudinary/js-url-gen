import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description Class for shortening a video to the specified range.
 * @class TrimAction
 * @augments Action
 */
class TrimAction extends Action {
  constructor() {
    super();
  }

  /**
   * @description Sets the starting position of the part of the video to keep when trimming videos.
   *
   * @param {string|number} offset The starting position of the part of the video to keep. This can be specified as a
   *                           float representing the time in seconds or a string representing the percentage of the
   *                           video length (for example, "30%" or "30p").
   * @return {this}
   */
  startOffset(offset: string|number): this {
    return this.addQualifier(new Qualifier('so', offset));
  }

  /**
   * @description Sets the end position of the part of the video to keep when trimming videos.
   *
   * @param {string|number} offset The end position of the part of the video to keep. This can be specified as a
   *                         float representing the time in seconds or a string representing the percentage of the
   *                         video length (for example, "30%" or "30p").
   * @return {this}
   */
  endOffset(offset: string|number): this {
    return this.addQualifier(new Qualifier('eo', offset));
  }

  /**
   * @description Sets the duration of the video to keep.
   *
   * @param {string|number} duration The length of the part of the video to keep. This can be specified as a float
   *                        representing the time in seconds or a string representing the percentage of the
   *                        video length (for example, "30%" or "30p").
   * @return {this}
   */
  duration(duration: string|number): this {
    return this.addQualifier(new Qualifier('du', duration));
  }
}

export default TrimAction;
