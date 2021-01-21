/**
 * @description Contains functions to select the video codec profile.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#video_codec_settings | Video codec settings}
 * @memberOf Values
 * @namespace VideoCodecProfile
 */


/**
 * @memberOf Values.VideoCodecProfile
 * @return {string}
 */
function high():string {
  return 'high';
}

/**
 * @memberOf Values.VideoCodecProfile
 * @return {string}
 */
function main():string {
  return 'main';
}

/**
 * @memberOf Values.VideoCodecProfile
 * @return {string}
 */
function baseline():string {
  return 'baseline';
}

const VideoCodecProfile = {
  baseline,
  main,
  high
};

export {
  VideoCodecProfile,
  baseline,
  main,
  high
};
