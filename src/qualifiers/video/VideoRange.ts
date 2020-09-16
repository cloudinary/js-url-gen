import Action from "../../actions/Action";
import VideoOffset from "./VideoOffset";
import Qualifier from "../Qualifier";
import QualifierValue from "../QualifierValue";

/**
 * @description Defines a video range using startOffset, endOffset, duration.
 * @namespace VideoRange
 * @memberOf Params
 */


/**
 * VideoRange
 */
class VideoRange extends Action {
  constructor(startOffset: VideoOffset = null, endOffset: VideoOffset = null, duration: number = null) {
    super();
    this.offset((new VideoOffset()).startOffset(startOffset).endOffset(endOffset));
    this.duration(duration);
  }

  /**
   * @param action
   */
  offset(offset: VideoOffset): this {
    offset.qualifiers.forEach((p)=>{
      this.addQualifier(p);
    });
    return this;
  }

  /**
   * @param duration
   */
  duration(duration: number): this {
    return this.addQualifier(new Qualifier('du', new QualifierValue(duration)));
  }

  toString(): string{
    //TODO: remove toString() function and add params in duration() & offset()
    return 'so_7';
  }
}

export {
  VideoRange
};

export default VideoRange;
