import {AdvVideoCodecType, VideoCodecType} from "./videoCodecType/VideoCodecType";
/**
 * @description Determines the video codec to use.
 * @memberOf Values
 * @namespace VideoCodec
 */


/**
 * @description Auto video codec.
 * @memberOf Values.VideoCodec
 * @returns {Values.VideoCodec.VideoCodecType}
 */
function auto(): VideoCodecType {
  return new VideoCodecType('auto');
}

/**
 * @description Video codec h264.
 * @memberOf Values.VideoCodec
 * @returns {Values.VideoCodec.AdvVideoCodecType}
 */
function h264(): AdvVideoCodecType {
  return new AdvVideoCodecType('h264');
}

/**
 * @description h265 video codec.
 * @memberOf Values.VideoCodec
 * @returns {Values.VideoCodec.VideoCodecType}
 */
function h265(): VideoCodecType {
  return new VideoCodecType('h265');
}

/**
 * @description Video codec proRes (Apple ProRes 422 HQ).
 * @memberOf Values.VideoCodec
 * @returns {Values.VideoCodec.VideoCodecType}
 */
function proRes(): VideoCodecType {
  return new VideoCodecType('prores');
}

/**
 * @description Video codec theora.
 * @memberOf Values.VideoCodec
 * @returns {Values.VideoCodec.VideoCodecType}
 */
function theora(): VideoCodecType {
  return new VideoCodecType('theora');
}

/**
 * @description Video codec vp8.
 * @memberOf Values.VideoCodec
 * @returns {Values.VideoCodec.VideoCodecType}
 */
function vp8(): VideoCodecType {
  return new VideoCodecType('vp8');
}

/**
 * @description Video codec vp9.
 * @memberOf Values.VideoCodec
 * @returns {Values.VideoCodec.VideoCodecType}
 */
function vp9():VideoCodecType {
  return new VideoCodecType('vp9');
}

const VideoCodec = { auto, h264, h265, proRes, theora, vp8, vp9};
export {VideoCodec, auto, h264, h265, proRes, theora, vp8, vp9};
