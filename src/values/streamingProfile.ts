/**
 * @description Values for applying an ordered dither filter to the image.
 * @namespace StreamingProfile
 * @memberOf Values
 */


/**
 * @@doc
 * @memberOf Values.StreamingProfile
 * @return {string}
 */
function fullHD():string {
  return 'full_hd';
}

/**
 * @@doc
 * @memberOf Values.StreamingProfile
 * @return {string}
 */
function HD():string {
  return 'hd';
}

/**
 * @@doc
 * @memberOf Values.StreamingProfile
 * @return {string}
 */
function SD():string {
  return 'sd';
}

/**
 * @@doc
 * @memberOf Values.StreamingProfile
 * @return {string}
 */
function fullHDWifi():string {
  return 'full_hd_wifi';
}

/**
 * @@doc
 * @memberOf Values.StreamingProfile
 * @return {string}
 */
function fullHDLean():string {
  return 'full_hd_lean';
}

/**
 * @@doc
 * @memberOf Values.StreamingProfile
 * @return {string}
 */
function HDLean():string {
  return 'hd_lean';
}

const StreamingProfile = {
  HD,
  SD,
  HDLean,
  fullHD,
  fullHDLean,
  fullHDWifi
};


export {
  HD,
  SD,
  HDLean,
  fullHD,
  fullHDLean,
  fullHDWifi,
  StreamingProfile
};
