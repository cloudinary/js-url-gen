/**
 * @memberOf Values
 * @namespace Quality
 */

/**
 * @description Quality auto
 * @memberOf Values.Quality
 * @return {string}
 */
function auto():string { return 'auto';}

/**
 * @description Quality best
 * @memberOf Values.Quality
 * @return {string}
 */
function autoBest():string { return 'auto:best';}

/**
 * @description Quality eco
 * @memberOf Values.Quality
 * @return {string}
 */
function autoEco():string { return 'auto:eco';}

/**
 * @description Quality good
 * @memberOf Values.Quality
 * @return {string}
 */
function autoGood():string { return 'auto:good';}

/**
 * @description Quality low
 * @memberOf Values.Quality
 * @return {string}
 */
function autoLow():string { return 'auto:low';}

/**
 * @description Quality jpegmini
 * @memberOf Values.Quality
 * @return {string}
 */
function jpegmini():string { return 'jpegmini';}

/**
 * @description Quality jpegmini best
 * @memberOf Values.Quality
 * @return {string}
 */
function jpegminiBest():string { return 'jpegmini:0';}

/**
 * @description Quality jpegmini high
 * @memberOf Values.Quality
 * @return {string}
 */
function jpegminiHigh():string { return 'jpegmini:1';}

/**
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
