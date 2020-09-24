import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description Instructs Cloudinary to clear all image meta-data (IPTC, Exif and XMP) while applying an incoming
 * transformation.
 * @return {Flag}
 */
function forceStrip(): Flag{
  return new Flag('force_strip');
}

export default forceStrip;
