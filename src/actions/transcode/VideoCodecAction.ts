import {Action} from "../../internal/Action";
import {AdvVideoCodecType, VideoCodecType} from "../../values/videoCodecType/VideoCodecType";

/**
 * @extends {SDK.Action}
 * @memberOf Values.VideoCodec
 * @description Converts a video to an animated webp or gif.
 */
class VideoCodecAction extends Action {
  constructor(videoCodecTypeQualifier : VideoCodecType | AdvVideoCodecType) {
    super();
    this.addQualifier(videoCodecTypeQualifier);
  }
}
export {VideoCodecAction};
