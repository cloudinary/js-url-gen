import Action from "../../actions/Action";
import VideoOffset from "./VideoOffset";
import Duration from "./Duration";
import {mapToSortedArray} from "../../utils/dataStructureUtils";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";

/**
 * @description Defines a video range using startOffset, endOffset, duration.
 * @namespace VideoRange
 * @memberOf Params
 */


/**
 * VideoRange
 */
class VideoRange extends Action {
  constructor(startOffset: VideoOffset|any = null, endOffset: VideoOffset|any = null, duration: Duration|any = null) {
    super();
    this.offset((new VideoOffset()).startOffset(startOffset).endOffset(endOffset));
    this.duration(duration);
  }

  /**
   * @param action
   */
  offset(offset: VideoOffset): this {
    offset.params.forEach(p=>{
      this.addParam(p);
    });
    return this;
  }

  /**
   * @param duration
   */
  duration(duration: number): this {
    return this.addParam(new Param('du', new ParamValue(duration)));
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
