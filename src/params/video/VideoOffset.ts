import Action from "../../actions/Action";
import Param from "../../parameters/Param";

/**
 * @description Defines a video range using startOffset, endOffset, duration.
 * @namespace VideoRange
 * @memberOf Params
 */


/**
 * VideoRange
 */
class VideoOffset extends Action {

  constructor() {
    super();
  }

  startOffset(startOffset: VideoOffset): this {
    //TODO: add StartOffset
    return this.addParam(new Param("so", startOffset.toString()));
  }

  endOffset(endOffset: VideoOffset): this {
    //TODO: add EndOffset
    return this.addParam(new Param("eo", endOffset.toString()));
  }

}

export {
  VideoOffset
};

export default VideoOffset;
