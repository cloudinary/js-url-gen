/**
 * @memberOf Values
 * @namespace Quality
 */

/**
 * @summary qualifier
 * @description Quality auto
 * @memberOf Values.Quality
 * @return {string}
 */
function auto():string { return 'auto';}

/**
 * @summary qualifier
 * @description Quality best
 * @memberOf Values.Quality
 * @return {string}
 */
function autoBest():string { return 'auto:best';}

/**
 * @summary qualifier
 * @description Quality eco
 * @memberOf Values.Quality
 * @return {string}
 */
function autoEco():string { return 'auto:eco';}

/**
 * @summary qualifier
 * @description Quality good
 * @memberOf Values.Quality
 * @return {string}
 */
function autoGood():string { return 'auto:good';}

/**
 * @summary qualifier
 * @description Quality low
 * @memberOf Values.Quality
 * @return {string}
 */
function autoLow():string { return 'auto:low';}

/**
 * @summary qualifier
 * @description Quality jpegmini
 * @memberOf Values.Quality
 * @return {string}
 */
function jpegmini():string { return 'jpegmini';}

/**
 * @summary qualifier
 * @description Quality jpegmini best
 * @memberOf Values.Quality
 * @return {string}
 */
function jpegminiBest():string { return 'jpegmini:0';}

/**
 * @summary qualifier
 * @description Quality jpegmini high
 * @memberOf Values.Quality
 * @return {string}
 */
function jpegminiHigh():string { return 'jpegmini:1';}

/**
 * @summary qualifier
 * @quality
 * @description Quality jpegmini medium
 * @memberOf Values.Quality
 * @return {string}
 */
function jpegminiMedium():string { return 'jpegmini:2';}

const Quality = {auto, autoBest, autoEco, autoGood, autoLow, jpegmini, jpegminiBest, jpegminiHigh, jpegminiMedium};

export {
  Quality,
  auto,
  autoBest,
  autoEco,
  autoGood,
  autoLow,
  jpegmini,
  jpegminiBest,
  jpegminiHigh,
  jpegminiMedium
};
