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
function fullHd():string {
  return 'full_hd';
}

/**
 * @@doc
 * @memberOf Values.StreamingProfile
 * @return {string}
 */
function hd():string {
  return 'hd';
}

/**
 * @@doc
 * @memberOf Values.StreamingProfile
 * @return {string}
 */
function sd():string {
  return 'sd';
}

/**
 * @@doc
 * @memberOf Values.StreamingProfile
 * @return {string}
 */
function fullHdWifi():string {
  return 'full_hd_wifi';
}

/**
 * @@doc
 * @memberOf Values.StreamingProfile
 * @return {string}
 */
function fullHdLean():string {
  return 'full_hd_lean';
}

/**
 * @@doc
 * @memberOf Values.StreamingProfile
 * @return {string}
 */
function hdLean():string {
  return 'hd_lean';
}

const StreamingProfile = {
  hd,
  sd,
  hdLean,
  fullHd,
  fullHdLean,
  fullHdWifi
};


export {
  hd,
  sd,
  hdLean,
  fullHd,
  fullHdLean,
  fullHdWifi,
  StreamingProfile
};
