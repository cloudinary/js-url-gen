import Action from "../../actions/Action";

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
    //this.startOffset = new StartOffset(startOffset);
    return this;
  }

  endOffset(endOffset: VideoOffset): this {
    //TODO: add EndOffset
    //this.endOffset = new EndOffset(endOffset);
    return this;
  }

}

export {
  VideoOffset
};

export default VideoOffset;
