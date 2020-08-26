import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Instructs Cloudinary to clear all image meta-data (IPTC, Exif and XMP) while applying an incoming
 * transformation.
 */
function forceStrip(): FlagAction{
  return new FlagAction('force_strip');
}

export default forceStrip;
