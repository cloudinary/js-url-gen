import {ISource} from "./ISource";
import TransformableVideo from "../../transformation/TransformableVideo";

/**
 * @extends {TransformableVideo}
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

export default VideoSource;
