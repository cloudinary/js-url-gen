/**
 * @memberOf Values
 * @namespace Quality
 */
class Quality {
  /**
   * @description Quality auto
   * @memberOf Values.Quality
   * @return {string}
   */
  static auto():string { return 'auto';}

  /**
   * @description Quality best
   * @memberOf Values.Quality
   * @return {string}
   */
  static autoBest():string { return 'auto:best';}

  /**
   * @description Quality eco
   * @memberOf Values.Quality
   * @return {string}
   */
  static autoEco():string { return 'auto:eco';}

  /**
   * @description Quality good
   * @memberOf Values.Quality
   * @return {string}
   */
  static autoGood():string { return 'auto:good';}

  /**
   * @description Quality low
   * @memberOf Values.Quality
   * @return {string}
   */
  static autoLow():string { return 'auto:low';}

  /**
   * @description Quality jpegmini
   * @memberOf Values.Quality
   * @return {string}
   */
  static jpegmini():string { return 'jpegmini';}

  /**
   * @description Quality jpegmini best
   * @memberOf Values.Quality
   * @return {string}
   */
  static jpegminiBest():string { return 'jpegmini:0';}

  /**
   * @description Quality jpegmini high
   * @memberOf Values.Quality
   * @return {string}
   */
  static jpegminiHigh():string { return 'jpegmini:1';}

  /**
   * @description Quality jpegmini medium
   * @memberOf Values.Quality
   * @return {string}
   */
  static jpegminiMedium():string { return 'jpegmini:2';}
}

const {auto, autoBest, autoEco, autoGood, autoLow, jpegmini, jpegminiBest, jpegminiHigh, jpegminiMedium} = Quality;

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
