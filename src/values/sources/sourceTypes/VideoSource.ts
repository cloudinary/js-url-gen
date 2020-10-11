import {ISource} from "../ISource";
import TransformableVideo from "../../../transformation/TransformableVideo";

/**
 * @description Defines how to manipulate a video layer, is an instance of a {@link TransformableVideo|TransformableVideo}
 * @class VideoSource
 * @augments {TransformableVideo}
 * @implements {ISource}
 */
class VideoSource extends TransformableVideo implements ISource {
  getSource():string {
    return this.asset.publicID;
  }

  getTransformationString():string {
    return this.toString();
  }
}

export {VideoSource};
