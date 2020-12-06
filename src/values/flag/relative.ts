import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
 * @return {Values.Flag.FlagQualifier}
 */
function relative(): FlagQualifier {
  return new FlagQualifier('relative');
}

export {relative};
