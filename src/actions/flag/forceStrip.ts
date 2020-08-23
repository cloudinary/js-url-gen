import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Instructs Cloudinary to clear all image meta-data (IPTC, Exif and XMP) while applying an incoming transformation.
 *
 * @return static
 *
 * @see Flag::forceStrip
 */
function forceStrip(): IFlagAction{
  return new FlagAction('force_strip');
}

export default forceStrip;
