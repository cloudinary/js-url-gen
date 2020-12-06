import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region
 * @return {Values.Flag.FlagQualifier}
 */
function regionRelative(): FlagQualifier {
  return new FlagQualifier('region_relative');
}

export {regionRelative};
