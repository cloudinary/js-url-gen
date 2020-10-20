import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region
 * @return {Flag}
 */
function regionRelative(): Flag{
  return new Flag('region_relative');
}

export default regionRelative;
