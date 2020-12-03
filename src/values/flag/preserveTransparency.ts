import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description When used with automatic fetch_format (f_auto): ensures that images with a transparency channel will be
 * delivered in PNG format.
 * @return {Values.Flag.FlagQualifier}
 */
function preserveTransparency(): FlagQualifier {
  return new FlagQualifier('preserve_transparency');
}

export {preserveTransparency};
