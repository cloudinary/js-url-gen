import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Instructs Cloudinary to clear all image meta-data (IPTC, Exif and XMP) while applying an incoming
 * transformation.
 * @return {Values.Flag.FlagQualifier}
 */
function forceStrip(): FlagQualifier {
  return new FlagQualifier('force_strip');
}

export {forceStrip};
