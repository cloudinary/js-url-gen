/**
 * @description Defines the video codec profile.
 * @memberOf Values
 * @namespace VideoCodecProfile
 */


/**
 * @@doc
 * @memberOf Values.VideoCodecProfile
 * @return {string}
 */
function high():string {
  return 'high';
}

/**
 * @@doc
 * @memberOf Values.VideoCodecProfile
 * @return {string}
 */
function main():string {
  return 'main';
}

/**
 * @@doc
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
