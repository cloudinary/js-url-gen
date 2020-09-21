import Flag from './FlagParam';

/**
 * @memberOf Params.Flag
 * @description Instructs Cloudinary to clear all image meta-data (IPTC, Exif and XMP) while applying an incoming
 * transformation.
 */
function forceStrip(): Flag{
  return new Flag('force_strip');
}

export default forceStrip;
