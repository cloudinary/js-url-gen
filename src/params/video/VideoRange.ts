import Action from "../../actions/Action";
import VideoOffset from "./VideoOffset";
import Duration from "./Duration";
import {mapToSortedArray} from "../../utils/dataStructureUtils";

/**
 * @description Defines a video range using startOffset, endOffset, duration.
 * @namespace VideoRange
 * @memberOf Params
 */


/**
 * VideoRange
 */
class VideoRange extends Action {
  private _offset: VideoOffset;
  private _duration: Duration;

  constructor(startOffset: VideoOffset|any = null, endOffset: VideoOffset|any = null, duration: Duration|any = null) {
    super();
    this.offset((new VideoOffset()).startOffset(startOffset).endOffset(endOffset));
    this.duration(duration);
  }

  /**
   * @param action
   */
  offset(offset: VideoOffset): this {
    this._offset = offset;
    return this;
  }

  /**
   * @param action
   */
  duration(duration: Duration): this {
    this._duration = duration;
    return this;
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
